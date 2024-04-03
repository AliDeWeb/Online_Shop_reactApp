import React, { useEffect, useState } from "react";

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

// Axios
import { getMainPageData, apiUrl } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

export default function Home() {
  useEffect(() => {
    document.title = "تیمچه - صفحه اصلی";
  }, []);

  const { data, isLoading } = useQuery(`mainPageData`, async () => {
    let mainData = await getMainPageData();

    return mainData.data.sections;
  });

  useEffect(() => {
    console.log(data);
  });

  return (
    <main>
      <HeadSection
        banners={
          !isLoading &&
          (window.innerWidth >= 1024
            ? data.slider1.slidersOne.desktopBanners
            : data.slider1.slidersOne.phoneBanners)
        }
      />
      <CategoriesSection
        categories={!isLoading && data.categories.categories}
      />
      <SectionsWrapper title={!isLoading && data?.slider2?.title}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 5000,
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
          {!isLoading &&
            data?.slider2?.discountedProducts?.map((el) => (
              <SwiperSlide key={el.href}>
                <ProductBox
                  cover={`${apiUrl}/${el.covers[0]}`}
                  title={el.title}
                  href={`product/${el.href}`}
                  discounted={
                    el.off
                      ? el.off
                      : el.colors[0]
                      ? el.colors[0]?.off
                      : el.sizes[0].off
                      ? el.sizes[0].off
                      : 0
                  }
                  price={
                    el.mainPrice
                      ? el.mainPrice
                      : el.colors[0]
                      ? el.colors[0]?.price
                      : el.sizes[0].price
                      ? el.sizes[0].price
                      : 0
                  }
                  num={12}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
      <LongBanner />
      <SectionsWrapper title={!isLoading && data?.slider3?.title}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 5000,
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
          {!isLoading &&
            data?.slider3?.popularProductsForMainPage?.map((el) => (
              <SwiperSlide key={el.href}>
                <ProductBox
                  cover={`${apiUrl}/${el.covers[0]}`}
                  title={el.title}
                  href={`product/${el.href}`}
                  discounted={
                    el.off
                      ? el.off
                      : el.colors[0]
                      ? el.colors[0]?.off
                      : el.sizes[0].off
                      ? el.sizes[0].off
                      : 0
                  }
                  price={
                    el.mainPrice
                      ? el.mainPrice
                      : el.colors[0]
                      ? el.colors[0]?.price
                      : el.sizes[0].price
                      ? el.sizes[0].price
                      : 0
                  }
                  num={12}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
      <SectionsWrapper title={!isLoading && data?.brands?.title}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 5000,
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
          {!isLoading &&
            data?.brands?.brands?.map((el) => (
              <SwiperSlide key={el._id}>
                <TopBrandsSection img={`${apiUrl}/${el.cover}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
      <SectionsWrapper title={!isLoading && data?.slider4?.title}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 5000,
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
          {!isLoading &&
            data?.slider4?.resultSellProducts?.map((el) => (
              <SwiperSlide key={el.href}>
                <ProductBox
                  cover={`${apiUrl}/${el.covers[0]}`}
                  title={el.title}
                  href={`product/${el.href}`}
                  discounted={
                    el.off
                      ? el.off
                      : el.colors[0]
                      ? el.colors[0]?.off
                      : el.sizes[0].off
                      ? el.sizes[0].off
                      : 0
                  }
                  price={
                    el.mainPrice
                      ? el.mainPrice
                      : el.colors[0]
                      ? el.colors[0]?.price
                      : el.sizes[0].price
                      ? el.sizes[0].price
                      : 0
                  }
                  num={12}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
      <SectionsWrapper className="hidden lg:block" title={"مقالات"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Autoplay, A11y]}
          navigation
          autoplay={{
            delay: 5000,
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
