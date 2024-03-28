import React, { useEffect, useRef } from "react";

// Axios
import { usersValidation } from "../../configs/axios/axiosConfigs";

// React Hook Form
import { useForm } from "react-hook-form";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

// React Router
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    let userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phoneNumber,
      userName: `${data.firstName}${data.lastName}${Math.random().toFixed(6)}`,
      email: data.emailAddress,
      password: data.password,
      address: "unset",
    };

    usersValidation({
      url: "/register",
      data: userData,
    }).then(() =>
      setTimeout(() => {
        navigator("/home");
      }, 3000)
    );
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
                <img src={siteLogo} alt="img" />
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
              خوش اومدی ;)
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              خرید جدیدترین محصولات با کیفیت روز با تیمچه
            </p>
            <label htmlFor="firstName" className="mb-1.5">
              نام
            </label>
            <input
              {...register(`firstName`, {
                required: "این فیلد نمیتواند خالی باشد",
              })}
              id="firstName"
              type="text"
              placeholder="علی..."
              className="mb-4 mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.firstName && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.firstName.message}
              </span>
            )}
            <label htmlFor="lastName" className="mb-1.5">
              نام خانوادگی
            </label>
            <input
              {...register(`lastName`, {
                required: "این فیلد نمیتواند خالی باشد",
              })}
              id="lastName"
              type="text"
              placeholder="احمدی..."
              className="mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.lastName && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.lastName.message}
              </span>
            )}
            <label htmlFor="phoneNumber" className="mb-1.5">
              شماره تماس
            </label>
            <input
              {...register(`phoneNumber`, {
                required: "این فیلد نمیتواند خالی باشد",
                pattern: {
                  value: /^((?:\+98|0|98)?)(?:9\d{9})$/i,
                  message: "شماره تلفن را به درستی وارد نمایید",
                },
              })}
              id="phoneNumber"
              type="text"
              placeholder="989123456789"
              className="mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.phoneNumber && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.phoneNumber.message}
              </span>
            )}
            <label htmlFor="emailAddress" className="mb-1.5">
              ایمیل
            </label>
            <input
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
              className="font-poppins mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
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
              {...register(`password`, {
                required: "این فیلد نمیتواند خالی باشد",
                minLength: {
                  value: 8,
                  message: "رمز عبور باید حداقل 8 کارکتر داشته باشد",
                },
              })}
              id="password"
              type="password"
              placeholder="رمز عبور قوی انتخاب نمایید"
              className="font-poppins mb-4  mt-1 outline-none  bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
            />
            {errors.password && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.password.message}
              </span>
            )}
            <input
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-100 hover:bg-orange-200 hover:scale-90 transition-all rounded-lg"
              type="submit"
              value="برو بریم..."
            />
          </form>
        </div>
      </div>
    </div>
  );
}
