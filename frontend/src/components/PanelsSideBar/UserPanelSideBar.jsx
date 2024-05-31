// React Router
import { Link, NavLink, useNavigate } from "react-router-dom";

// icons
import { CiEdit } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { IoExitOutline, IoHomeOutline } from "react-icons/io5";
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

export default function UserPanelSideBar() {
  const showSwal = withReactContent(Swal);
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();

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
    },
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
                showSwal
                  .fire({
                    title: "افزایش موجودی",
                    input: "range",
                    inputAttributes: {
                      min: "50000",
                      max: "50000000",
                      step: "50000",
                    },
                    inputValue: 200000,
                    confirmButtonText: "تایید",
                    cancelButtonText: "انصراف",
                    showCancelButton: true,
                    showCloseButton: true,
                  })
                  .then((res) => {
                    if (res.isConfirmed) {
                      updateWallet({
                        url: `/${res.value}`,
                        headers: {
                          Authorization: `Bearer ${userToken}`,
                        },
                      }).then((res) => {
                        window.location.replace(res.data.url);
                        refetch();
                      });
                    }
                  });
              }}
              className="text-sm flex items-center text-teal-600 transition-all hover:scale-95 line-clamp-1"
            >
              <span className="line-clamp-1">افزایش موجودی</span>
              <span>
                <MdOutlineKeyboardArrowLeft />
              </span>
            </button>
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
