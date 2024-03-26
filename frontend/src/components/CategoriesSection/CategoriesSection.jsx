import React from "react";

// React Router
import { Link } from "react-router-dom";

// Icons
import { IoIosLaptop, IoMdGlasses } from "react-icons/io";
import { GiClothes, GiWatch } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";

export default function CategoriesSection() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="child:w-1/3 sm:child:w-1/4 md:child:w-1/6 flex font-dana flex-wrap md:flex-nowrap justify-center gap-4 md:gap-0">
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <IoIosLaptop size="1.4rem" />
              <span className="inline-block mt-2">لپ تاپ</span>
            </Link>
          </div>
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <IoMdGlasses size="1.4rem" />
              <span className="inline-block mt-2">عینک</span>
            </Link>
          </div>
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <GiClothes size="1.4rem" />
              <span className="inline-block mt-2">پوشاک</span>
            </Link>
          </div>
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <GiWatch size="1.4rem" />
              <span className="inline-block mt-2">ساعت</span>
            </Link>
          </div>
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <IoHome size="1.1rem" />
              <span className="inline-block mt-2">لوازم خانگی</span>
            </Link>
          </div>
          <div className="md:mx-2 bg-white h-[90px] flex flex-col items-center justify-center hover:bg-slate-200 transition-all rounded-md">
            <Link className="flex flex-col items-center justify-center">
              <FaBook size="1.1rem" />
              <span className="inline-block mt-2">کتاب</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
