import { useEffect } from "react";

// React Router
import { Outlet, useNavigate } from "react-router-dom";

// components
import {
  AdminPanelHeader,
  AdminPanelSideBar,
  Footer,
} from "../../configs/Layout/Layout";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Axios
import { apiUrl, getUserData } from "../../configs/axios/axiosConfigs";

export default function AdminPanel() {
  const { userToken } = useUserToken();
  const navigator = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigator("/404");
    }
    if (document.location.pathname === "/admin-panel") {
      navigator("/admin-panel/home");
    }
  }, []);

  const { data, isLoading } = useQuery(
    `adminData`,
    async () => {
      if (userToken) {
        const res = await getUserData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data;
      }
    },
    {
      staleTime: 20000,
    },
  );

  useEffect(() => {
    !isLoading &&
      (() => {
        if (!(data.role == `ADMIN`) && !(data.role == `ADMINASSISTANT`)) {
          navigator(`/404`);
        }
      })();
  }, [data]);

  return (
    <>
      {!isLoading && (
        <>
          <AdminPanelHeader
            profile={`${apiUrl}/${data?.profile}`}
            name={`${data?.firstName} ${data?.lastName}`}
          />
          <div>
            <div className="container">
              <div>
                <div className="grid grid-cols-8">
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
      )}
    </>
  );
}
