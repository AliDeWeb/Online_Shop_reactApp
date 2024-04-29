import { useState } from "react";

// Imgs
import statusProcessing from "../../assets/imgs/icons/status-processing.svg";
import statusDelivered from "../../assets/imgs/icons/status-delivered.svg";
import statusReturned from "../../assets/imgs/icons/status-returned.svg";

// React Hook Form
import { useForm } from "react-hook-form";

// React Spinners
import ClipLoader from "react-spinners/ClipLoader";

// Axios
import { getUserPanelData, updateUser } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Router
import { Link } from "react-router-dom";

// Icons
import { IoIosArrowBack } from "react-icons/io";

export default function UserPanelHome() {
  const queryClient = useQueryClient();
  const { userToken } = useUserToken();
  const {
    data: infosData,
    isLoading,
    refetch,
  } = useQuery(
    `userPanelInfos`,
    async () => {
      if (userToken) {
        const res = await getUserPanelData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      initialData: () => {
        const data = queryClient.getQueryData(`userPanelInfos`);
        return data;
      },
    }
  );

  const [isDataFetching, setIsDataFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setIsDataFetching(true);
    let userData = {
      firstName: data.userName,
      lastName: data.userLastName,
      email: data.emailAddress,
      phone: data.userPhone,
    };

    updateUser({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: userData,
    })
      .then(() => {
        refetch();
      })
      .finally(() => {
        setIsDataFetching(false);
      });
  };

  return (
    <div>
      <div>
        <h2 className="font-danaBold text-lg w-max relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
          سفارش های من
        </h2>
      </div>
      {!isLoading && (
        <div className="mt-6 grid grid-cols-3 justify-center">
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={statusProcessing}
              alt="icon"
              className="size-[33px] sm:size-[64px]"
            />
            <div className="flex flex-col justify-center gap-0.5 font-dana mr-0.5 sm:mr-2">
              <span className="text-zinc-700 line-clamp-1 font-danaBold text-xs sm:text-sm">
                {infosData?.orders?.processingOrders?.length} سفارش
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 line-clamp-1">
                در حال ارسال
              </span>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={statusDelivered}
              alt="icon"
              className="size-[33px] sm:size-[64px]"
            />
            <div className="flex flex-col justify-center gap-0.5 font-dana mr-0.5 sm:mr-2">
              <span className="text-zinc-700 line-clamp-1 font-danaBold text-xs sm:text-sm">
                {infosData?.orders?.successfullOrders?.length} سفارش
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 line-clamp-1">
                تحویل داده شده
              </span>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={statusReturned}
              alt="icon"
              className="size-[33px] sm:size-[64px]"
            />
            <div className="flex flex-col justify-center gap-0.5 font-dana mr-0.5 sm:mr-2">
              <span className="text-zinc-700 line-clamp-1 font-danaBold text-xs sm:text-sm">
                {infosData?.orders?.pendingPaymentOrders?.length} سفارش
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 line-clamp-1">
                در انتظار پرداخت
              </span>
            </div>
          </div>
        </div>
      )}
      <div>
        <h2 className="font-danaBold text-lg w-max relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg mt-8 mb-2">
          مشخصات من
        </h2>
        <span className="text-sm text-gray-400 font-dana">
          برای ویرایش کلیک کنید.
        </span>
      </div>
      <div className="mt-4">
        {!isLoading && (
          <form
            onSubmit={handleSubmit(submitForm)}
            className="rounded-lg text-zinc-700 px-4"
          >
            <div className="grid grid-cols-4 gap-x-6 gap-y-3">
              <div className="col-span-4 sm:col-span-2 flex flex-col">
                <label htmlFor="userName" className="mb-1.5 font-dana">
                  نام
                </label>
                <input
                  {...register(`userName`, {
                    required: "این فیلد نمیتواند خالی باشد",
                  })}
                  defaultValue={infosData.user.firstName}
                  id="userName"
                  type="text"
                  placeholder="علی..."
                  className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
                />
                {errors.userName && (
                  <span className="text-red-400 mb-4 text-xs sm:text-sm">
                    * {errors.userName.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 sm:col-span-2 flex flex-col">
                <label htmlFor="userLastName" className="mb-1.5 font-dana">
                  نام خانوادگی
                </label>
                <input
                  {...register(`userLastName`, {
                    required: "این فیلد نمیتواند خالی باشد",
                  })}
                  defaultValue={infosData.user.lastName}
                  id="userLastName"
                  type="text"
                  placeholder="احمدی..."
                  className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
                />
                {errors.userLastName && (
                  <span className="text-red-400 mb-4 text-xs sm:text-sm">
                    * {errors.userLastName.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 sm:col-span-2 flex flex-col">
                <label htmlFor="emailAddress" className="mb-1.5 font-dana">
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
                  defaultValue={infosData.user.email}
                  type="text"
                  placeholder="ali@gmail.com"
                  className="font-poppins mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
                />
                {errors.emailAddress && (
                  <span className="text-red-400 mb-4 text-xs sm:text-sm">
                    * {errors.emailAddress.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 sm:col-span-2 flex flex-col">
                <label htmlFor="userPhone" className="mb-1.5 font-dana">
                  شماره تلفن
                </label>
                <input
                  {...register(`userPhone`, {
                    required: "این فیلد نمیتواند خالی باشد",
                    pattern: {
                      value: /^09\d{9}$/i,
                      message: "شماره تلفن را به درستی وارد نمایید",
                    },
                  })}
                  id="userPhone"
                  defaultValue={infosData.user.phone}
                  type="text"
                  placeholder="09123456789"
                  className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-200 focus:border-orange-300 pb-2 text-sm sm:text-base"
                />
                {errors.userPhone && (
                  <span className="text-red-400 mb-4 text-xs sm:text-sm">
                    * {errors.userPhone.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="flex items-center gap-1 font-dana text-red-500 transition-all hover:text-red-600 pb-4"
              >
                تغییر رمز عبور
                <IoIosArrowBack />
              </Link>
            </div>

            <button
              className="font-danaBold sm:text-base text-sm mt-2 sm:mt-4 cursor-pointer px-4 h-[40px] bg-orange-100 hover:bg-orange-200 hover:scale-90 transition-all rounded-lg flex justify-center items-center"
              type="submit"
            >
              {isDataFetching ? (
                <ClipLoader color="#d97706" size="18" />
              ) : (
                "ذخیره تغییرات"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
