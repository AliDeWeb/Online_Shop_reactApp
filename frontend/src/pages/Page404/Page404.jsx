import React, { useEffect } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import { Header, Footer } from "../../configs/Layout/Layout";

// Imgs
import gif404 from "../../assets/imgs/404-not-found.svg";

export default function Page404() {
  document.title = `صفحه یافت نشد!`;

  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigator(`/home`);
    }, 3000);
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <div className="container">
        <div className="flex flex-col gap-4 items-center justify-center min-h-[100dvh]">
          <h1 className="font-danaBold text-2xl">صفحه‌ای یافت نشد!</h1>
          <p className="text-gray-400 text-center">
            صفحه مورد نظر شما یافت نشد. ممکن است از ابتدا حذف شده باشد ، تغییر
            نام داده شود یا وجود نداشته باشد.
          </p>
          <div className="mt-3 lg:w-auto md:w-[550px] sm:w-[420px] w-[320px]">
            <img src={gif404} alt="gif" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
