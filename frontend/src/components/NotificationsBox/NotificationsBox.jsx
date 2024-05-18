import { useState } from "react";

// Icons
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

// MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Axios
import {
  updateNotificationSeenStatus,
  deleteNotificationSeenStatus,
} from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function NotificationsBox({
  title,
  date,
  message,
  isSeen,
  id,
  refetch,
}) {
  const { userToken } = useUserToken();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="py-5 flex px-2 gap-4 relative">
      <div>
        <div className="text-orange-400 flex justify-center items-center">
          <MdNotificationsActive size="1.5rem" />
          {isSeen ? (
            ""
          ) : (
            <span className="size-2 rounded-full bg-blue-400 mr-2"></span>
          )}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="font-dana">
          <div>
            <div>
              <div className="px-4 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
                <div className="font-danaBold text-sm text-zinc-700">
                  {title}
                </div>
                <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
                <div className="w-max flex flex-nowrap gap-1">
                  <span className="text-sm text-gray-400 w-max">
                    تاریخ:{" "}
                    <span dir="ltr">{date?.slice(0, date?.indexOf(`T`))}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-gray-600 text-sm">
            <p className="line-clamp-3 font-dana">{message}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1 -left-2 sm:left-0">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <HiOutlineDotsVertical />
        </Button>
        <Menu
          className="absolute top-1 left-8"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              updateNotificationSeenStatus({
                url: `/${id}`,
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }).then(() => {
                refetch();
              });
            }}
          >
            <span className="text-sm sm:text-base">سین شد</span>
          </MenuItem>
          <MenuItem
            onClick={() => {
              deleteNotificationSeenStatus({
                url: `/${id}`,
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }).then(() => {
                refetch();
              });
            }}
          >
            <span className="text-red-600 text-sm sm:text-base">حذف</span>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
