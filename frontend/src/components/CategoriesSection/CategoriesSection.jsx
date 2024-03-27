import React from "react";

// React Router
import { Link } from "react-router-dom";

// Imgs
import categories1 from "../../assets/imgs/categories1.png";
import categories2 from "../../assets/imgs/categories2.png";
import categories3 from "../../assets/imgs/categories3.png";
import categories4 from "../../assets/imgs/categories4.png";
import categories5 from "../../assets/imgs/categories5.png";
import categories6 from "../../assets/imgs/categories6.png";

export default function CategoriesSection() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-2 lg:grid-rows-1 justify-center font-dana gap-4 lg:gap-0 child:mx-auto text-sm">
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories1} alt="categoriesImg" />
                <span>دیجیتال</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories2} alt="categoriesImg" />
                <span>موبایل</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories3} alt="categoriesImg" />
                <span>مد و پوشاک</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories4} alt="categoriesImg" />
                <span>لوازم التحریر</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories5} alt="categoriesImg" />
                <span>ورزش و سفر</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 font-dana w-[70px] sm:w-[100px] flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories6} alt="categoriesImg" />
                <span>لوازم خانگی</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
