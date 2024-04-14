import React from "react";

import { CartProductBox } from "../../configs/Layout/Layout";

// Icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";

// React Router
import { Link } from "react-router-dom";

// React Query
import { useQuery } from "react-query";

// Axios
import { getCartProducts, apiUrl } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function CheckOut() {
  const [isShowEditAddress, setIsShowEditAddress] = React.useState(false);

  const { userToken } = useUserToken();
  const { data, isLoading, refetch } = useQuery(
    `cartPage`,
    async () => {
      const res = await getCartProducts({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return res.data;
    },
    {
      cacheTime: 30000,
      staleTime: 0,
      refetchOnMount: true,
    }
  );

  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-6 lg:col-span-4 grid gap-4">
            <div className="py-3 px-6 border-2 border-solid border-gray-400/50 rounded-lg flex flex-col gap-8">
              <div className="flex justify-between items-start font-dana text-gray-400 gap-1">
                <div className="flex flex-col">
                  <span className="md:text-xl text-zinc-700">
                    آدرس ارسال سفارش
                  </span>
                  <span className="text-sm">آدرس را انتخاب یا ویرایش کنید</span>
                </div>
                <div>
                  <HiOutlineDotsVertical size="1.4rem" color="rgb(63,63,70)" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col items-start gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="text-orange-400">
                      <MdOutlineLocationOn size="1.8rem" />
                    </div>
                    <select className="bg-transparent outline-none border-none font-dana text-sm sm:text-base sm:w-max w-3/4">
                      <option
                        className="font-dana text-zinc-700 text-lg line-clamp-1"
                        value=""
                      >
                        قزوین، ولیعصر، خیابان خیام، چهار راه فردوسی
                      </option>
                      <option
                        className="font-dana text-zinc-700 text-lg line-clamp-1"
                        value=""
                      >
                        قزوین، ولیعصر، خیابان خیام، چهار راه فردوسی
                      </option>
                      <option
                        className="font-dana text-zinc-700 text-lg line-clamp-1"
                        value=""
                      >
                        قزوین، ولیعصر، خیابان خیام، چهار راه فردوسی
                      </option>
                      <option
                        className="font-dana text-zinc-700 text-lg line-clamp-1"
                        value=""
                      >
                        قزوین، ولیعصر، خیابان خیام، چهار راه فردوسی
                      </option>
                    </select>
                  </div>
                  <button
                    className="font-dana text-sm text-orange-500 mt-4 flex items-center gap-1 transition-all hover:scale-95"
                    onClick={() => {
                      setIsShowEditAddress(true);
                    }}
                  >
                    اضافه کردن ادرس جدید
                    <FaLessThan size="0.5rem" />
                  </button>

                  {!!isShowEditAddress && (
                    <div className="flex items-center gap-2 bg-gray-100 h-[40px] px-6 rounded-md w-full">
                      <input
                        className="bg-transparent h-full w-full border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
                        type="text"
                        placeholder="آدرس جدید"
                      />
                      <button
                        onClick={() => {
                          setIsShowEditAddress(false);
                        }}
                      >
                        <IoMdCheckmark size="0.9rem" color="#696969" />
                      </button>
                      <button
                        onClick={() => {
                          setIsShowEditAddress(false);
                        }}
                      >
                        <IoIosClose size="1.2rem" color="#696969" />
                      </button>
                    </div>
                  )}
                </div>
                <div></div>
              </div>
            </div>
            <div className="py-3 px-6 border-2 border-solid border-gray-400/50 rounded-lg flex flex-col gap-8">
              <div className="flex justify-between items-start font-dana text-gray-400 gap-1">
                <div className="flex flex-col">
                  <span className="md:text-xl text-zinc-700">کالا ها</span>
                  <div className="flex items-center gap-1 text-sm md:text-base">
                    <span>
                      {data?.countOfProducts ? data?.countOfProducts : 0}
                    </span>
                    کالا
                  </div>
                </div>
                <div>
                  <HiOutlineDotsVertical size="1.4rem" color="rgb(63,63,70)" />
                </div>
              </div>
              <div className="divide-y divide-solid divide-gray-400/50">
                {!isLoading &&
                  data?.items.map((el) => (
                    <React.Fragment key={Math.random()}>
                      <CartProductBox
                        refetch={refetch}
                        productId={el.product._id}
                        color={ null}
                        size={null}
                        title={el.product.title}
                        cover={`${apiUrl}/${el.product.covers[0]}`}
                        warranty={el.warranty}
                        transportTime={el.product.transport.time}
                        productCount={
                          el?.count
                            ? el?.count
                            : el?.color?.length
                              ? el?.color[0]?.count
                              : el?.size?.length
                                ? el?.size[0]?.count
                                : 0
                        }
                        price={
                          el?.product?.mainPrice
                            ? el?.product?.mainPrice
                            : el?.color?.length
                              ? el?.color[0]?.price
                              : el?.size?.length
                                ? el?.size[0]?.price
                                : 0
                        }
                        discounted={
                          el?.product?.off
                            ? el?.product?.discountedPrice
                            : el?.color?.length
                              ? el.color[0]?.discountedPrice
                              : el?.size?.length
                                ? el.size[0].discountedPrice
                                : 0
                        }
                        href={`/product/${el.product.href}`}
                        notShowCounter={true}
                      />
                    </React.Fragment>
                  ))}
              </div>

              <div className="flex justify-end font-dana text-sm text-orange-500">
                <Link to="/home" className="flex items-center gap-0.5">
                  ادامه خرید
                  <FaLessThan size="0.5rem" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="py-2 px-5 rounded-lg border-2 border-gray-400/50 border-solid font-dana text-sm text-zinc-700 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span>قیمت کل:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading && data?.totalPrice.toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>جمع سبد خرید:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading && data?.totalPriceAfterOff.toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-red-400">
                <span>سود شما از این خرید:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading &&
                      (
                        data?.totalPrice - data?.totalPriceAfterOff
                      ).toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>

              <div>
                <Link className="w-full font-danaBold sm:text-lg flex items-center justify-center bg-red-400 py-2 rounded-lg text-white transition-all hover:scale-95">
                  تسویه حساب
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
