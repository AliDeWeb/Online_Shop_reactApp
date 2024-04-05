import React, { useCallback, useEffect, useState } from "react";

// Icons
import { LuShieldCheck } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";

// React Router
import { Link } from "react-router-dom";

// Axios
import { postProductsToCart } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function CartProductBox({
  title,
  cover,
  warranty,
  transportTime,
  price,
  discounted,
  href,
  productCount,
  productId,
  colorId,
  sizeId,
}) {
  const { userToken } = useUserToken();
  const [count, setCount] = useState(productCount);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  const decreaseCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [count]);

  useEffect(() => {
    let productData = {
      productID: productId,
      colorID: colorId,
      sizeID: sizeId,
      count: count,
      warranty: warranty._id,
    };
    postProductsToCart({
      data: productData,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  }, [count]);

  return (
    <div className="py-4 grid grid-cols-6 gap-2">
      <div className="col-span-2 xl:col-span-1">
        <div className="flex flex-col w-max items-center">
          <div className="w-[90px] sm:w-[130px] h-[120px] sm:h-[150px] transition-all hover:scale-95">
            <Link to={href}>
              <img
                src={cover}
                alt="img"
                className="object-contain mix-blend-multiply"
              />
            </Link>
          </div>
          <div className="font-danaBold flex gap-3 items-center border border-solid border-gray-400  py-2 px-4 rounded-lg w-max sm:text-base text-xs xl:text-lg text-red-400 mt-2.5">
            <button
              onClick={() => {
                increaseCount();
              }}
            >
              +
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                decreaseCount();
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-4 xl:col-span-5">
        <h2 className="font-dana sm:font-danaBold text-zinc-700 line-clamp-2 transition-all hover:scale-95">
          <Link to={href}>{title}</Link>
        </h2>
        <div className="mt-4 text-gray-400 flex flex-col gap-2 font-dana text-xs sm:text-sm">
          <span className="flex items-center gap-1 font-dana rounded-xl text-black">
            <span
              className={`size-[15px] rounded-full outline-none bg-black`}
            ></span>
            مشکی
          </span>
          <div className="flex items-center gap-2">
            <LuShieldCheck color="rgb(248,113,113)" />
            <span>{warranty.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStore color="rgb(248,113,113)" />
            <span>تیمچه</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSignsPost color="rgb(248,113,113)" />
            <span>{transportTime}</span>
          </div>
          <div className="mt-4">
            {discounted && (
              <span className="text-red-400 flex items-center gap-1">
                {(price - discounted).toLocaleString()}
                <span>تومان تخفیف</span>
              </span>
            )}
            <span className="inline-block mt-1.5 text-base sm:text-lg font-danaBold text-zinc-700">
              {price.toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
