import React, { Children } from "react";
import BasicHeader from "./BasicHeader";
import styled from "@emotion/styled";
import BasicFooter from "./BasicFooter";

const BasicLayout = ({ children }) => {
  //   const Warp = styled.div`
  //     max-width: 1280px;
  //     background: darkblue;
  //     height: 500px;
  //   `;

  return (
    <div>
      <header>
        <BasicHeader />
      </header>
      <main>{children}</main>
      <footer>
        <BasicFooter />
      </footer>
    </div>
  );
};

export default BasicLayout;
