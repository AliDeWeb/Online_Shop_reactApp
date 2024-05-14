import { useEffect } from "react";

// Components
import { NotificationsBox } from "../../configs/Layout/Layout";

// Axios
import { getAdminNotifications } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Query
import { useQuery, useQueryClient } from "react-query";

export default function AdminPanelNotifications() {
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    `AdminNotifications`,
    async () => {
      if (userToken) {
        const res = await getAdminNotifications({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(res.data);
        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
    }
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "تیمچه - پیغام ها";
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h2 className="inline-block font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
          پیغام ها
        </h2>
      </div>
      <div className="divide-y divide-solid divide-gray-400/20">
        {!isLoading && data?.length ? (
          data?.map((el) => (
            <div key={Math.random()}>
              <NotificationsBox
                username={`پیغام جدید`}
                date={el.createdAt}
                message={el.message}
                isSeen={el.isSeen}
                id={el._id}
                refetch={refetch}
              />
            </div>
          ))
        ) : (
          <div className="h-[200px] flex justify-center items-center font-dana">
            <span className="text-gray-400 text-sm">
              هیچ پیغامی برای شما وجود ندارد
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
