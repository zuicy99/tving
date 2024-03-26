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
  width: 93%;
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
  .right-nav {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .right-nav img {
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

export const FooterInfo = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  margin: 0 auto;
  border-top: 0.083rem solid rgb(33, 33, 33);

  .foterdd {
    display: flex;
    justify-content: space-between;
    height: 71px;
  }
  .left-nav {
    display: flex;
    align-items: center;
    a {
      color: #a3a3a3;
      font-size: 17px;
      padding-right: 30px;
      transition: color 0.3s;
    }
    a:hover {
      color: #ffffff;
    }
  }
  aside {
    align-items: center;
    display: flex;
    a {
      color: #a3a3a3;
      font-size: 17px;
      padding-right: 30px;
      transition: color 0.3s;
    }
    a:hover {
      color: #ffffff;
    }
  }

  .copyright-box {
    padding-bottom: 25px;
    span {
      position: relative;
      color: #6e6e6e;
      font-size: 14px;
      padding: 0 6px;
      &:last-child::after {
        content: none;
      }
    }

    span::after {
      content: "|";
      position: absolute;
      right: 0;
    }

    a {
      color: #6e6e6e;
      font-size: 14px;
      text-decoration: underline;
    }
  }

  .sns-bt {
    display: flex;

    a {
      margin-right: 10px;
      height: 40px;
      width: 40px;
      background: gray;
      border-radius: 50%; /* 반지름이 이미지 영역의 절반인 50%로 설정하여 동그란 원을 만듭니다. */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
