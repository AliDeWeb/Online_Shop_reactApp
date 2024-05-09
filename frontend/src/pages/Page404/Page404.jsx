import { useEffect } from "react";

// React Router
import { useNavigate, Link } from "react-router-dom";

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
    }, 6000);

    document.title = "تیمچه - چیزی یافت نشد";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <div className="container">
        <div className="flex flex-col gap-4 items-center justify-center min-h-[100dvh]">
          <h1 className="font-danaBold text-2xl">صفحه‌ای یافت نشد!</h1>
          <p className="text-gray-400 text-center font-dana">
            صفحه مورد نظر شما یافت نشد. ممکن است از ابتدا حذف شده باشد ، تغییر
            نام داده شود یا وجود نداشته باشد.
          </p>
          <Link
            to="/home"
            className="font-dana text-gray-400 border border-solid border-orange-300 py-0.5 px-2 rounded-lg transition-all hover:bg-orange-100"
          >
            صفحه اصلی
          </Link>
          <div className="mt-3 lg:w-auto md:w-[550px] sm:w-[420px] w-[320px]">
            <img src={gif404} alt="gif" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
