// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React Router
import { Link } from "react-router-dom";

import { apiUrl } from "../../configs/axios/axiosConfigs";

export default function HeadSection({ banners }) {
  return (
    <div className="py-5">
      <div className={`${window.innerWidth < 1024 && "container"}`}>
        <div>
          <div>
            <Swiper
              spaceBetween={20}
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
              {banners &&
                banners.map((el) => (
                  <SwiperSlide key={Math.random()}>
                    <div className="h-full">
                      <Link className="h-full">
                        <img
                          className="rounded-lg object-cover active:cursor-grabbing"
                          src={`${apiUrl}/${el}`}
                          alt="banner"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
