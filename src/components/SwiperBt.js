import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import BtSwiperData from "../data/btSwiperData.json";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const BtContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 500px;
  max-width: 2200px;
  margin: 0 auto;
  overflow: hidden;

  .bt-motion {
    position: relative;
    display: flex;
    margin: 0 auto;
    /* width: 1.63vw; */
    height: 5.27vw; /* 슬라이드의 높이를 조절 */
    align-items: center;
    justify-content: center;
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
