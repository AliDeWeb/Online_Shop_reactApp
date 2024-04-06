import React, { useEffect, useRef, useState } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

// React Router
import { Link, useParams, useNavigate } from "react-router-dom";

// React Spinners
import ClipLoader from "react-spinners/ClipLoader";

// Axios
import { postNewPasswordChangePassword } from "../../configs/axios/axiosConfigs";

export default function ForgetPasswordNewEmail() {
  const navigator = useNavigate();
  const param = useParams();
  const [isDataFetching, setIsDataFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setIsDataFetching(true);
    let passwordData = {
      token: param.token,
      password: data.newPassword,
    };
    postNewPasswordChangePassword({
      data: passwordData,
    })
      .then((res) => {
        navigator("/login");
      })
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
              <button
                onClick={() => {
                  navigator(-1);
                }}
                className="text-sm font-dana text-gray-400"
              >
                بازگشت
              </button>
            </div>
            <h2 className="font-danaBold text-xl mb-2 text-zinc-700">
              رمز عبور جدید
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              لطفا رمز عبور جدید را وارد نمایید
            </p>
            <label htmlFor="newPassword" className="mb-1.5">
              رمز عبور
            </label>
            <input
              {...register(`newPassword`, {
                required: "این فیلد نمیتواند خالی باشد",
                minLength: {
                  value: 8,
                  message: "رمز عبور باید حداقل 8 رقم باشد",
                },
              })}
              id="newPassword"
              type="text"
              placeholder="12345678"
              className="font-poppins mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.newPassword && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.newPassword.message}
              </span>
            )}

            <button
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-100 hover:bg-orange-200 hover:scale-90 transition-all rounded-lg flex justify-center items-center"
              type="submit"
            >
              {isDataFetching ? (
                <ClipLoader color="#d97706" size="18" />
              ) : (
                "دریافت کد"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
