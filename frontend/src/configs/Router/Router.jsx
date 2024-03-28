import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index, Home, Register } from "../Layout/Layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
