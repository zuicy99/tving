import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";

import HeaderSwiperData from "../data/headerSwiperData.json";
import { HeaderContiner } from "../styles/swiper/headerSwiperCss";

const SwiperHeader = () => {
  return (
    <HeaderContiner>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-haeder"
      >
        {HeaderSwiperData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link}>
              <img
                className="header-Swiper-main"
                src={slide.imageSrc}
                style={{ borderRadius: "10px" }}
                alt={slide.title}
              />
              <div className="header-Swiper-title">
                {slide.tag === 1 && (
                  <svg
                    viewBox="0 0 93 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.321 4.471v7.039c0 2.833-1.507 4.487-4.189 4.487-2.682 0-4.14-1.657-4.14-4.487V4.47c0-2.817 1.474-4.471 4.14-4.471 2.666 0 4.189 1.658 4.189 4.471zm-2.798-.462c0-.977-.53-1.606-1.343-1.606-.812 0-1.39.63-1.39 1.606v7.982c0 .977.562 1.607 1.374 1.607.813 0 1.36-.63 1.36-1.607V4.01zM41.14 15.817l-1.16-5.432h-1.805v5.432h-2.766V.167h4.14c2.519 0 4.026 1.375 4.026 4.025v1.937c0 1.391-.53 2.451-1.244 3.113l1.59 6.575H41.14zm-2.053-7.751c1.076 0 1.674-.597 1.674-1.821v-1.89c0-1.207-.614-1.82-1.674-1.82h-.877v5.531h.877zM48.374.167v15.65h-2.766V.167h2.766zM53.523 16c-1.706-.016-3.065-1.323-3.065-3.777V4.47C50.459 1.638 51.934 0 54.668 0c2.733 0 4.04 1.474 4.04 3.778v2.088h-2.75V3.993c0-1.144-.53-1.59-1.322-1.59-.794 0-1.375.63-1.375 1.59v7.998c0 1.144.578 1.607 1.358 1.607.781 0 1.375-.646 1.375-1.49V9.671h-1.39V7.385h4.108v8.43h-2.303l-.2-1.26h-.199c-.43 1.076-1.243 1.458-2.483 1.442l-.003.003zM63.494.167v15.65h-2.766V.167h2.766zM71.393 4.587V.167h2.618v15.65h-2.718L68.46 6.36h-.148l.1 3.563v5.897h-2.634V.167h3.032l2.519 8.43h.167l-.1-4.01h-.003zM81.743 12.589l-3.296-.032-.498 3.263H75.1L78.098.167h4.073l2.949 15.65h-2.897l-.482-3.228h.003zm-.363-2.367l-.713-4.755-.482-2.817h-.183l-.463 2.817-.729 4.755h2.57zM92.607 13.45v2.367h-6.428V.167h2.766V13.45h3.662z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M14.144.167l-3.341 10.382c-.1.309-.556.238-.556-.087V.167H0v4.67h4.95v10.98h9.73L19.97.167h-5.826z"
                      fill="#FF153C"
                    ></path>
                  </svg>
                )}

                <div className="image-wrapper">
                  <img src={slide.titleImageSrc} alt={slide.title} />
                  <div className="title-info">
                    <p>{slide.subtitle1}</p>
                    <p>{slide.subtitle2}</p>
                  </div>
                </div>
              </div>
              {/* 추가적인 정보가 필요하다면 여기에 추가할 수 있습니다. */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeaderContiner>
  );
};

export default SwiperHeader;
