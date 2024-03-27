import React from "react";

// Imgs
import productImg from "../../assets/imgs/productImg.jpg";

// Icons
import { FaStar, FaShoppingCart } from "react-icons/fa";

// React Router
import { Link } from "react-router-dom";

export default function ProductBox() {
  return (
    <div className="h-[340px] lg:h-[380px] bg-white py-4 px-3 rounded-lg flex flex-col justify-between">
      <div className="lg:block flex flex-col items-center">
        <div className="size-[160px] mx-auto">
          <img src={productImg} alt="product-img" />
        </div>
        <div className="flex items-center gap-0.5 mt-1.5">
          <FaStar size="1rem" color="#FACC15" />
          <FaStar size="1rem" color="#FACC15" />
          <FaStar size="1rem" color="#FACC15" />
          <FaStar size="1rem" color="#FACC15" />
        </div>
        <div className="mt-4 font-danaBold text-sm text-zinc-700">
          <Link className="line-clamp-1">سویشرت مردانه نایک کلاه دار</Link>
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
      <div className="flex justify-evenly items-center gap-2 lg:flex-col lg:justify-center">
        <div className="text-teal-600">
          <span className="ml-1 font-danaBold">820000</span>
          <span className=" font-dana">تومان</span>
        </div>
        <div>
          <button className="text-gray-400 font-dana py-1.5 px-5 rounded-xl flex items-center gap-1 bg-gray-100 hover:bg-teal-600 transition-all hover:text-white">
            <FaShoppingCart className="transition-all" size="1rem" />
            <span className="lg:inline hidden">افزودن به سبد خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
}
