import styled from "@emotion/styled";

export const Continer = styled.div`
  .swiper-haeder {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    position: relative;
    left: 42%;
    top: -30px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    color: #fff;
  }
  .header-Swiper-title {
    position: absolute;
    top: 60%; /* 원하는 위치로 조절 */
    left: 2%;
    text-align: left;
    svg {
      width: 5.07vw;
      height: auto;
      margin-bottom: 10px;
    }
    img {
      width: 23.07vw;
    }
    .title-info {
      padding-top: 20px;
    }
    p {
      color: #fff;
      font-size: 1.3vw;
    }
  }
`;
