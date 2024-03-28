import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Index,
  Home,
  Register,
  Login,
  ProductsDetails,
} from "../Layout/Layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id" element={<ProductsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
