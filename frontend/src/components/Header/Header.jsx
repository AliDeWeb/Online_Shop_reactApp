import React, { useEffect, useRef, useState } from "react";

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
import { GoArrowUpLeft } from "react-icons/go";

// React Router
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

// Axios
import {
  getUserData,
  getCategories,
  getBrands,
  getMenus,
} from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const param = useParams();
  const { userToken } = useUserToken();
  const navigator = useNavigate();

  const location = useLocation();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isHamburgerMenuShopItemShow, setIsHamburgerMenuShopItemShow] =
    useState(true);
  const [isHamburgerMenuServiceItemShow, setIsHamburgerMenuServiceItemShow] =
    useState(true);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);

  const [isResultBarShow, setIsResultBarShow] = useState(false);

  const [searchVal, setSearchVal] = useState("");

  const mobileSearchVal = useRef();
  const desktopSearchVal = useRef();

  const { data, refetch } = useQuery(
    `userData`,
    async () => {
      if (userToken) {
        const res = await getUserData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        return res.data;
      }
    },
    {
      staleTime: 50000000,
      onError: () => {
        refetch();
      },
    }
  );

  const { data: menus, isLoading: isMenusLoading } = useQuery(
    `menus`,
    async () => {
      let res = await getMenus();

      return res.data;
    }
  );

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
    getBrands().then((res) => {
      setBrands(res.data);
    });
  }, []);

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [location]);
  useEffect(() => {
    refetch();
  }, [userToken]);

  return (
    <header className="py-3 bg-white rounded-b-lg">
      <div
        className={`rounded-l-lg fixed bg-white top-0 bottom-0 right-0 h-[100dvh]  ${
          isHamburgerMenuOpen ? "w-[300px]  py-4 px-6" : "w-0"
        } transition-all duration-300 overflow-auto z-30`}
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
              {categories.length &&
                categories.map((el) => (
                  <li
                    key={Math.random()}
                    className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto"
                  >
                    <Link>{el.title}</Link>
                  </li>
                ))}
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
            {data?.firstName && data?.lastName ? (
              <Link className="flex items-center gap-1.5" to="/user-panel/home">
                <FaUser size="0.8rem" />
                {`${data.firstName} ${data.lastName}`}
              </Link>
            ) : (
              <Link to="/register" className="flex items-center gap-1.5">
                <FaUser size="0.8rem" />
                ورود | ثبت نام
              </Link>
            )}
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
        {isSearchBarShow ? (
          <div className="flex items-center gap-4 bg-gray-100 h-[40px] px-6 w-full rounded-md reletive">
            <button
              onClick={() => {
                navigator(`/search/${mobileSearchVal.current.value}`);
                mobileSearchVal.current.value = ``;
                setIsSearchBarShow(false);
              }}
            >
              <IoIosSearch size="1.5rem" color="#696969" />
            </button>
            <input
              ref={mobileSearchVal}
              className="bg-transparent h-full w-full border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
              type="text"
              placeholder="جستجو در محصولات"
              onKeyUp={(e) => {
                setSearchVal(e.target.value);
                if (e.target.value) {
                  setIsResultBarShow(true);
                } else {
                  setIsResultBarShow(false);
                }
              }}
              defaultValue={
                location.pathname.includes(`search`) ? param.searchValue : ""
              }
            />
            <button
              onClick={() => {
                setIsSearchBarShow(false);
              }}
            >
              <IoIosClose size="1.2rem" color="#696969" />
            </button>
            {isResultBarShow && (
              <div className="absolute z-20 px-6 py-3 mx-auto left-[1rem] right-[1rem] top-[45px] rounded-lg bg-gray-100/50 backdrop-blur-md">
                {!!categories.length &&
                categories.filter((el) => {
                  return el.title.includes(searchVal);
                }).length ? (
                  <div>
                    <h2 className="inline-block pb-1 relative font-danaBold text-zinc-700 before:content-[''] before:bg-orange-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-0 before:left-0">
                      دسته بندی ها
                    </h2>
                    <ul className="mt-2 child:px-3 child:py-2 child:rounded-md">
                      {categories
                        .filter((el) => {
                          return el.title.includes(searchVal);
                        })
                        .map((el) => (
                          <li
                            key={Math.random()}
                            className="hover:bg-gray-300 hover:scale-95 transition-all"
                          >
                            <Link
                              onClick={() => setIsResultBarShow(false)}
                              className="flex items-center justify-between font-dana"
                              to={`/search/${el.title}`}
                            >
                              {el.title}
                              <GoArrowUpLeft size="1rem" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                {!!brands.length &&
                brands.filter((el) => {
                  return el.title.includes(searchVal);
                }).length ? (
                  <div>
                    <h2 className="inline-block pb-1 relative font-danaBold text-zinc-700 before:content-[''] before:bg-orange-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-0 before:left-0">
                      برند ها
                    </h2>
                    <ul className="mt-2 child:px-3 child:py-2 child:rounded-md">
                      {brands
                        .filter((el) => {
                          return el.title.includes(searchVal);
                        })
                        .map((el) => (
                          <li
                            key={Math.random()}
                            className="hover:bg-gray-300 hover:scale-95 transition-all"
                          >
                            <Link
                              onClick={() => setIsResultBarShow(false)}
                              className="flex items-center justify-between font-dana"
                              to={`/search/${el.title}`}
                            >
                              {el.title}

                              <GoArrowUpLeft size="1rem" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        ) : (
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
              <Link
                className="w-[90px] h-[26px] lg:w-[137px] lg:h-[38px]"
                to="/home"
              >
                <img className="size-full" src={siteLogo} alt="site-logo" />
              </Link>
            </div>
            <div className="w-full lg:w-[500px] lg:block hidden">
              <div className="flex items-center gap-4 bg-gray-100 h-[40px] px-6 w-full rounded-md relative">
                <button
                  onClick={() => {
                    navigator(`/search/${desktopSearchVal.current.value}`);
                    desktopSearchVal.current.value = ``;
                  }}
                >
                  <IoIosSearch size="1.5rem" color="#696969" />
                </button>
                <input
                  ref={desktopSearchVal}
                  onKeyUp={(e) => {
                    setSearchVal(e.target.value);
                    if (e.target.value) {
                      setIsResultBarShow(true);
                    } else {
                      setIsResultBarShow(false);
                    }
                  }}
                  className="bg-transparent h-full w-[calc(100%-(48px+24px))] lg:w-[412px] border-none outline-none font-dana text-zinc-700 text-sm md:text-base"
                  type="text"
                  placeholder="جستجو در محصولات"
                  defaultValue={
                    location.pathname.includes(`search`)
                      ? param.searchValue
                      : ""
                  }
                />
                {isResultBarShow && (
                  <div className="absolute z-20 w-full px-6 py-3 mx-auto left-0 right-0 top-[45px] rounded-lg bg-gray-100/50 backdrop-blur-md">
                    {!!categories.length &&
                    categories.filter((el) => {
                      return el.title.includes(searchVal);
                    }).length ? (
                      <div>
                        <h2 className="inline-block pb-1 relative font-danaBold text-zinc-700 before:content-[''] before:bg-orange-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-0 before:left-0">
                          دسته بندی ها
                        </h2>
                        <ul className="mt-2 child:px-3 child:py-2 child:rounded-md">
                          {categories
                            .filter((el) => {
                              return el.title.includes(searchVal);
                            })
                            .map((el) => (
                              <li
                                key={Math.random()}
                                className="hover:bg-gray-300 hover:scale-95 transition-all"
                              >
                                <Link
                                  className="flex items-center justify-between font-dana"
                                  to={`/search/${el.title}`}
                                  onClick={() => setIsResultBarShow(false)}
                                >
                                  {el.title}
                                  <GoArrowUpLeft size="1rem" />
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                    {!!brands.length &&
                    brands.filter((el) => {
                      return el.title.includes(searchVal);
                    }) ? (
                      <div>
                        <h2 className="inline-block pb-1 relative font-danaBold text-zinc-700 before:content-[''] before:bg-orange-300 before:h-0.5 before:w-full before:absolute before:bottom-0 before:right-0 before:left-0">
                          برند ها
                        </h2>
                        <ul className="mt-2 child:px-3 child:py-2 child:rounded-md">
                          {brands
                            .filter((el) => {
                              return el.title.includes(searchVal);
                            })
                            .map((el) => (
                              <li
                                key={Math.random()}
                                className="hover:bg-gray-300 hover:scale-95 transition-all"
                              >
                                <Link
                                  onClick={() => setIsResultBarShow(false)}
                                  className="flex items-center justify-between font-dana"
                                  to={`/search/${el.title}`}
                                >
                                  {el.title}

                                  <GoArrowUpLeft size="1rem" />
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <div>
                {data?.firstName && data?.lastName ? (
                  <Link to="/user-panel/home" className="h-[35px] bg-orange-200/20 hover:bg-orange-200/40 p-2 lg:py-2 lg:px-5 rounded-md font-dana text-orange-400 flex items-center gap-2 transition-all text-sm md:text-base">
                    <FaUser
                      className="transition-all"
                      size="1rem"
                      color="rgb(251,146,60)"
                    />
                    <span className="lg:inline hidden">{`${data.firstName} ${data.lastName}`}</span>
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="h-[35px] bg-orange-200/20 hover:bg-orange-200/40 p-2 lg:py-2 lg:px-5 rounded-md font-dana text-orange-400 flex items-center gap-2 transition-all text-sm md:text-base"
                  >
                    <FaUser
                      className="transition-all"
                      size="1rem"
                      color="rgb(251,146,60)"
                    />
                    <span className="lg:inline hidden">ورود / ثبت نام</span>
                  </Link>
                )}
              </div>
              <div className="flex items-center">
                <Link
                  to="/cart"
                  className="inline-block p-2 rounded-md size-[35px] bg-orange-200/20 hover:bg-orange-200/40 transition-all"
                >
                  <IoIosCart size="1.2rem" color="rgb(251,146,60)" />
                </Link>
              </div>
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => {
                    setIsSearchBarShow(true);
                  }}
                  className="inline-block p-2 rounded-md size-[35px] bg-orange-200/20 hover:bg-orange-200/40 transition-all"
                >
                  <IoIosSearch size="1.2rem" color="rgb(251,146,60)" />
                </button>
              </div>
            </div>
          </div>
        )}
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
                  {categories.length &&
                    categories.map((el) => (
                      <li key={Math.random()}>
                        <Link className="hover:text-orange-400 transition-all duration-300 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                          {el.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
            {!isMenusLoading &&
              menus?.map((el) => (
                <li key={Math.random()} className="hidden sm:block">
                  <Link to={el.href}>{el.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
