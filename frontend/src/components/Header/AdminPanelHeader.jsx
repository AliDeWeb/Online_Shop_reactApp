import * as React from "react";

// Mui
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import { IoMenu } from "react-icons/io5";
import { IoNotifications, IoSearch } from "react-icons/io5";

// React Router
import { Link } from "react-router-dom";

// Imgs
import siteLogo from "../../assets/imgs/site-logo.svg";

export default function AdminPanelHeader() {
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
                  <MenuItem onClick={handleClose}>کاربران</MenuItem>
                  <MenuItem onClick={handleClose}>محصولات</MenuItem>
                  <MenuItem onClick={handleClose}>نظرات</MenuItem>
                  <MenuItem onClick={handleClose}>سفارشات</MenuItem>
                  <MenuItem onClick={handleClose}>پیغام ها</MenuItem>
                  <MenuItem onClick={handleClose}>
                    برای خروج از حساب کاربری کلیک کنید
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-full object-contain size-[35px] sm:size-[50px]">
                <Link to="/user-panel/home">
                  <img
                    src="https://imgs.search.brave.com/KJTHaxbvUUlEFfpmj6srHCgvOwLddNWr6K-52O5VqK0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NjcwN2FmYzdlMTI5/YmJiMDNfcHJvZmls/ZS1waG90b19iYWQt/c2V0dGluZy5qcGVn"
                    alt="profile"
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link
                  to="/user-panel/home"
                  className="flex flex-col gap-0.5 font-dana"
                >
                  <span className="text-[#202224]/90 text-sm font-danaDemi">
                    علی مرادی
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
