import styled from "@emotion/styled";

export const BaysicWrap = styled.div`
  position: relative;
  /* max-width: 1920px; */
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
    font-size: 18px;
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
    width: 33px;
  }
`;
