import { useEffect } from "react";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Router
import { useNavigate, Link } from "react-router-dom";

// icons
import { CiEdit } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function UserPanel() {
  const userToken = useUserToken();
  const navigator = useNavigate();

  const showSwal = withReactContent(Swal);

  useEffect(() => {
    if (!userToken.userToken) {
      navigator("/login");
    }
  });

  return (
    <div className="py-12">
      <div className="container">
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 order-2 lg:order-1 lg:col-span-1">
              <div className="p-4 border border-solid border-gray-400/50 rounded-lg divide-y divide-solid divide-gray-400/50">
                <div className="pb-4">
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="font-dana text-gray-400 flex flex-col gap-1">
                      <span className="text-zinc-700 font-danaBold">
                        علی مرادی
                      </span>
                      <span className="text-sm">09124567898</span>
                    </div>
                    <button className="text-gray-400">
                      <CiEdit size="1.2rem" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-dana text-gray-400 flex flex-col gap-1">
                      <span className="text-zinc-700">کیف پول</span>
                      <button className="text-sm flex items-center text-teal-600 transition-all hover:scale-95">
                        <span>افزایش موجودی</span>
                        <span>
                          <MdOutlineKeyboardArrowLeft />
                        </span>
                      </button>
                    </div>
                    <span className="text-gray-400 font-dana text-sm">
                      256 تومان
                    </span>
                  </div>
                </div>
                <div className="divide-y divide-solid divide-gray-400/20">
                  <div className="text-zinc-700 active-panel-menu">
                    <Link className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md">
                      <span>
                        <IoHomeOutline />
                      </span>
                      <span className="text-sm">نمای کلی</span>
                    </Link>
                  </div>
                  <div className="text-zinc-700">
                    <Link className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md">
                      <span>
                        <MdOutlineShoppingBag />
                      </span>
                      <span className="text-sm">سفارش ها</span>
                    </Link>
                  </div>
                  <div className="text-zinc-700">
                    <Link className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md">
                      <span>
                        <FaRegHeart />
                      </span>
                      <span className="text-sm">مورد علاقه</span>
                    </Link>
                  </div>
                  <div className="text-zinc-700">
                    <Link className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md">
                      <span>
                        <FaRegComment />
                      </span>
                      <span className="text-sm">دیدگاه ها</span>
                    </Link>
                  </div>
                  <div className="text-zinc-700">
                    <Link className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md">
                      <span>
                        <HiOutlineLocationMarker />
                      </span>
                      <span className="text-sm">آدرس ها</span>
                    </Link>
                  </div>
                  <div className="text-red-600">
                    <button
                      onClick={() => {
                        showSwal
                          .fire({
                            title: "آیا از خروج اطمینان دارید؟",
                            icon: "question",
                            iconHtml: "؟",
                            confirmButtonText: "بله",
                            cancelButtonText: "خیر",
                            showCancelButton: true,
                            showCloseButton: true,
                          })
                          .then((res) => {
                            if (res.isConfirmed) {
                              (() => {
                                document.cookie =
                                  "token" +
                                  "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                              })();
                            }
                            navigator("/home");
                          });
                      }}
                      className="flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-red-400/20 rounded-md w-full"
                    >
                      <span>
                        <IoExitOutline />
                      </span>
                      <span className="text-sm">خروج</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 order-1 lg:order-2 lg:col-span-3">
              <div className="p-4 border border-solid border-gray-400/50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
