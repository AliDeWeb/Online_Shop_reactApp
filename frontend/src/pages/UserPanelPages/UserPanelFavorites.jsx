import { useEffect } from "react";

// Components
import { FavsProductBox } from "../../configs/Layout/Layout";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Axios
import { getUserPanelData, apiUrl } from "../../configs/axios/axiosConfigs";

export default function UserPanelFavorites() {
  const queryClient = useQueryClient();
  const { userToken } = useUserToken();
  const {
    data: infosData,
    isLoading,
    refetch,
  } = useQuery(
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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "تیمچه - محصولات مورد علاقه";
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between px-2.5 font-dana mb-8">
        <div>
          <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
            محصولات مورد علاقه
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-4 justify-items-center justify-center">
        {!isLoading &&
          (infosData?.favoriteProducts[0]?.items.length ? (
            infosData?.favoriteProducts[0]?.items?.map((el) => {
              return (
                <div
                  key={Math.random()}
                  className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full"
                >
                  <FavsProductBox
                    title={el.product.title}
                    decs={el.product.description}
                    cover={`${apiUrl}/${el.product.covers[0]}`}
                    href={el.product.href}
                    id={el.product._id}
                    refetch={refetch}
                  />
                </div>
              );
            })
          ) : (
            <span className="text-lg block text-center font-danaBold text-red-400 col-span-4">
              محصولی وجود ندارد
            </span>
          ))}
      </div>
    </div>
  );
}
