import React from "react";
import SwiperHeader from "../../components/SwiperHeader";
import { BaysicWrap } from "../../layout/style/BaysicCss";
import SwiperBt from "../../components/SwiperBt";

const Main = () => {
  return (
    <BaysicWrap>
      <SwiperHeader />
      <div style={{ width: "1024px", background: "green", overflow: "hidden" }}>
        <SwiperBt />
      </div>
    </BaysicWrap>
  );
};

export default Main;
