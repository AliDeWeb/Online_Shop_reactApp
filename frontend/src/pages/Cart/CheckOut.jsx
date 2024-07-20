import React, { useEffect } from "react";

import { CartProductBox, Modal } from "../../configs/Layout/Layout";

// Icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

// React Router
import { Link } from "react-router-dom";

// React Query
import { useQuery, useQueryClient } from "react-query";

// React Snipper
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader.js";

// Axios
import {
  addNewAddress,
  addNewOrder,
  apiUrl,
  DiscountedCode,
  updateWallet,
  getCartProducts,
} from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function CheckOut() {
  const [isShowEditAddress, setIsShowEditAddress] = React.useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);
  const [isDataFetching, setIsDataFetching] = React.useState(false);
  const payment = React.useRef(0);
  const [newAddressVal, setNewAddressVal] = React.useState("");
  const [isShowRedirectingLoader, setIsShowRedirectingLoader] =
    React.useState(false);
  const discountedCode = React.useRef("");
  let addressId = React.useRef("");
  let paymentId = React.useRef("");
  const queryClient = useQueryClient();

  const { userToken } = useUserToken();
  const { data, isLoading, refetch } = useQuery(
    `checkoutPage`,
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
      refetchIntervalInBackground: false,
      initialData: () => {
        const dataInit = queryClient.getQueryData(`cartPage`);

        return dataInit;
      },
    }
  );

  useEffect(() => {
    document.title = "پریمو - تسویه حساب";
    document.documentElement.scrollTop = 0;
  }, []);

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
                    <select
                      onChange={(e) => {
                        addressId.current = e.target.value;
                      }}
                      className="bg-transparent outline-none border-none font-dana text-sm sm:text-base w-full"
                    >
                      <option
                        className="font-dana text-zinc-700 text-lg line-clamp-1"
                        value=""
                      >
                        انتخاب آدرس ...
                      </option>

                      {!isLoading &&
                        data?.addresses.map((el) => (
                          <option
                            className="font-dana text-zinc-700 text-lg line-clamp-1"
                            value={el._id}
                            key={Math.random()}
                          >
                            {el.address}
                          </option>
                        ))}
                    </select>
                  </div>
                  <button
                    className="font-dana text-sm text-orange-500 mt-4 flex items-center gap-1 transition-all hover:scale-95"
                    onClick={() => {
                      addressId.current = ``;
                      paymentId.current = ``;
                      setIsShowEditAddress(true);
                    }}
                  >
                    اضافه کردن ادرس جدید
                    <FaLessThan size="0.5rem" />
                  </button>

                  {!!isShowEditAddress && (
                    <>
                      <div className="flex items-center gap-2 bg-gray-100 h-[40px] px-6 rounded-md w-full">
                        <input
                          onChange={(e) => {
                            setNewAddressVal(e.target.value);
                          }}
                          value={newAddressVal}
                          className="bg-transparent h-full w-full border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
                          type="text"
                          placeholder="آدرس جدید"
                        />
                        <button
                          onClick={async () => {
                            await addNewAddress({
                              headers: {
                                Authorization: `Bearer ${userToken}`,
                              },
                              data: {
                                address: newAddressVal.trim(),
                              },
                            }).then(() => {
                              setNewAddressVal(``);
                              refetch();
                            });
                            setIsShowEditAddress(false);
                          }}
                        >
                          <IoMdCheckmark size="0.9rem" color="#696969" />
                        </button>
                        <button
                          onClick={() => {
                            setNewAddressVal(``);
                            setIsShowEditAddress(false);
                          }}
                        >
                          <IoIosClose size="1.2rem" color="#696969" />
                        </button>
                      </div>
                      <span className="font-dana text-sm px-6 text-red-400">
                        ادرس باید بیشتر از 50 کارکتر داشته باشد
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {!isLoading &&
              data.groupedProductsByTransport?.transportsDetails1 &&
              (function () {
                return (
                  <div className="py-3 px-6 border-2 border-solid border-gray-400/50 rounded-lg flex flex-col gap-8">
                    <div className="flex justify-between items-start font-dana text-gray-400 gap-1">
                      <div className="flex flex-col">
                        <span className="md:text-xl text-zinc-700">
                          روش ارسال
                        </span>
                        <div className="flex items-center gap-1 text-sm md:text-base">
                          <span>
                            {
                              data?.groupedProductsByTransport
                                ?.transportsDetails1?.transport.title
                            }
                            {"، "}
                            {
                              <span className="text-sm">
                                {
                                  data?.groupedProductsByTransport
                                    ?.transportsDetails1?.transport.time
                                }
                              </span>
                            }
                          </span>
                        </div>
                      </div>
                      <div>
                        <HiOutlineDotsVertical
                          size="1.4rem"
                          color="rgb(63,63,70)"
                        />
                      </div>
                    </div>
                    <div className="divide-y divide-solid divide-gray-400/50">
                      {!isLoading &&
                        data?.groupedProductsByTransport?.transportsDetails1?.products?.map(
                          (el) => (
                            <React.Fragment key={Math.random()}>
                              <CartProductBox
                                refetch={refetch}
                                productId={el.product._id}
                                color={null}
                                size={null}
                                title={el.product.title}
                                cover={`${apiUrl}/${el.product.covers[0]}`}
                                warranty={el.product.warranty.title}
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
                          )
                        )}
                    </div>

                    <div className="flex justify-end font-dana text-sm text-orange-500">
                      <Link to="/home" className="flex items-center gap-0.5">
                        ادامه خرید
                        <FaLessThan size="0.5rem" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            {!isLoading &&
              data.groupedProductsByTransport?.transportsDetails2 &&
              (function () {
                return (
                  <div className="py-3 px-6 border-2 border-solid border-gray-400/50 rounded-lg flex flex-col gap-8">
                    <div className="flex justify-between items-start font-dana text-gray-400 gap-1">
                      <div className="flex flex-col">
                        <span className="md:text-xl text-zinc-700">
                          روش ارسال
                        </span>
                        <div className="flex items-center gap-1 text-sm md:text-base">
                          <span>
                            {
                              data?.groupedProductsByTransport
                                ?.transportsDetails2?.transport.title
                            }
                            {"، "}
                            {
                              <span className="text-sm">
                                {
                                  data?.groupedProductsByTransport
                                    ?.transportsDetails2?.transport.time
                                }
                              </span>
                            }
                          </span>
                        </div>
                      </div>
                      <div>
                        <HiOutlineDotsVertical
                          size="1.4rem"
                          color="rgb(63,63,70)"
                        />
                      </div>
                    </div>
                    <div className="divide-y divide-solid divide-gray-400/50">
                      {!isLoading &&
                        data?.groupedProductsByTransport?.transportsDetails2?.products?.map(
                          (el) => (
                            <React.Fragment key={Math.random()}>
                              <CartProductBox
                                refetch={refetch}
                                productId={el.product._id}
                                color={null}
                                size={null}
                                title={el.product.title}
                                cover={`${apiUrl}/${el.product.covers[0]}`}
                                warranty={el.warranty}
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
                          )
                        )}
                    </div>

                    <div className="flex justify-end font-dana text-sm text-orange-500">
                      <Link to="/home" className="flex items-center gap-0.5">
                        ادامه خرید
                        <FaLessThan size="0.5rem" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
          </div>
          <div className="col-span-6 lg:col-span-2 flex flex-col gap-4">
            <div className="py-2 px-5 rounded-lg border-2 border-gray-400/50 border-solid font-dana text-sm text-zinc-700 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-dana text-lg">موجودی کیف پول:</span>
                <span>
                  <span className="font-danaBold text-lg">
                    {!isLoading && data?.wallet.toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>

              <div className="flex items-center justify-center gap-2.5 font-danaBold child:py-2 child:px-4">
                <button onClick={()=> {
                  setIsWalletModalOpen(true)
                }} className="flex items-center justify-center bg-red-400 py-2 rounded-lg text-white transition-all hover:scale-95">
                  افزایش موجودی
                </button>
                <Modal
                  isOpen={isWalletModalOpen}
                  changeVisibility={setIsWalletModalOpen}
                >
                  <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4 text-zinc-700">
                    <button
                      onClick={() => {
                        setIsWalletModalOpen(false);
                      }}
                    >
                      <IoCloseCircleOutline size="1.5rem" />
                    </button>
                    <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                      افزایش موجودی
                    </h2>
                  </div>
                  <div className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4 font-dana">
                    <input
                      id="commentDisc"
                      type="text"
                      placeholder="مبلغ مورد نظر خود را وارد نمایید"
                      className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                      onInput={(e) => {
                        payment.current = e.target.value;
                      }}
                    />
                  </div>
                  <button
                    className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center text-zinc-700"
                    type="submit"
                    onClick={() => {
                      setIsDataFetching(true);

                      updateWallet({
                        url: `/${payment.current}`,
                        headers: {
                          Authorization: `Bearer ${userToken}`,
                        },
                      }).then((res) => {
                        console.log(res);
                        window.location.replace(res.data.url);
                        setIsDataFetching(false);
                        refetch();
                      });
                    }}
                  >
                    {isDataFetching ? (
                      <ClipLoader color="#d97706" size="18" />
                    ) : (
                      "ادامه ..."
                    )}
                  </button>
                </Modal>
                <Link className="flex items-center justify-center bg-red-400 py-2 rounded-lg text-white transition-all hover:scale-95">
                  هدیه به دیگران
                </Link>
              </div>
            </div>
            <div className="py-2 px-5 rounded-lg border-2 border-gray-400/50 border-solid font-dana text-sm text-zinc-700 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-dana text-lg">کد تخفیف:</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 h-[40px] px-6 rounded-md w-full">
                <input
                  onChange={(e) => {
                    discountedCode.current = e.target.value;
                  }}
                  className="bg-transparent h-full flex-grow border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
                  type="text"
                  placeholder="کد تخفیف"
                />
                <button
                  className="w-max font-dana bg-gray-300/50 py-0.5 px-1.5 rounded-md transition-all hover:scale-95"
                  onClick={async () => {
                    await DiscountedCode({
                      url: `/${discountedCode.current}`,
                      headers: {
                        Authorization: `Bearer ${userToken}`,
                      },
                    }).then(() => {
                      refetch();
                    });
                  }}
                >
                  اعمال کد
                </button>
              </div>
            </div>
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
              <div className="flex items-center justify-between">
                <span>هزینه ارسال:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading &&
                      (() => {
                        if (data?.totalPriceOfTransports === 0) {
                          return `رایگان`;
                        } else {
                          return (
                            <>
                              <span>
                                {data.totalPriceOfTransports.toLocaleString()}
                              </span>{" "}
                              <span>تومان</span>
                            </>
                          );
                        }
                      })()}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2.5">
                <span className="w-max font-danaBold text-lg">روش پرداخت:</span>
                <select
                  onChange={(e) => {
                    paymentId.current = e.target.value;
                  }}
                  className="flex-grow bg-transparent border-none outline-none font-dana child:font-dana"
                >
                  <option>انتخاب روش پرداخت ...</option>
                  {!isLoading &&
                    data.paymentWays.map((el) => (
                      <option key={Math.random()} value={el.paymentWay}>
                        {el.title}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <button
                  onClick={() => {
                    setIsShowRedirectingLoader(true);
                    addNewOrder({
                      headers: {
                        Authorization: `Bearer ${userToken}`,
                      },
                      data: {
                        paymentWay: paymentId.current,
                        addressID: addressId.current,
                        description: "unset",
                      },
                    })
                      .then((res) => {
                        setIsShowRedirectingLoader(false);
                        if (res.data.url) {
                          document.location.replace(res.data.url);
                        }
                      })
                      .catch(() => {
                        setIsShowRedirectingLoader(false);
                      });
                  }}
                  className="w-full font-danaBold sm:text-lg flex items-center justify-center bg-red-400 py-2 rounded-lg text-white transition-all hover:scale-95"
                >
                  {isShowRedirectingLoader ? (
                    <BeatLoader size={"0.6rem"} color="#fff" />
                  ) : (
                    "تسویه حساب"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
