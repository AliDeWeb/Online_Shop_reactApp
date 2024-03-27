import React from "react";

// React Router
import { Link } from "react-router-dom";

// Imgs
import categories1 from "../../assets/imgs/categories1.webp";
import categories2 from "../../assets/imgs/categories2.webp";
import categories3 from "../../assets/imgs/categories3.webp";
import categories4 from "../../assets/imgs/categories4.webp";
import categories5 from "../../assets/imgs/categories5.webp";
import categories6 from "../../assets/imgs/categories6.webp";

export default function CategoriesSection() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="child:w-1/3 sm:child:w-1/4 lg:child:w-1/6 flex font-dana flex-wrap lg:flex-nowrap justify-evenly sm:justify-between lg:justify-center gap-4 lg:gap-0">
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories1} alt="categoriesImg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories2} alt="categoriesImg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories3} alt="categoriesImg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories4} alt="categoriesImg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories5} alt="categoriesImg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="md:mx-2 bg-white flex flex-col items-center justify-center hover:scale-105 transition-all rounded-md overflow-hidden">
              <Link className="flex flex-col items-center justify-center">
                <img src={categories6} alt="categoriesImg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
