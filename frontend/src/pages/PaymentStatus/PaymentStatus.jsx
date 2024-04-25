import { useEffect, useState } from "react";

// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

// React Router
import { Link } from "react-router-dom";

// Axios
import { getPaymentStatus } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function PaymentStatus() {
  const urlParams = new URLSearchParams(window.location.search);
  const statusVal = urlParams.get(`Status`);
  const amount = urlParams.get(`Amount`);
  const trackingCode = urlParams.get(`trackingCode`);
  const authority = urlParams.get(`Authority`);

  const [status, setStatus] = useState(null);
  const { userToken } = useUserToken();
  const [data, setData] = useState(null);

  useEffect(() => {
    setStatus(statusVal);
  }, []);

  useEffect(() => {
    if (status?.toUpperCase() === "OK") {
      document.title = `تیمچه - پرداخت موفق`;
      getPaymentStatus({
        url: `/${amount}/${trackingCode}/${authority}/${status}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } else {
      document.title = `تیمچه - پرداخت ناموفق`;
    }
  }, [status]);

  return (
    <div>
      <div className="container">
        <div className="flex justify-center items-center h-[100dvh]">
          {!!status &&
            (status === `OK` ? (
              <div className="flex flex-col gap-4 items-center w-96">
                <div className="border border-solid border-orange-300 py-2 px-4 rounded-lg font-dana w-full flex flex-col items-center">
                  <div className="flex items-center font-danaBold text-zinc-700 text-2xl gap-2.5 py-6">
                    <div className="text-teal-400">
                      <FaRegCheckCircle size="2rem" />
                    </div>
                    <h2>پرداخت موفق</h2>
                  </div>
                  {!!data && (
                    <div className="divide-y divide-solid divide-gray-400/50 w-full flex flex-col items-center">
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">نام:</span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.user?.firstName} ${data?.user?.lastName}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          شماره تلفن:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.user?.phone}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          مبلغ پرداختی:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${Number(data?.paymentTotal).toLocaleString()}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          آدرس:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.user?.address?.address}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          شناسه پرداخت:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.paymentTrackingCode}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          تاریخ پرداخت:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.timeOrder.slice(0, data?.timeOrder.indexOf(`T`))}`}
                        </span>
                      </div>
                      <div className="flex items-center justify-evenly py-2 flex-grow w-full">
                        <span className="text-zinc-700 line-clamp-1">
                          زمان پرداخت:
                        </span>
                        <span className="text-gray-400 line-clamp-1 w-[150px]">
                          {`${data?.timeOrder.slice(data?.timeOrder.indexOf(`T`) + 1, data?.timeOrder.length)}`}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 pt-8 w-full flex-grow status-btns-wrapper justify-center">
                    <Link
                      to="/home"
                      className="font-dana text-gray-400 border border-solid border-orange-300 py-0.5 px-2 rounded-lg transition-all hover:bg-orange-100 flex items-center justify-center"
                    >
                      بستن صفحه
                    </Link>
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="font-dana text-gray-400 border border-solid border-orange-300 py-0.5 px-2 rounded-lg transition-all hover:bg-orange-100 flex items-center justify-center"
                    >
                      پرینت فاکتور
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center font-danaBold text-zinc-700 text-2xl gap-2.5">
                <div className="flex flex-col items-center font-danaBold text-zinc-700 text-2xl gap-2.5">
                  <div className="flex items-center font-danaBold text-zinc-700 text-2xl gap-2.5">
                    <div className="text-red-500">
                      <IoMdCloseCircleOutline size="2rem" />
                    </div>
                    <h2>پرداخت ناموفق</h2>
                  </div>
                  <p className="text-sm text-gray-400">
                    متاسفانه پرداخت شما با خطا مواجه شده است، لطفا با پشتیبانی
                    تماس بگیرید.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-2 w-full flex-grow status-btns-wrapper justify-center">
                  <Link
                    to="/home"
                    className="font-dana text-gray-400 border border-solid border-orange-300 py-0.5 px-2 rounded-lg transition-all hover:bg-orange-100 flex items-center justify-center text-sm"
                  >
                    بستن صفحه
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
