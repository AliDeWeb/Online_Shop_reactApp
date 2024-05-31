import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AdminLogin,
  AdminLoginEmailValidation,
  AdminPanel,
  AdminPanelComments,
  AdminPanelEarnings,
  AdminPanelHome,
  AdminPanelNotifications,
  AdminPanelOrders,
  AdminPanelProducts,
  AdminPanelToDos,
  AdminPanelUserInfos,
  AdminPanelUsers,
  AdminRegister,
  Cart,
  CheckOut,
  ForgetPasswordCode,
  ForgetPasswordEmail,
  ForgetPasswordNewPassword,
  Home,
  Index,
  Login,
  OrdersStatus,
  Page404,
  PaymentStatus,
  ProductsDetails,
  Register,
  Search,
  UserPanel,
  UserPanelAddresses,
  UserPanelComments,
  UserPanelFavorites,
  UserPanelHome,
  UserPanelNotifications,
  UserPanelOrders,
} from "../Layout/Layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-register" element={<AdminRegister />} />
          <Route
            path="admin-login-verify/:email"
            element={<AdminLoginEmailValidation />}
          />
          <Route path="forgot-password" element={<ForgetPasswordEmail />} />
          <Route
            path="forgot-password-code/:email"
            element={<ForgetPasswordCode />}
          />
          <Route
            path="forgot-password-new-password/:token"
            element={<ForgetPasswordNewPassword />}
          />
          <Route path="product/:href" element={<ProductsDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="payment-status/verify" element={<PaymentStatus />} />
          <Route path="search/:searchValue" element={<Search />} />
          <Route path="user-panel" element={<UserPanel />}>
            <Route path="home" element={<UserPanelHome />} />
            <Route path="favorites" element={<UserPanelFavorites />} />
            <Route path="orders/:status" element={<UserPanelOrders />} />
            <Route path="addresses" element={<UserPanelAddresses />} />
            <Route path="comments" element={<UserPanelComments />} />
            <Route path="notifications" element={<UserPanelNotifications />} />
            <Route path="order-status/:orderId" element={<OrdersStatus />} />
          </Route>
        </Route>
        <Route path="admin-panel" element={<AdminPanel />}>
          <Route path="home" element={<AdminPanelHome />} />
          <Route path="orders" element={<AdminPanelOrders />} />
          <Route path="users" element={<AdminPanelUsers />} />
          <Route path="products" element={<AdminPanelProducts />} />
          <Route path="comments" element={<AdminPanelComments />} />
          <Route path="notifications" element={<AdminPanelNotifications />} />
          <Route path="todos" element={<AdminPanelToDos />} />
          <Route path="earnings" element={<AdminPanelEarnings />} />
          <Route path="user/:id" element={<AdminPanelUserInfos />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
