import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import styled from "@emotion/styled";
const SwiperHeader = () => {
  const swiperNavPreRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const Continer = styled.div`
    width: 100%;
    .swiper-pagination {
      height: 10px;
      position: absolute;
      bottom: 40px;
      left: -100px;
      display: flex;
      justify-content: flex-end;
      z-index: 1;
      font-size: 24px;
    }
    .swiper-pagination-bullet-active,
    .swiper-pagination-bullet {
      width: 0.4vw;
      height: 0.4vw;
      border-radius: 0.5rem;
      background-color: #dad9d9 !important;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #dad9d9;
    }
  `;

  return (
    <Continer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        effect="fade"
        slidesPerView={1.1}
        spaceBetween={20}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesOffsetBefore={1} // 현재 슬라이드 이전에 보이는 슬라이드 수
        slidesOffsetAfter={1} // 현재 슬라이드 다음에 보이는 슬라이드 수
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onMouseOver={() => {
          swiperNavPreRef.current.style.visibility = "visible";
          swiperNavNextRef.current.style.visibility = "visible";
        }}
        onMouseOut={() => {
          swiperNavPreRef.current.style.visibility = "hidden";
          swiperNavNextRef.current.style.visibility = "hidden";
        }}
      >
        <SwiperSlide>
          <img src="images/m1.webp" style={{ borderRadius: "10px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/m2.webp" style={{ borderRadius: "10px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/m3.webp" style={{ borderRadius: "10px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/m4.webp" style={{ borderRadius: "10px" }} />
        </SwiperSlide>
        ...
      </Swiper>
    </Continer>
  );
};

export default SwiperHeader;
