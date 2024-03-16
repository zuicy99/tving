import styled from "@emotion/styled";

export const BaysicWrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #000;
`;
export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  margin: 0 auto;
  .left-nav {
    display: flex;
    align-items: center;
  }
  a {
    color: #d9d9d9;
    font-size: 21px;
    padding-right: 30px;
  }
  a :hover {
    color: #fff;
    /* color: black; */
  }
  aside {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  aside img {
    width: 35px;
  }

  @media screen and (max-width: 1724px) {
    a {
      font-size: 18px;
    }
    a img {
    }
    aside img {
      width: 32px;
    }
  }
  // 테블릿
  @media screen and (max-width: 1024px) {
    a {
      font-size: 15px;
    }
    a img {
      width: 26px;
    }
    aside img {
      width: 26px;
    }
  }
  // 모바일
  @media screen and (max-width: 767px) {
    a {
      font-size: 13px;
    }
    aside img {
      width: 22px;
    }
  }
`;
