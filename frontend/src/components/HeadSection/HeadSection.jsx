import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import { ProductBox } from "../../configs/Layout/Layout";

// React Router
import { Link } from "react-router-dom";

// Img
import banner1 from "../../assets/imgs/banner1.jpg";
import banner2 from "../../assets/imgs/banner2.jpg";

export default function HeadSection() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-rows-1 grid-cols-4 gap-x-4">
          <div className="col-span-4 lg:col-span-3">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, Navigation, Pagination, A11y]}
              pagination={{ clickable: true }}
              navigation
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner1}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:h-[380px]">
                  <Link>
                    <img
                      loading="lazy"
                      className="rounded-lg"
                      src={banner2}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden lg:block lg:col-span-1 lg:h-[400px]">
            <Swiper
              slidesPerView={1}
              modules={[Navigation, Autoplay, A11y]}
              navigation
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
              }}
              loop={true}
            >
              <SwiperSlide>
                <ProductBox discounted={60} price={700000} num={14} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
