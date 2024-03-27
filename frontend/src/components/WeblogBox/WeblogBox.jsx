import React from "react";

// Imgs
import weblog from "../../assets/imgs/weblog.jpg";

// React Router
import { Link } from "react-router-dom";

export default function WeblogBox() {
  return (
    <div className="bg-white h-[340px] sm:h-[315px] md:h-[335px] py-2.5 px-2 rounded-xl flex flex-col justify-between">
      <div>
        <Link>
          <img
            className="rounded-lg overflow-hidden transition-all hover:scale-105 sm:h-auto h-[230px]"
            src={weblog}
            alt="img"
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-1">
        <div className="col-span-2">
          <h3 className="font-dana line-clamp-2 text-zinc-700 mb-1 mt-2">
            <Link>
              بهترین لپ تاپ های ویندوزی که میتوانید آنها را خریداری کنید
            </Link>
          </h3>
          <span className="font-dana text-sm text-gray-400">
            <Link>محمد احمدی</Link>
          </span>
        </div>
        <div className="col-span-1 flex flex-col items-end justify-center text-teal-600 font-danaBold gap-0.5 pl-2.5 text-xs">
          <span>20</span>
          <span>مرداد</span>
          <span>1403</span>
        </div>
      </div>
    </div>
  );
}
