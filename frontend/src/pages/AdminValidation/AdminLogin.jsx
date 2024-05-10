import { useEffect, useRef, useState } from "react";

// Axios
import { usersValidation } from "../../configs/axios/axiosConfigs";

// React Hook Form
import { useForm } from "react-hook-form";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

// React Router
import { useNavigate, Link } from "react-router-dom";

// React Spinners
import ClipLoader from "react-spinners/ClipLoader";

export default function AdminLogin() {
  const navigator = useNavigate();
  const [isDataFetching, setIsDataFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setIsDataFetching(true);
    let userData = {
      email: data.emailAddress.trim(),
      password: data.password.trim(),
    };

    usersValidation({
      url: "/loginAdmin",
      data: userData,
    })
      .then(() =>
        setTimeout(() => {
          navigator(`/admin-login-verify/${userData.email}`);
        }, 2000)
      )
      .finally(() => {
        setIsDataFetching(false);
      });
  };

  const pageWrapper = useRef();
  useEffect(() => {
    pageWrapper.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, []);

  useEffect(() => {
    document.title = "تیمچه - ورود ادمین";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <div className="container">
        <div
          ref={pageWrapper}
          className="flex justify-center items-center min-h-[100dvh] font-dana my-10"
        >
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col bg bg-white py-8 px-6 rounded-lg w-[calc(100%-(32px))] sm:w-[400px] text-zinc-700"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-[80px]">
                <Link className="w-[80px]" to="/home">
                  <img src={siteLogo} alt="img" />
                </Link>
              </div>
              <Link to="/home" className="text-sm font-dana text-gray-400">
                بازگشت
              </Link>
            </div>
            <h2 className="font-danaBold text-xl mb-2 text-zinc-700">
              خوش برگشتی ادمین جون ;)
            </h2>
            <label htmlFor="emailAddress" className="mb-1.5">
              ایمیل
            </label>
            <input
              dir="ltr"
              {...register(`emailAddress`, {
                required: "این فیلد نمیتواند خالی باشد",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
                  message: "ایمیل را به درستی وارد نمایید",
                },
              })}
              id="emailAddress"
              type="text"
              placeholder="ali@gmail.com"
              className="direction-ltr font-poppins mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.emailAddress && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.emailAddress.message}
              </span>
            )}
            <label htmlFor="password" className="mb-1.5">
              رمز عبور
            </label>
            <input
              dir="ltr"
              {...register(`password`, {
                required: "این فیلد نمیتواند خالی باشد",
                minLength: {
                  value: 8,
                  message: "رمز عبور باید حداقل 8 کارکتر داشته باشد",
                },
              })}
              id="password"
              type="password"
              placeholder="password"
              className="direction-ltr font-poppins mb-4  mt-1 outline-none  bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.password && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.password.message}
              </span>
            )}
            <button
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-100 hover:bg-orange-200 hover:scale-90 transition-all rounded-lg flex justify-center items-center"
              type="submit"
            >
              {isDataFetching ? (
                <ClipLoader color="#d97706" size="18" />
              ) : (
                "برو بریم..."
              )}
            </button>

            <Link
              to="/forgot-password"
              className="inline-block mt-4 font-dana text-xs text-zinc-700"
            >
              فراموشی رمز عبور
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
