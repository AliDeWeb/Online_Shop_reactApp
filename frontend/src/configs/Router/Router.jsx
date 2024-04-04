import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Index,
  Home,
  Register,
  Login,
  ProductsDetails,
  Cart,
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
          <Route path="product/:href" element={<ProductsDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
