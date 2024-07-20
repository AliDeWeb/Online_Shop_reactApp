import { useEffect } from "react";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Router
import { Outlet, useNavigate } from "react-router-dom";

// components
import { UserPanelSideBar } from "../../configs/Layout/Layout";

export default function UserPanel() {
  const userToken = useUserToken();
  const navigator = useNavigate();

  useEffect(() => {
    if (!userToken.userToken) {
      navigator("/login");
    }
    if (document.location.pathname === "/user-panel") {
      navigator("/user-panel/home");
    }
  });

  return (
    <div className="py-12">
      <div className="container">
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 order-2 lg:order-1 lg:col-span-1">
              <div className="p-4 border border-solid border-gray-400/50 rounded-lg divide-y divide-solid divide-gray-400/50">
                <UserPanelSideBar />
              </div>
            </div>
            <div className="col-span-4 order-1 lg:order-2 lg:col-span-3">
              <div className="p-4 border border-solid border-gray-400/50 rounded-lg">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
