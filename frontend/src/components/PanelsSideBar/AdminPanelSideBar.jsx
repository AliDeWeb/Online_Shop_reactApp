// React Router
import { NavLink, useNavigate } from "react-router-dom";

// icons
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoExitOutline, IoHomeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import { AiOutlineInbox } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AdminPanelSideBar() {
  const navigator = useNavigate();
  const showSwal = withReactContent(Swal);
  return (
    <div className="border border-solid border-[#E8E8E8] rounded-md py-2 px-4 font-danaDemi">
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
            to="orders"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <MdOutlineShoppingBag />
            </span>
            <span className="text-sm">سفارشات</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="users"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <FiUsers />
            </span>
            <span className="text-sm">کاربران</span>
          </NavLink>
        </div>
        <div className="text-zinc-700">
          <NavLink
            to="products"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <AiOutlineInbox />
            </span>
            <span className="text-sm">محصولات</span>
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
            to="earnings"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <RiMoneyDollarCircleLine />
            </span>
            <span className="text-sm">درآمد</span>
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
        <div className="text-zinc-700">
          <NavLink
            to="todos"
            className={(a) => {
              return `${!!a.isActive && "active-panel-menu"} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
            }}
          >
            <span>
              <CiBoxList />
            </span>
            <span className="text-sm">لیست کارها</span>
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
    </div>
  );
}
