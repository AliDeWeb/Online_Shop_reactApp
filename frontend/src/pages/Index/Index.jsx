import React, { useEffect } from "react";

// React Router
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// Components
import { Header } from "../../configs/Layout/Layout";
import { Footer } from "../../configs/Layout/Layout";

export default function Index() {
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigator("/home");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
