import { useEffect } from "react";

// React Router
import { Outlet } from "react-router-dom";

// components
import {
  AdminPanelSideBar,
  AdminPanelHeader,
} from "../../configs/Layout/Layout";

export default function AdminPanel() {
  useEffect(() => {
    if (location.pathname.includes(`admin-panel`)) {
      document.body.classList.add("bg-white");
    }
  }, []);

  return (
    <>
      <AdminPanelHeader />
      <div className="py-12">
        <div className="container">
          <div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 order-2 lg:order-1 lg:col-span-1">
                <div className="p-4">
                  <AdminPanelSideBar />
                </div>
              </div>
              <div className="col-span-4 order-1 lg:order-2 lg:col-span-3">
                <div className="p-4g">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
