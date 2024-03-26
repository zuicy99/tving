import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import BtSwiperData from "../data/btSwiperData.json";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const BtContainer = styled.div`
  /* overflow: hidden; */
  overflow: hidden;

  .swiper-bt-wrap {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    /* height: 500px; */
    margin: 0 auto;
    padding: 65px;
    .swiper-button-prev::after,
    .swiper-button-next::after {
      color: #fff;
    }
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
    }
  }
  .bt-motion {
    position: relative;
    height: 5.27vw;
    display: flex; /* 이미지를 수직 중앙 정렬하기 위해 추가 */
    align-items: center; /* 이미지를 수직 중앙 정렬하기 위해 추가 */
    justify-content: center; /* 이미지를 수평 중앙 정렬하기 위해 추가 */
    background-color: gray;
    background-image: linear-gradient(180deg, rgba(38, 38, 38, 0), #191919);
    background-size: cover;
    transition: filter 0.2s, transform 0.2s ease-in-out;
    border-radius: 10px;
    transform: translateY(0);

    img {
      width: 8.33vw;
      height: auto;
    }
  }
  .bt-motion:hover {
    z-index: 9999;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.2));
    transform: translateY(-15px);
  }
`;

const SwiperBt = () => {
  return (
    <BtContainer>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        pagination={{ clickable: true }}
        className="swiper-main-bt"
        style={{ overflow: "visible", width: "100%" }}
      >
        {BtSwiperData.map((slide, index) => (
          <SwiperSlide key={index} className="bt-motion">
            <div>
              <Link to={slide.link}>
                <img
                  src={slide.imageSrc}
                  style={{ borderRadius: "10px" }}
                  alt={slide.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </BtContainer>
  );
};

export default SwiperBt;
