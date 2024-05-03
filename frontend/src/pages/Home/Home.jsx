import { useEffect } from "react";

// Components
import {
  CategoriesSection,
  HeadSection,
  LongBanner,
  ProductBox,
  SectionsWrapper,
  TopBrandsSection,
} from "../../configs/Layout/Layout";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Axios
import { apiUrl, getMainPageData } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function Home() {
  const { userToken } = useUserToken();
  useEffect(() => {
    document.title = "تیمچه - صفحه اصلی";
    document.documentElement.scrollTop = 0;
  }, []);

  const { data, isLoading, refetch } = useQuery(
    `mainPageData`,
    async () => {
      let mainData = await getMainPageData({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(mainData.data.sections);
      return mainData.data.sections;
    },
    {
      refetchInterval: 60000,
      onError: () => {
        refetch();
      },
    }
  );

  return (
    <main>
      <HeadSection
        banners={
          !isLoading &&
          (window.innerWidth >= 1024
            ? data?.slider1?.slidersOne[0]?.desktopBanners
            : data?.slider1?.slidersOne[0]?.phoneBanners)
        }
      />
      <CategoriesSection
        categories={!isLoading && data?.categories?.categories}
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
              slidesPerView: 5.2,
            },
          }}
        >
          {!isLoading &&
            data?.slider2?.discountedProducts?.map((el) => (
              <SwiperSlide key={el.href} className="px-1">
                <ProductBox
                  id={el?._id}
                  warranty={el?.warranty[0]?.warrantyItem}
                  colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                  sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
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
                  num={el.Availability}
                  averageScore={el.averageScore}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
      {!isLoading && !!data?.slider6?.suggestedProducts?.length && (
        <SectionsWrapper title={!isLoading && data?.slider6?.title}>
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
                slidesPerView: 5.2,
              },
            }}
          >
            {!isLoading &&
              data?.slider6?.suggestedProducts?.map((el) => (
                <SwiperSlide key={el.href} className="px-1">
                  <ProductBox
                    id={el?._id}
                    warranty={el?.warranty[0]?.warrantyItem}
                    colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                    sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
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
                    num={el.Availability}
                    averageScore={el.averageScore}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </SectionsWrapper>
      )}

      <LongBanner
        banners={!isLoading && data?.slider1?.slidersOne[1]?.covers}
      />
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
              slidesPerView: 5.2,
            },
          }}
        >
          {!isLoading &&
            data?.slider3?.popularProductsForMainPage?.map((el) => (
              <SwiperSlide key={el.href} className="px-1">
                <ProductBox
                  id={el?._id}
                  warranty={el?.warranty[0]?.warrantyItem}
                  colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                  sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
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
                  num={el.Availability}
                  averageScore={el.averageScore}
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
                <TopBrandsSection
                  href={`/search/${el.href}`}
                  img={`${apiUrl}/${el.cover}`}
                />
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
              slidesPerView: 5.2,
            },
          }}
        >
          {!isLoading &&
            data?.slider4?.resultSellProducts?.map((el) => (
              <SwiperSlide key={el.href} className="px-1">
                <ProductBox
                  id={el?._id}
                  warranty={el?.warranty[0]?.warrantyItem}
                  colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                  sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
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
                  num={el.Availability}
                  averageScore={el.averageScore}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionsWrapper>
    </main>
  );
}
