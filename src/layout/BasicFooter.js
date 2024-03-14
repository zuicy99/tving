import React from "react";

import { IoSearchOutline } from "react-icons/io5";
import { BaysicWrap, HeaderNav } from "./style/BaysicCss";
import styled from "@emotion/styled";
import { CiInstagram } from "react-icons/ci";
import {
  FaFacebookF,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const BasicFooter = () => {
  const FooterNav = styled.div`
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
  return (
    <BaysicWrap>
      <FooterNav>
        <div className="foterdd">
          <div className="left-nav">
            <span>
              <a href="">고객센터</a>
            </span>
            <span>
              <a href="">이용약관</a>
            </span>
            <span>
              <a href="" style={{ fontWeight: "bold" }}>
                개인정보처리방침
              </a>
            </span>
            <span>
              <a href="">청소년 보호정책</a>
            </span>
            <span>
              <a href="">법적고지</a>
            </span>
            <span>
              <a href="">이벤트</a>
            </span>
            <span>
              <a href="">인재채용</a>
            </span>
            <span>
              <a href="">티빙을 만드는 사람들</a>
            </span>
          </div>

          <aside>
            <span>
              <a href="">브랜드 바로가기+</a>
            </span>
            <span
              style={{
                color: "#a3a3a3",
                fontSize: "17px",
                paddingRight: "30px",
              }}
            >
              |
            </span>
            <span>
              <a href="">계열사 브랜드 바로가기+</a>
            </span>
          </aside>
        </div>

        <div className="copyright-box">
          <p>
            <span>대표이사:김주영</span>
            <span>
              <a href="">사업자정보확인</a>
            </span>
            <span>사업자등록번호 : 000-00-00000</span>
            <span>통신판매신고번호 : 0000-00-00000</span>
          </p>
          <p>
            <span>사업장 : 대구광역시 중구</span>
            <span>호스팅사업자 : 김주영(주)</span>
          </p>
          <p>
            <span>고객센터(24시간)</span>
            <span>
              <a href="">1:1 게시판 문의</a>
            </span>
            <span>대표메일: juyoung2211@naver.com</span>
            <span>전화번호: 010-노션</span>
          </p>
          <p>
            <span>
              ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
            </span>
            <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
          </p>
        </div>
        <div className="sns-bt">
          <a href="">
            <FaYoutube
              style={{
                color: "white",
                fontSize: "27px",
              }}
            />
          </a>
          <a href="">
            <CiInstagram
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </a>

          <a href="">
            <FaTwitter
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </a>
          <a href="">
            <FaFacebookF
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </a>
        </div>
      </FooterNav>
    </BaysicWrap>
  );
};

export default BasicFooter;
