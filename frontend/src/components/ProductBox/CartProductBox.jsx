import React, { useCallback, useState } from "react";

// Icons
import { LuShieldCheck } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";

export default function CartProductBox() {
  const [count, setCount] = useState(1);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  const decreaseCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [count]);

  return (
    <div className="py-4 grid grid-cols-6 gap-2">
      <div className="col-span-2 xl:col-span-1">
        <div className="flex flex-col w-max items-center">
          <div className="w-[90px] sm:w-[130px] h-[120px] sm:h-[150px]">
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/75cd230b5154b6fd2d0bd3dc7fe61971a774ec1c_1601544383.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="img"
              className="object-contain mix-blend-multiply"
            />
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
        <h2 className="font-dana sm:font-danaBold text-zinc-700 line-clamp-2">
          اسپیکر بلوتوثی قابل حمل سونی مدل SRS-XB23
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
            <span>گارانتی 18 ماهه زرین الکتریک امید</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStore color="rgb(248,113,113)" />
            <span>تیمچه</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSignsPost color="rgb(248,113,113)" />
            <span>ارسال تا 4 روز کاری</span>
          </div>
          <div className="mt-4">
            <span className="text-red-400 flex items-center gap-1">
              {(13000000).toLocaleString()}
              <span>تومان تخفیف</span>
            </span>
            <span className="inline-block mt-1.5 text-base sm:text-lg font-danaBold text-zinc-700">
              {(5805000000).toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
