import { useEffect } from "react";

// React Router
import { Outlet } from "react-router-dom";

// components
import {
  AdminPanelSideBar,
  AdminPanelHeader,
  Footer,
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
      <div>
        <div className="container">
          <div>
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-8 order-2 xl:order-1 xl:col-span-2">
                <div className="p-4">
                  <AdminPanelSideBar />
                </div>
              </div>
              <div className="col-span-8 order-1 xl:order-2 xl:col-span-6">
                <div className="p-4">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
