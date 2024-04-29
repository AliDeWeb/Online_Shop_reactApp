// React Router
import { NavLink, useParams } from "react-router-dom";

// Components
import { OrdersBox } from "../../configs/Layout/Layout";

// Axios
import { getUserPanelData } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function UserPanelOrders() {
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();
  const param = useParams();
  const {
    data: userData,
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

  return (
    <div>
      <div>
        <div>
          <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg w-max">
            تاریخچه سفارش ها
          </h2>
        </div>
        <div className="mt-4">
          <nav>
            <ul className="active-orders-page-wrapper flex items-center gap-2 font-dana overflow-auto">
              <li>
                <NavLink
                  to="/user-panel/orders/processingOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-1 py-2 px-1 text-sm sm:text-base w-max font-dana transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  جاری
                  <span className="size-4 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    {!isLoading && userData?.orders[`processingOrders`]?.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/successfullOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-dana transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  تحویل شده
                  <span className="size-4 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    {!isLoading &&
                      userData?.orders[`successfullOrders`]?.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/pendingPaymentOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-dana transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  در انتظار پرداخت
                  <span className="size-4 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    {!isLoading &&
                      userData?.orders[`pendingPaymentOrders`]?.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/canceledOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-dana transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  لغو شده
                  <span className="size-4 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    {!isLoading && userData?.orders[`canceledOrders`]?.length}
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-6">
          {!isLoading &&
            (userData?.orders[param.status].length ? (
              userData?.orders[param.status]?.map((el) => (
                <div key={Math.random()}>
                  <OrdersBox
                    price={el.totalPriceAfterOff}
                    discountedPrice={el.totalPrice - el.totalPriceAfterOff}
                    orderCode={el.trackingCode}
                    date={el.createdAt}
                    covers={[...el.items.map((el) => el.covers[0])]}
                    status={param.status}
                    href={el.trackingCode}
                  />
                </div>
              ))
            ) : (
              <span className="text-lg block text-center font-danaBold text-red-400 col-span-4">
                محصولی وجود ندارد
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
