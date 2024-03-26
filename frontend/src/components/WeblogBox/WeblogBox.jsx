import React from "react";

// Imgs
import weblog from "../../assets/imgs/weblog.jpg";

// React Router
import { Link } from "react-router-dom";

export default function WeblogBox() {
  return (
    <div className="bg-white h-[380px] sm:h-[340px] py-4 px-3 rounded-lg flex flex-col justify-between">
      <div>
        <Link>
          <img
            className="rounded-md overflow-hidden transition-all hover:scale-105"
            src={weblog}
            alt="img"
          />
        </Link>
      </div>
      <div>
        <h3 className="font-dana line-clamp-2 text-[#515357] mb-1 mt-2 transition-all hover:text-[#0f0f0f]">
          <Link>
            بهترین لپ تاپ های ویندوزی که میتوانید آنها را خریداری کنید
          </Link>
        </h3>
        <span className="font-dana text-sm text-[#aeafb3] transition-all hover:text-[#36383d]">
          <Link>محمد احمدی</Link>
        </span>
      </div>
    </div>
  );
}
