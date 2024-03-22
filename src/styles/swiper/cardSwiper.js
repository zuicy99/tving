import styled from "@emotion/styled";

export const CardContainer = styled.div`
  position: relative;
  /* display: flex; */
  align-items: center;
  height: 400px;
  max-width: 2200px;
  margin: 0 auto;
  overflow: hidden;
  p {
    color: #fff;
    font-size: 1.3vw;
  }

  .bt-motion {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 20px;
    height: 14.27vw; /* 슬라이드의 높이를 조절 */
    align-items: center;
    justify-content: center;
    background-color: gray;
    background-image: linear-gradient(180deg, rgba(38, 38, 38, 0), #191919);
    background-size: cover;
    transition: filter 0.2s, transform 0.2s ease-in-out;
    border-radius: 10px;
    transform: translateY(0);
    img {
      width: 4.33vw;
      height: auto;
    }
  }
  .bt-motion:hover {
    z-index: 9999;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.2));
    transform: translateY(-15px);
  }
`;
