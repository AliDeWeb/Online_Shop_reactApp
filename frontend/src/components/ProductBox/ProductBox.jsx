import React from "react";

// Icons
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

// React Router
import { Link } from "react-router-dom";

export default function ProductBox({
  discounted,
  price,
  num,
  title,
  cover,
  href,
  averageScore,
}) {
  return (
    <div className="relative h-[350px] lg:h-[380px] bg-white py-4 px-3 rounded-lg flex flex-col justify-between">
      {!!num && !!discounted && (
        <div
          className={`absolute top-2.5 left-2.5 ${
            discounted >= 60 ? "bg-red-400" : "bg-orange-300"
          } text-white size-[45px] rounded-full flex justify-center items-center font-danaBold`}
        >
          {`%${discounted}`}
        </div>
      )}

      <div className="lg:block flex flex-col items-center">
        <div className="size-[160px] mx-auto">
          <Link to={`/${href}`}>
            <img
              className="transition-all hover:scale-95"
              src={cover}
              alt="product-img"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-0.5 mt-2">
          {Array(averageScore)
            .fill(0)
            .map(() => (
              <FaStar size="1rem" color="#FACC15" />
            ))}
          {Array(5 - averageScore)
            .fill(0)
            .map(() => (
              <FaRegStar size="1rem" color="#FACC15" />
            ))}
        </div>
        <div className="mt-4 font-danaBold text-sm text-zinc-700">
          <Link
            to={`/${href}`}
            className="line-clamp-1 transition-all hover:scale-95"
          >
            {title}
          </Link>
        </div>
        <div className="mt-2 font-dana text-sm text-gray-400">
          <Link
            className="line-clamp-1 font-poppins"
            style={{ direction: "ltr" }}
          >
            Nike Men's Hooded Sweater
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col justify-center">
        {num ? (
          <>
            <div className="text-teal-600 my-0.5">
              {discounted ? (
                <>
                  <span className="ml-1 font-danaBold text-sm sm:text-base">
                    {(price - (price * discounted) / 100).toLocaleString()}
                  </span>
                  <del className="ml-1 font-danaBold text-gray-400 text-xs">
                    {price.toLocaleString()}
                  </del>
                </>
              ) : (
                <span className="ml-1 font-danaBold text-sm sm:text-base">
                  {price.toLocaleString()}
                </span>
              )}
              <span className=" font-dana">تومان</span>
            </div>
            <div>
              <button className="font-dana py-1.5 px-5 rounded-xl flex items-center gap-1 bg-teal-600 transition-all text-white hover:scale-95 hover:shadow-xl">
                <FaShoppingCart className="transition-all" size="1rem" />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </>
        ) : (
          <span className="text-red-400 font-danaBold">کالا موجود نیست</span>
        )}
      </div>
    </div>
  );
}
