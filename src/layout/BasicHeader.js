import React from "react";
import { Wrap } from "../styles/basic";
import { Header } from "antd/es/layout/layout";
import styled from "@emotion/styled";
import { IoSearchOutline } from "react-icons/io5";
import { BaysicWrap, HeaderNav, HeaderWrap } from "./style/BaysicCss";

const BasicHeader = () => {
  return (
    <BaysicWrap>
      <HeaderNav>
        <div className="left-nav">
          <a href="">
            <img src="images/logo.svg" />
          </a>
          <a href="">
            <div>시리즈</div>
          </a>
          <a href="">
            <div>영화</div>
          </a>
          <a href="">
            <div>라이브</div>
          </a>
          <a href="">
            <div>파라마운트</div>
          </a>
        </div>

        <aside>
          <a href="" style={{ fontSize: "30px", paddingTop: "5px" }}>
            <IoSearchOutline />
          </a>
          <a href="">
            <img src="images/usericon.png" />
          </a>
        </aside>
      </HeaderNav>
    </BaysicWrap>
  );
};

export default BasicHeader;
