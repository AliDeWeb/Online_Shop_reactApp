import React, { useState } from "react";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

// Icons
import {
  IoIosSearch,
  IoIosCart,
  IoIosMenu,
  IoIosClose,
  IoMdCall,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";

// React Router
import { Link } from "react-router-dom";

export default function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <header className="py-3 bg-white">
      <div
        className={`fixed bg-[#eff1f5] w-[300px] top-0 bottom-0 right-0 h-[100dvh]  ${
          isHamburgerMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } transition-all overflow-auto z-30 py-4 px-3`}
      >
        <div className="flex justify-between items-center">
          <div className="w-[100px]">
            <img src={siteLogo} alt="siteLogo" />
          </div>
          <button onClick={() => setIsHamburgerMenuOpen(false)}>
            <IoIosClose size="2rem" />
          </button>
        </div>
        <div>
          <span className="inline-block mt-5 font-dana text-lg">
            دسته بندی ها
          </span>
          <ul className="mt-2 font-dana text-sm flex flex-col gap-1 pr-3">
            <li>
              <Link>لپ تاپ</Link>
            </li>
            <li>
              <Link>لپ تاپ</Link>
            </li>
            <li>
              <Link>لپ تاپ</Link>
            </li>
            <li>
              <Link>لپ تاپ</Link>
            </li>
          </ul>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-3 font-dana text-sm">
          <Link className="flex items-center gap-1">
            <IoMdCall />
            تماس با ما
          </Link>
          <Link className="flex items-center gap-1">
            <IoMdCall />
            تماس با ما
          </Link>
          <Link className="flex items-center gap-1">
            <IoMdCall />
            تماس با ما
          </Link>
          <Link className="flex items-center gap-1">
            <IoMdCall />
            تماس با ما
          </Link>
        </div>
      </div>
      <div
        className={`fixed  w-screen top-0 bottom-0 right-0 left-0 h-[100dvh]  ${
          isHamburgerMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } transition-all  z-20 backdrop-blur-xl`}
      ></div>

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
      <nav className="font-dana mt-4 border-t-2 border-solid border-gray-100 pt-3">
        <div className="container">
          <ul className="text-[#696969] flex items-center gap-3">
            <li className="hover:text-[#000000] transition-all relative group">
              <button
                onClick={() => setIsHamburgerMenuOpen(true)}
                className="flex items-center gap-1"
                onMouseEnter={(e) => {
                  e.target.firstElementChild.setAttribute(`fill`, `#000000`);
                  e.target.firstElementChild.setAttribute(`stroke`, `#000000`);
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
              >
                <IoIosMenu
                  className="transition-all"
                  size="1rem"
                  color="#696969"
                />
                دسته بندی ها
              </button>
              <div className="hidden sm:block absolute z-10 bg-white w-[250px] p-5 rounded-lg right-0 top-12 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-9 transition-all delay-75">
                <ul className="divide-y divide-gray-100 divide-solid child:py-1.5 ">
                  <li>
                    <Link className="hover:pr-5 transition-all duration-300">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:pr-5 transition-all duration-300">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:pr-5 transition-all duration-300">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:pr-5 transition-all duration-300">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:pr-5 transition-all duration-300">
                      لپ تاپ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-[#050505] transition-all hidden sm:block">
              <Link>تخفیفات شگفت انگیز</Link>
            </li>
            <li className="hover:text-[#050505] transition-all hidden sm:block">
              <Link>ما کی هستیم؟</Link>
            </li>
            <li className="hover:text-[#050505] transition-all hidden sm:block">
              <Link>تماس با ما</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
