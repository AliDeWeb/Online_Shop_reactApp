import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// React Router
import { Link } from "react-router-dom";

// Icon
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCalendarCheck, FaStore, FaShoppingCart } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";

// imgs
import img3 from "../../assets/imgs/productImg3.png";
import desc from "../../assets/imgs/descriptionImg.jpg";

export default function ProductsDetails() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="bg-white sm:py-5 sm:px-8 py-2.5 px-3 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="2xl:col-span-1 lg:col-span-2 size-[300px] sm:size-[450px]  lg:size-[650px] 2xl:size-[450px] mx-auto 2xl:mx-0">
              <Swiper
                slidesPerView={1}
                modules={[Navigation, A11y]}
                navigation
                loop={true}
              >
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={img3} alt="img" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h1 className="font-danaBold text-xl">
                سویشرت مردانه نایک کلاه دار
              </h1>
              <span className="mt-2 font-dana text-sm text-gray-400 inline-block">
                <Link className="line-clamp-1 font-poppins">
                  Nike Men's Hooded Sweater
                </Link>
              </span>
              <div className="grid gap-y-2 sm:grid-cols-2 grid-rows-2 font-dana mt-4 text-gray-400">
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  دسته بندی:
                  <span className="text-zinc-700 mr-1">مد و پوشاک</span>
                </span>
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  دسته بندی:
                  <span className="text-zinc-700 mr-1">مد و پوشاک</span>
                </span>
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  دسته بندی:
                  <span className="text-zinc-700 mr-1">مد و پوشاک</span>
                </span>
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  دسته بندی:
                  <span className="text-zinc-700 mr-1">مد و پوشاک</span>
                </span>
              </div>
              <div className="mt-4 text-sm flex items-center gap-2 font-dana text-white child:w-[90px] child:h-[30px] child:flex child:justify-center child:items-center child:rounded-lg">
                <span className="bg-orange-300">غیر اصل</span>
                <span className="bg-blue-700">تحویل فوری</span>
              </div>
              <ul className="mt-4 text-gray-400 font-dana list-disc pr-5 grid grid-cols-2 gap-y-2">
                <li>
                  جنس:
                  <span className="text-zinc-700 mr-1">نخی</span>
                </li>
                <li>
                  جنس:
                  <span className="text-zinc-700 mr-1">نخی</span>
                </li>
                <li>
                  جنس:
                  <span className="text-zinc-700 mr-1">نخی</span>
                </li>
                <li>
                  جنس:
                  <span className="text-zinc-700 mr-1">نخی</span>
                </li>
              </ul>
              <div className="flex items-center gap-1 font-dana mt-4 py-1.5 sm:py-3 px-5 rounded-xl bg-teal-100 text-green-700 w-full sm:w-3/4 text-sm sm:text-base">
                <FaCalendarCheck size="0.95rem" />
                حداکثر زمان تحویل 4 روز می باشد.
              </div>
              <div className="mt-4 text-sm font-dana flex items-center gap-2 text-zinc-700">
                <PiWarningCircle size="4rem" />
                <p>
                  هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد
                  فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق
                  #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس
                  اینترنتی hmti.ir/06{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                  <div className="w-full font-danaBold text-zinc-700">
                    رنگ ها
                  </div>
                  <button className="transition-all hover:scale-90 size-[20px] rounded-full bg-teal-700"></button>
                  <button className="transition-all hover:scale-90 size-[20px] rounded-full bg-red-700"></button>
                  <button className="transition-all hover:scale-90 size-[20px] rounded-full bg-yellow-700"></button>
                  <button className="transition-all hover:scale-90 size-[20px] rounded-full bg-gray-700 outline outline-1 outline-offset-2"></button>
                </div>
                <div className="mt-4">
                  <div className="w-full font-danaBold text-zinc-700">
                    گارانتی
                  </div>
                  <select className="font-dana text-zinc-700 mt-1.5 w-full sm:w-3/4 outline-none border-gray-400 border-solid border py-1 px-2 rounded-lg">
                    <option value="alborz">گارانتی شرکت البرز</option>
                    <option value="alborz">گارانتی شرکت البرز</option>
                    <option value="alborz">گارانتی شرکت البرز</option>
                    <option value="alborz">گارانتی شرکت البرز</option>
                    <option value="alborz">گارانتی شرکت البرز</option>
                    <option value="alborz">گارانتی شرکت البرز</option>
                  </select>
                </div>
                <div className="mt-4">
                  <div className="sm:text-base text-sm flex items-center gap-1 font-dana mt-4 py-1.5 sm:py-3 px-5 rounded-xl bg-blue-100 text-blue-700 sm:w-3/4 w-full">
                    <FaStore size="0.95rem" />
                    موجودی انبار:
                    <span>44</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full font-danaBold text-zinc-700">قیمت</div>
                  <div className="font-dana flex items-center justify-between mt-2">
                    <span className="font-danaBold text-teal-600 w-full sm:w-max text-center">
                      {(800000).toLocaleString()} تومان
                    </span>
                    <span className="text-sm sm:inline hidden">
                      آخرین بروزرسانی قیمت: 4 مرداد
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-4 w-full">
                    <button className="font-dana text-gray-400 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-teal-600">
                      <FaShoppingCart />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-danaBold mb-8 border-solid border-b-2 border-orange-300 w-max pb-0.5">
              توضیحات
            </h2>
            <div className="product-desc">
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
              <h3>آیفون جدید؛ سروصدای جدید</h3>
              <img src={desc} alt="img" />
              <p>
                در ماه اکتبر 2020، اپل بازهم با تشریفات و سروصدای همیشگی نسل
                جدید آیفون را روانه بازار کرد تا بتواند بازار پررونقی برای سری
                گوشی‌های جدیدش دست‌وپا کند. خانواده جدید اپل امسال پرجمعیت‌تر از
                همیشه و با 4 عضو ظاهر شده است؛ iPhone 12، 12mini، 12pro و 12pro
                max. درست است که آیفون 12پرو در مقایسه با آیفون 12، قاب فولاد
                مستحکمی دارد و در حافظه و رنگ‌های بیشتری عرضه شده اما به‌جرئت
                می‌توان گفت اپل، پسوند pro را بیشتر به دلیل قابلیت‌های بیشتر
                دوربین به این گوشی چسبانده است. حسگر LiDAR و قابلیت زوم اپتیکال
                2برابر، دیگر ویژگی‌هایی هستند که نسخه پرو را متمایز کرده‌اند.
                البته اگر iPhone 11 Pro را هم در این مقایسه بگنجانیم، تفاوت‌ها
                خیلی بیشتر هم می‌شود؛ درست است که از LiDAR صحبت کردیم اما اجازه
                دهید صرفاً برای تأکید دوباره اسمی از این سنسور جدید ببریم.
                درکنار این سنسور، تراشه سریع‌تر، شبکه ارتباطی 5G، مقاومت بیشتر
                دربرابر ضربه، حالت شب بهتر دوربین، Dolby Vision برای ضبط ویدئو و
                فناوری جدید MagSafe هم در این محصول جدید دیده می‌شوند.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-danaBold mb-8 border-solid border-b-2 border-orange-300 w-max pb-0.5">
              نظرات
            </h2>
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                modules={[Navigation, A11y]}
                navigation
                loop={true}
                breakpoints={{
                  300: {
                    slidesPerView: 1.2,
                  },
                  370: {
                    slidesPerView: 1.4,
                  },
                  435: {
                    slidesPerView: 1.7,
                  },
                  515: {
                    slidesPerView: 2,
                  },
                  590: {
                    slidesPerView: 2.3,
                  },
                  768: {
                    slidesPerView: 2.4,
                  },
                  1024: {
                    slidesPerView: 3.2,
                  },
                  1280: {
                    slidesPerView: 4.3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="font-dana bg-gray-100 py-2 px-4 rounded-lg h-[150px]">
                    <div className="flex items-center justify-between">
                      <span className="font-danaBold text-xl">احمد</span>
                      <span className="font-dana text-sm">2 روز پیش</span>
                    </div>
                    <p className="line-clamp-4 mt-1.5 text-sm">
                      که با چند ویژگی جدید و دوربین چهارگانه روانه بازار شده
                      است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول
                      چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 Pro MAX
                      به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی
                      را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
                      دارد؛
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
