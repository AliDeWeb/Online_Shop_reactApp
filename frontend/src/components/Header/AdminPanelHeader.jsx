import * as React from "react";

// Mui
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import { IoNotifications, IoSearch } from "react-icons/io5";

// React Router
import { Link, useNavigate } from "react-router-dom";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

export default function AdminPanelHeader(props) {
  const navigator = useNavigate();
  const showSwal = withReactContent(Swal);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-[100px]">
              <Link to="/home" className="w-[100px]">
                <img src={siteLogo} alt="siteLogo" />
              </Link>
            </div>
            <div className="md:flex hidden items-center gap-2 h-[38px] bg-[#D5D5D5]/30 px-4 rounded-2xl text-[#202224]/90 border border-solid border-[#D5D5D5]">
              <button className="text-black/50">
                <IoSearch size="1.2rem" />
              </button>
              <input
                className="font-dana h-full md:w-[280px] lg:w-[380px] bg-transparent border-none outline-none"
                type="text"
                placeholder="جستجو..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="text-black/50 lg:block hidden">
              <button>
                <IoNotifications size="1.6rem" />
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ marginBottom: 0 }}
                  className="text-[#202224]/90 fontDanaDemi sm:text-base text-sm border border-solid border-[#D5D5D5] px-4 sm:px-6 py-1 rounded-lg"
                >
                  گزینه ها
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link to="/admin-panel/home">
                    <MenuItem onClick={handleClose}>نمای کلی</MenuItem>
                  </Link>
                  <Link to="/admin-panel/products">
                    <MenuItem onClick={handleClose}>محصولات</MenuItem>
                  </Link>
                  <Link to="/admin-panel/users">
                    <MenuItem onClick={handleClose}>کاربران</MenuItem>
                  </Link>
                  <Link to="/admin-panel/comments">
                    <MenuItem onClick={handleClose}>نظرات</MenuItem>
                  </Link>
                  <Link to="/admin-panel/orders">
                    <MenuItem onClick={handleClose}>سفارشات</MenuItem>
                  </Link>
                  <Link to="/admin-panel/notifications">
                    <MenuItem onClick={handleClose}>پیغام ها</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>
                    <button
                      className="text-red-600"
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
                    >
                      برای خروج از حساب کاربری کلیک کنید
                    </button>
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-full object-contain size-[35px] sm:size-[50px]">
                <Link to="/admin-panel">
                  <img src={props.profile} alt="profile" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link
                  to="/admin-panel"
                  className="flex flex-col gap-0.5 font-dana"
                >
                  <span className="text-[#202224]/90 text-sm font-danaDemi">
                    {props.name}
                  </span>
                  <span className="text-[#202224]/90 text-xs">ادمین</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
