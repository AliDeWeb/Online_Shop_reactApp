import React, { useEffect, useState } from "react";

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
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdMiscellaneousServices,
} from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";

// React Router
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isHamburgerMenuShopItemShow, setIsHamburgerMenuShopItemShow] =
    useState(true);
  const [isHamburgerMenuServiceItemShow, setIsHamburgerMenuServiceItemShow] =
    useState(true);

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [location]);

  return (
    <header className="py-3 bg-white rounded-b-lg">
      <div
        className={`rounded-l-lg fixed bg-white top-0 bottom-0 right-0 h-[100dvh]  ${
          isHamburgerMenuOpen ? "w-[300px]  py-4 px-6" : "w-0"
        } transition-all overflow-auto z-30`}
      >
        <div className="flex justify-between items-center">
          <div className="w-[100px]">
            <Link to="/home" className="w-[100px]">
              <img src={siteLogo} alt="siteLogo" />
            </Link>
          </div>
          <button onClick={() => setIsHamburgerMenuOpen(false)}>
            <IoIosClose size="2rem" />
          </button>
        </div>
        <hr className="my-5" />
        <div>
          <Link
            to="/home"
            className="flex items-center font-dana gap-1 text-orange-400 bg-orange-100/50 py-1.5 px-2 rounded-md"
          >
            <AiOutlineHome size="1.1rem" />
            خانه
          </Link>
          <div className="mt-4 text-zinc-700">
            <div
              onClick={() => {
                setIsHamburgerMenuShopItemShow((prev) => !prev);
              }}
              className="flex justify-between items-center font-dana py-1.5 px-2 text-orange-400 rounded-md"
            >
              <div className="flex items-center gap-1">
                <CiShoppingBasket size="1.2rem" />
                فروشگاه
              </div>
              <MdOutlineKeyboardArrowDown
                className={`transition-all ${
                  isHamburgerMenuShopItemShow || "rotate-180"
                }`}
                size="1.2rem"
              />
            </div>
            <ul
              className={`mt-2 font-dana text-sm flex flex-col gap-3 pr-4 overflow-hidden transition-all duration-300 mb-4 ${
                isHamburgerMenuShopItemShow || "h-0 mb-0"
              }`}
            >
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>لپ تاپ</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>لوازم خانگی</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>پوشاک</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>عطر و ادکلن</Link>
              </li>
            </ul>
          </div>
          <div className="mb-5 text-zinc-700">
            <div
              onClick={() => {
                setIsHamburgerMenuServiceItemShow((prev) => !prev);
              }}
              className="flex justify-between items-center font-dana py-1.5 px-2 text-orange-400 rounded-md"
            >
              <div className="flex items-center gap-1">
                <MdMiscellaneousServices size="1.2rem" />
                خدمات
              </div>
              <MdOutlineKeyboardArrowDown
                className={`transition-all ${
                  isHamburgerMenuServiceItemShow || "rotate-180"
                }`}
                size="1.2rem"
              />
            </div>
            <ul
              className={`mt-2 font-dana text-sm flex flex-col gap-3 pr-4 overflow-hidden transition-all ${
                isHamburgerMenuServiceItemShow || "h-0"
              }`}
            >
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>ارسال رایگان</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>ضمانت اصالت کالا</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>پشتیبانی 24 ساعته</Link>
              </li>
              <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                <Link>گارانتی 18 ماهه</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 font-dana text-orange-400">
            <Link to="/register" className="flex items-center gap-1.5">
              <FaUser size="0.8rem" />
              ورود | ثبت نام
            </Link>
          </div>
          <div className="flex flex-col gap-3 font-dana text-orange-400">
            <Link className="flex items-center gap-1.5">
              <IoMdCall />
              تماس با ما
            </Link>
          </div>
          <div className="flex flex-col gap-3 font-dana text-orange-400">
            <Link className="flex items-center gap-1.5">
              <AiOutlineQuestionCircle />
              درباره ما
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 bottom-0 right-0 left-0  h-[100dvh]  ${
          isHamburgerMenuOpen ? "w-screen" : "w-0"
        } transition-all z-20 backdrop-blur-sm bg-zinc-900/70`}
      ></div>

      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-5 lg:gap-0 lg:flex-nowrap">
          <div className="lg:hidden">
            <button onClick={() => setIsHamburgerMenuOpen(true)}>
              <IoIosMenu
                className="transition-all"
                size="2rem"
                color="#696969"
              />
            </button>
          </div>
          <div className="w-[90px] h-[26px] lg:w-[137px] lg:h-[38px]">
            <Link className="w-[90px] h-[26px] lg:w-[137px] lg:h-[38px]" to="/home">
            <img className="size-full" src={siteLogo} alt="site-logo" /></Link>
          </div>
          <div className="w-full lg:w-[500px] lg:block hidden">
            <div className="flex items-center gap-4 bg-gray-100 h-[40px] px-6 w-full rounded-md">
              <button>
                <IoIosSearch size="1.5rem" color="#696969" />
              </button>
              <input
                className="bg-transparent h-full w-[calc(100%-(48px+24px))] lg:w-[412px] border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
                type="text"
                placeholder="جستجو در محصولات"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div>
              <Link
                to="/register"
                className="h-[35px] bg-orange-200/20 hover:bg-orange-200/40 p-2 lg:py-2 lg:px-5 rounded-md font-dana text-orange-400 flex items-center gap-2 transition-all text-sm md:text-base"
              >
                <FaUser
                  className="transition-all"
                  size="1rem"
                  color="rgb(251,146,60)"
                />
                <span className="lg:inline hidden">ثبت نام</span>
              </Link>
            </div>
            <div>
              <button className="p-2 rounded-md size-[35px] bg-orange-200/20 hover:bg-orange-200/40 transition-all">
                <IoIosCart size="1.2rem" color="rgb(251,146,60)" />
              </button>
            </div>
            <div className="lg:hidden">
              <button className="p-2 rounded-md size-[35px] bg-orange-200/20 hover:bg-orange-200/40 transition-all">
                <IoIosSearch size="1.2rem" color="rgb(251,146,60)" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:block font-dana mt-4 border-t-2 border-solid border-gray-100 pt-3">
        <div className="container">
          <ul className="text-zinc-700 flex items-center gap-3">
            <li className=" transition-all relative group">
              <button className="flex items-center gap-1">
                <IoIosMenu
                  className="transition-all"
                  size="1rem"
                  color="#696969"
                />
                دسته بندی ها
              </button>
              <div className="hidden sm:block absolute z-10 bg-white w-[250px] p-5 rounded-lg right-0 top-12 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-9 transition-all delay-150">
                <ul className="child:py-1.5">
                  <li>
                    <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                      لپ تاپ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                      لپ تاپ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hidden sm:block">
              <Link>تخفیفات شگفت انگیز</Link>
            </li>
            <li className="hidden sm:block">
              <Link>ما کی هستیم؟</Link>
            </li>
            <li className="hidden sm:block">
              <Link>تماس با ما</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
