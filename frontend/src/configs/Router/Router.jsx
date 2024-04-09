import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Index,
  Home,
  Register,
  Login,
  ForgetPasswordEmail,
  ForgetPasswordCode,
  ForgetPasswordNewPassword,
  ProductsDetails,
  Cart,
  Search,
  Page404,
} from "../Layout/Layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgetPasswordEmail />} />
          <Route path="forgot-password-code/:email" element={<ForgetPasswordCode />} />
          <Route path="forgot-password-new-password/:token" element={<ForgetPasswordNewPassword />} />
          <Route path="product/:href" element={<ProductsDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search/:searchValue" element={<Search />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
