// Components
import { NotificationsBox } from "../../configs/Layout/Layout";

// Axios
import { getUserPanelData } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Query
import { useQuery, useQueryClient } from "react-query";

export default function UserPanelNotifications() {
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    `userPanelInfos`,
    async () => {
      if (userToken) {
        const res = await getUserPanelData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      initialData: () => {
        const data = queryClient.getQueryData(`userPanelInfos`);

        return data;
      },
    }
  );
  return (
    <div>
      <div className="mb-8">
        <h2 className="inline-block font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
          پیغام ها
        </h2>
      </div>
      <div className="divide-y divide-solid divide-gray-400/20">
        {!isLoading && data?.notifications.length ? (
          data?.notifications.map((el) => (
            <div key={Math.random()}>
              <NotificationsBox
                username={`${data.user.firstName} ${data.user.lastName}`}
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
