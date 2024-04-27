// Icons
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillStopwatchFill } from "react-icons/bs";

// React Router
import { Link } from "react-router-dom";

// Axios
import { apiUrl } from "../../configs/axios/axiosConfigs";

export default function OrdersBox({
  orderCode,
  date,
  covers,
  price,
  discountedPrice,
  status,
}) {
  return (
    <div className="w-full my-4 py-2 px-4 rounded-lg border border-solid border-gray-400/50">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-danaBold text-sm">
            {status === `successfullOrders` ? (
              <>
                <FaCircleCheck color="rgb(13,148,136)" />
                <span className="text-zinc-700">تحویل شده</span>
              </>
            ) : status === `processingOrders` ? (
              <>
                <BsFillStopwatchFill color="rgb(13,148,136)" />
                <span className="text-zinc-700">جاری</span>
              </>
            ) : status === `processingOrders` ? (
              <>
                <BsFillStopwatchFill color="rgb(251,146,60)" />
                <span className="text-zinc-700">در انتظار پرداخت</span>
              </>
            ) : (
              <>
                <BsFillStopwatchFill color="#dc2626" />
                <span className="text-zinc-700">لغو شده</span>
              </>
            )}
          </div>
          <div>
            <Link className="text-zinc-700">
              <IoIosArrowBack size="0.8rem" />
            </Link>
          </div>
        </div>
        <div>
          <div className="px-8 flex items-center font-dana mt-4 overflow-auto active-orders-page-wrapper">
            <div className="font-danaBold text-sm text-zinc-700 w-max">
              {`${date?.slice(0, date?.indexOf(`T`))}`}
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">کد سفارش: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                {orderCode}
              </span>
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">قیمت: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                {price.toLocaleString()} تومان
              </span>
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">تخفیف: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                {discountedPrice.toLocaleString()} تومان
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 py-3 px-3 border-t border-b border-solid border-gray-400/50">
          <div className="flex flex-nowrap gap-2 child:flex-shrink-0 overflow-auto active-orders-page-wrapper">
            {covers.map((el) => (
              <div className="size_16" key={Math.random()}>
                <Link className="size_16">
                  <img src={`${apiUrl}/${el}`} alt="img" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
