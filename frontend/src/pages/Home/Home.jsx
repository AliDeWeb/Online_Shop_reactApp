import React from "react";

// Components
import { ProductsSections, ProductBox } from "../../configs/Layout/Layout";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <ProductsSections title={"جدیدترین ها"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, A11y]}
          navigation
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.2,
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
            640: {
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
            1536: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
        </Swiper>
      </ProductsSections>
      <ProductsSections title={"محبوب ترین ها"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, A11y]}
          navigation
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.2,
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
            640: {
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
            1536: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
        </Swiper>
      </ProductsSections>
    </main>
  );
}
