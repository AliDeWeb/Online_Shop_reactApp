import React from "react";

// React Router
import { Link } from "react-router-dom";

// Icons
import { BsArrowLeftShort } from "react-icons/bs";

export default function ProductsSections() {
  return (
    <section className="py-5">
      <div className="container">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-dana lg:font-danaBold text-lg lg:text-xl text-[#494949]">
                جدیـدترین ها
              </h2>
            </div>
            <div>
              <Link className="flex items-center gap-0.5 font-dana bg-[#d7dae1] lg:py-2 py-1 lg:px-4 px-3 rounded-md group text-[#494949]">
                <span className="group-hover:pl-3 transition-all text-sm">
                  مشاهده همه
                </span>
                <BsArrowLeftShort color="#333333" size="1rem" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
