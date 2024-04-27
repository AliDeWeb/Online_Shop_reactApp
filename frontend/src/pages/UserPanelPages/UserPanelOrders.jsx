// React Router
import { NavLink } from "react-router-dom";

// Components
import { OrdersBox } from "../../configs/Layout/Layout";

export default function UserPanelOrders() {
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
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-1 py-2 px-1 text-sm sm:text-base w-max font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  جاری
                  <span className="size-6 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    50
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/successfullOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  تحویل شده
                  <span className="size-6 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    50
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/pendingPaymentOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  در انتظار پرداخت
                  <span className="size-6 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    50
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user-panel/orders/canceledOrders"
                  className={(a) => {
                    return `${!!a.isActive && "active-orders-page"} flex items-center gap-2 py-2 px-1 text-sm sm:text-base w-max font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
                  }}
                >
                  لغو شده
                  <span className="size-6 text-xs flex items-center justify-center rounded-full font-danaBold text-white bg-[#a1a3a8]">
                    50
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-6">
          <OrdersBox />
        </div>
      </div>
    </div>
  );
}
