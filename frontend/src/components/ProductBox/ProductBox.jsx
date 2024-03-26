import React from "react";

// Imgs
import productImg from "../../assets/imgs/productImg.jpg";

// Icons
import { FaStar, FaShoppingCart } from "react-icons/fa";

// React Router
import { Link } from "react-router-dom";

export default function ProductBox() {
  return (
    <div className="h-[400px] bg-white py-4 px-3 rounded-lg flex flex-col justify-between">
      <div>
        <div className="size-[160px] mx-auto">
          <img src={productImg} alt="product-img" />
        </div>
        <div className="flex items-center gap-0.5 mt-1.5">
          <FaStar size="1rem" color="#ffc107" />
          <FaStar size="1rem" color="#ffc107" />
          <FaStar size="1rem" color="#ffc107" />
          <FaStar size="1rem" color="#ffc107" />
        </div>
        <div className="mt-4 font-danaBold text-sm text-[#53565d]">
          <Link className="line-clamp-1">سویشرت مردانه نایک کلاه دار</Link>
        </div>
        <div className="mt-2 font-dana text-sm text-[#aaaaaa]">
          <Link
            className="line-clamp-1 font-poppins"
            style={{ direction: "ltr" }}
          >
            Nike Men's Hooded Sweater
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-[#6e7177]">
          <span className="ml-1 font-danaBold">820000</span>
          <span className=" font-dana">تومان</span>
        </div>
        <div>
          <button
            onMouseEnter={(e) => {
              e.target.firstElementChild.setAttribute(`fill`, `#3b3b3b`);
              e.target.firstElementChild.setAttribute(`stroke`, `#3b3b3b`);
            }}
            onMouseLeave={(e) => {
              e.target.firstElementChild.setAttribute(`fill`, `currentColor`);
              e.target.firstElementChild.setAttribute(`stroke`, `currentColor`);
            }}
            className="text-[#999999] font-dana py-1.5 px-5 rounded-xl flex items-center gap-1 bg-[#f0f0f0] transition-all hover:text-[#3b3b3b]"
          >
            <FaShoppingCart
              className="transition-all"
              size="1rem"
              color="#999999"
            />
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
