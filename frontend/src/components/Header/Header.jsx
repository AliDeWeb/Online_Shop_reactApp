import React from "react";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

// Icons
import { IoIosSearch, IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-3 bg-white">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-5 lg:gap-0 lg:flex-nowrap">
          <div className="order-1 lg:order-1 w-[90px] h-[26px] lg:w-[137px] lg:h-[38px]">
            <img className="size-full" src={siteLogo} alt="site-logo" />
          </div>
          <div className="order-3 lg:order-2 w-full lg:w-[500px]">
            <div className="flex items-center gap-4 bg-[#F4F6F8] h-[40px] px-6 w-full rounded-md">
              <button>
                <IoIosSearch size="1.5rem" color="#696969" />
              </button>
              <input
                className="bg-transparent h-full w-[calc(100%-(48px+24px))] lg:w-[412px] border-none outline-none font-dana text-[#696969] text-sm md:text-base"
                type="text"
                placeholder="جستجو در محصولات"
              />
            </div>
          </div>
          <div className="order-2 lg:order-3  flex items-center gap-3 md:gap-6 lg:gap-8">
            <div>
              <button
                onMouseEnter={(e) => {
                  e.target.firstElementChild.setAttribute(`fill`, `#673AB7`);
                  e.target.firstElementChild.setAttribute(`stroke`, `#673AB7`);
                }}
                onMouseLeave={(e) => {
                  e.target.firstElementChild.setAttribute(
                    `fill`,
                    `currentColor`
                  );
                  e.target.firstElementChild.setAttribute(
                    `stroke`,
                    `currentColor`
                  );
                }}
                className="h-[35px] bg-[#F4F6F8] py-2 px-5 rounded-md font-dana text-[#696969] flex items-center gap-2 transition-all hover:text-[#673AB7] text-sm md:text-base"
              >
                <FaUser
                  className="transition-all"
                  size="1rem"
                  color="#696969"
                />
                ثبت نام
              </button>
            </div>
            <div>
              <button className="bg-[#673AB7] p-2 rounded-md size-[35px]">
                <IoIosCart size="1.2rem" color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
