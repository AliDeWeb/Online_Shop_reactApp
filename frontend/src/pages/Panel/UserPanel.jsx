import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Motion, UserPanelSideBar } from "../../configs/Layout/Layout";
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function UserPanel() {
   const userToken = useUserToken();
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (!userToken.userToken) {
         navigate("/login");
      }
      if (location.pathname === "/user-panel") {
         navigate("/user-panel/home");
      }
   }, [userToken, navigate, location.pathname]);

   return (
      <div className="py-12">
         <div className="container">
            <div className="grid grid-cols-4 gap-4">
               <div className="col-span-4 order-2 lg:order-1 lg:col-span-1">
                  <div className="p-4 border border-solid border-gray-400/50 rounded-lg divide-y divide-solid divide-gray-400/50">
                     <UserPanelSideBar />
                  </div>
               </div>
               <Motion>
                  <div className="col-span-4 order-1 lg:order-2 lg:col-span-3">
                     <Motion.page
                        key={location.pathname}
                        className="border border-solid border-gray-400/50 rounded-lg p-4"
                     >
                        <Outlet />
                     </Motion.page>
                  </div>
               </Motion>
            </div>
         </div>
      </div>
   );
}
