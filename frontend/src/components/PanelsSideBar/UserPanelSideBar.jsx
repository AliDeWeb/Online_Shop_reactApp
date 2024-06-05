import { useState, useRef } from "React";

// React Router
import { Link, NavLink, useNavigate } from "react-router-dom";

// React Spinners
import ClipLoader from "react-spinners/ClipLoader.js";

// icons
import { CiEdit } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineShoppingBag,
} from "react-icons/md";
import {
  IoExitOutline,
  IoHomeOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Axios
import {
  getUserPanelData,
  updateWallet,
} from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Components
import { Modal } from "../../configs/Layout/Layout";

export default function UserPanelSideBar() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const showSwal = withReactContent(Swal);
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();

  const [isDataFetching, setIsDataFetching] = useState(false);

  const payment = useRef(0);

  const navigator = useNavigate();

  const { data, isLoading, refetch } = useQuery(
    `userPanelInfos`,
    async () => {
      if (userToken) {
        const res = await getUserPanelData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      initialData: () => {
        const data = queryClient.getQueryData(`userPanelInfos`);

        return data;
      },
    }
  );

  return (
    <>
      <div className="pb-4">
        <div className="flex justify-between items-center mb-2.5">
          <div className="font-dana text-gray-400 flex flex-col gap-1">
            <span className="text-zinc-700 font-danaBold">
              {!isLoading && `${data?.user?.firstName} ${data?.user?.lastName}`}
            </span>
            <span className="text-sm">{!isLoading && data?.user?.phone}</span>
          </div>
          <Link to="/user-panel/home" className="text-gray-400">
            <CiEdit size="1.2rem" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-dana text-gray-400 flex flex-col gap-1">
            <span className="text-zinc-700">کیف پول</span>
            <button
              onClick={() => {
                setIsWalletModalOpen(true);
              }}
              className="text-sm flex items-center text-teal-600 transition-all hover:scale-95 line-clamp-1"
            >
              <span className="line-clamp-1">افزایش موجودی</span>
              <span>
                <MdOutlineKeyboardArrowLeft />
              </span>
            </button>
            <Modal
              isOpen={isWalletModalOpen}
              changeVisibility={setIsWalletModalOpen}
            >
              <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4 text-zinc-700">
                <button
                  onClick={() => {
                    setIsWalletModalOpen(false);
                  }}
                >
                  <IoCloseCircleOutline size="1.5rem" />
                </button>
                <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                  افزایش موجودی
                </h2>
              </div>
              <div className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4 font-dana">
                <input
                  id="commentDisc"
                  type="text"
                  placeholder="مبلغ مورد نظر خود را وارد نمایید"
                  className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                  onInput={(e) => {
                    payment.current = e.target.value;
                  }}
                />
              </div>
              <button
                className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center text-zinc-700"
                type="submit"
                onClick={() => {
                  setIsDataFetching(true);

                  updateWallet({
                    url: `/${payment.current}`,
                    headers: {
                      Authorization: `Bearer ${userToken}`,
                    },
                  }).then((res) => {
                    console.log(res);
                    window.location.replace(res.data.url);
                    setIsDataFetching(false);
                    refetch();
                  });
                }}
              >
                {isDataFetching ? (
                  <ClipLoader color="#d97706" size="18" />
                ) : (
                  "ادامه ..."
                )}
              </button>
            </Modal>
          </div>
          <span className="text-teal-600 font-danaBold text-sm line-clamp-1">
            {!isLoading && (data?.user?.wallet).toLocaleString()} تومان
          </span>
        </div>
      </div>
      <div className="divide-y divide-solid divide-gray-400/20">
        <div className="text-zinc-700">
          <NavLink
            to="home"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <IoHomeOutline />
            </span>
            <span className="text-sm">نمای کلی</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="orders/processingOrders"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <MdOutlineShoppingBag />
            </span>
            <span className="text-sm">سفارش ها</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="favorites"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <FaRegHeart />
            </span>
            <span className="text-sm">مورد علاقه</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="comments"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <FaRegComment />
            </span>
            <span className="text-sm">دیدگاه ها</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="addresses"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span className="text-sm">آدرس ها</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="notifications"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <IoMdNotificationsOutline />
            </span>
            <span className="text-sm">پیغام ها</span>
          </NavLink>
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
    </>
  );
}
