import React from "react";

// Imgs
import discount from "../../assets/imgs/icons/discount.svg";
import returnSvg from "../../assets/imgs/icons/return.svg";
import service from "../../assets/imgs/icons/service.svg";
import shoppingBasket from "../../assets/imgs/icons/shopping-basket.svg";
import terminal from "../../assets/imgs/icons/terminal.svg";
import tracking from "../../assets/imgs/icons/tracking.svg";
import bazar from "../../assets/imgs/icons/bazar.svg";
import googlePlay from "../../assets/imgs/icons/google-play.svg";
import appleStore from "../../assets/imgs/icons/apple-store.svg";

// Icons
import { CiMobile3 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pt-8 bg-white">
      <div>
        <div>
          <div className="container">
            <div className="flex items-center justify-evenly flex-wrap lg:flex-nowrap child:w-1/4 gap-6 lg:gap-0 lg:child:w-auto text-[#494949]">
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={shoppingBasket} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  ارسال به تمامی شهرها
                </span>
                <span className="xl:text-base text-sm sm:hidden">
                  تمامی شهرها
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={tracking} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  امکان تحویل اکسپرس
                </span>
                <span className="xl:text-base text-sm sm:hidden">اکسپرس</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={terminal} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  امکان پرداخت در محل
                </span>
                <span className="xl:text-base text-sm sm:hidden">
                  پرداخت اسان
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={service} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  ۷ روز هفته، ۲۴ ساعته
                </span>
                <span className="xl:text-base text-sm sm:hidden">۲۴ ساعته</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={returnSvg} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  ۷ روز ضمانت بازگشت کالا
                </span>
                <span className="xl:text-base text-sm sm:hidden">
                  بازگشت کالا
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-dana">
                <div className="w-[44px]">
                  <img src={discount} alt="icon" />
                </div>
                <span className="xl:text-base text-sm sm:inline hidden">
                  ضمانت اصل بودن کالا
                </span>
                <span className="xl:text-base text-sm sm:hidden">
                  اصالت کالا
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-6">
          <div className="container">
            <div className="flex sm:flex-nowrap flex-wrap child:w-full sm:child:w-1/2 sm:gap-0 gap-5">
              <div className="sm:pl-5">
                <h3 className="font-danaBold lg:text-lg text-[#494949]">
                  با تیمچه ، آنلاین و ارزان خرید کنید
                </h3>
                <p className="font-dana mt-2.5 lg:text-base text-sm lg:line-clamp-none line-clamp-5 text-[#727272]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت
                </p>
              </div>
              <div className="sm:pr-5">
                <h3 className="font-danaBold lg:text-lg text-[#494949]">
                  تماس با ما
                </h3>

                <ul className="text-[#727272] mt-2.5 font-dana lg:text-base text-sm">
                  <li className="flex items-center mb-1.5">
                    <MdEmail color="#727272" className="ml-1.5" size="1rem" />
                    ایمیل:
                    <a
                      className="mr-3"
                      href="mailto:alimoradi0business@gmail.com"
                    >
                      alimoradi0business@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center mb-1.5">
                    <CiMobile3 color="#727272" className="ml-1.5" size="1rem" />
                    تلفن:
                    <a className="mr-3" href="tel:+989123456789">
                      09123456789
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaLocationDot
                      color="#727272"
                      className="ml-1.5"
                      size="1rem"
                    />
                    آدرس:
                    <span className="mr-3">
                      تهران ، پاستور ، خیابان آوینی ، پلاک 11
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-6">
          <div className="container">
            <div className="flex lg:items-start lg:justify-start flex-wrap lg:flex-nowrap child:w-full gap-4 lg:gap-0 lg:child:w-1/2">
              <div>
                <h3 className="font-danaBold lg:text-lg text-[#494949]">
                  خبرنامه فروشگاه تیمچه
                </h3>
                <div className="mt-4 border-2 border-[#f4f6f8] border-solid rounded-md py-1.5 px-4 w-full lg:w-max">
                  <input
                    type="text"
                    placeholder="آدرس ایمیل"
                    className="border-none outline-none font-dana bg-transparent px-2.5 w-[calc(100%-(68.77px))] lg:w-[350px]"
                  />
                  <button className="font-dana bg-[#f4f6f8] py-1.5 px-2 rounded-md text-sm transition-all hover:text-white hover:bg-[#673ab7]">
                    عضوم کن
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-danaBold lg:text-lg text-[#494949]">
                  دانلود اپلیکیشن تیمچه
                </h3>
                <div className="mt-4 lg:w-max flex items-center justify-between lg:justify-start lg:gap-6 w-full">
                  <a href="#">
                    <img
                      className="w-[90px] sm:w-[135px] h-[25px] sm:h-[40px]"
                      src={bazar}
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-[90px] sm:w-[135px] h-[25px] sm:h-[40px]"
                      src={googlePlay}
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-[90px] sm:w-[135px] h-[25px] sm:h-[40px]"
                      src={appleStore}
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 bg-[#e3e3eb]">
          <p
            className="flex items-center justify-center font-poppins text-sm text-[#494949]"
            style={{ direction: `ltr` }}
          >
            &copy; <a href="https://www.github.com/AliDeWeb">AliDeWeb</a>,
            <a href="https://www.github.com/mahdidesignerrr" className="ml-2">
              Mahdi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
