// Icons
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

// React Router
import { Link } from "react-router-dom";

export default function OrdersBox() {
  return (
    <div className="w-full py-2 px-4 rounded-lg border border-solid border-gray-400/50">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-danaBold text-sm text-teal-600">
            <FaCircleCheck />
            <span className="text-zinc-700">تحویل شده</span>
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
              12/06/2050
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">کد سفارش: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                08*98992297
              </span>
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">قیمت: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                08999898 تومان
              </span>
            </div>
            <span className="size-2 rounded-full bg-gray-400/50 mx-4"></span>
            <div className="w-max flex flex-nowrap gap-1">
              <span className="text-sm text-gray-400 w-max">تخفیف: </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max">
                49889989898 تومان
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 py-3 px-3 border-t border-b border-solid border-gray-400/50">
          <div className="flex flex-nowrap gap-2 child:flex-shrink-0 overflow-auto active-orders-page-wrapper">
            <div className="size_16">
              <Link className="size_16">
                <img
                  src="https://ma-api.liara.run/uploads/products/covers/1712100831642.833.webp"
                  alt="img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
