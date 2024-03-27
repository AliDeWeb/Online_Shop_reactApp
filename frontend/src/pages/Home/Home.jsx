import React from "react";

// Components
import {
  SectionsWrapper,
  ProductBox,
  LongBanner,
  CategoriesSection,
  WeblogBox,
  HeadSection,
  TopBrandsSection,
} from "../../configs/Layout/Layout";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <HeadSection />
      <CategoriesSection />
      <SectionsWrapper title={"جدیدترین ها"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
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
      </SectionsWrapper>
      <LongBanner />
      <SectionsWrapper title={"محبوب ترین ها"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
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
      </SectionsWrapper>
      <SectionsWrapper title={"برند های برگزیده"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            340: {
              slidesPerView: 2.6,
            },
            490: {
              slidesPerView: 3.8,
            },
            680: {
              slidesPerView: 4.2,
            },
            768: {
              slidesPerView: 5.4,
            },
            1024: {
              slidesPerView: 6.8,
            },
            1280: {
              slidesPerView: 7.6,
            },
            1536: {
              slidesPerView: 8.4,
            },
          }}
        >
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TopBrandsSection />
          </SwiperSlide>
        </Swiper>
      </SectionsWrapper>
      <SectionsWrapper title={"لپ تاپ"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
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
      </SectionsWrapper>
      <SectionsWrapper title={"پوشاک"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
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
      </SectionsWrapper>
      <SectionsWrapper title={"مقالات"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            350: {
              slidesPerView: 1.3,
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
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
          <SwiperSlide>
            <WeblogBox />
          </SwiperSlide>
        </Swiper>
      </SectionsWrapper>
    </main>
  );
}
