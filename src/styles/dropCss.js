import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none; // 기본적으로 숨김
  position: absolute;
  background-color: #262626;
  min-width: 300px;
  right: 20%;
  top: calc(100% + 19px);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border: 1px solid #4d4d4d;
  &::before {
    content: "";
    position: absolute;
    top: -3em; /* 드롭다운 위로 1em만큼 이동 */
    left: -1em; /* 드롭다운 왼쪽으로 1em만큼 이동 */
    right: -1em; /* 드롭다운 오른쪽으로 1em만큼 이동 */
    bottom: -1em; /* 드롭다운 아래로 1em만큼 이동 */
    background-color: transparent; /* 배경색은 투명 */
    z-index: -1; /* 의사 요소가 드롭다운 콘텐츠 내부 요소보다 뒤에 있도록 설정 */
  }

  .profile {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px;
    gap: 25px;
    img {
      width: 60px;
    }
    p {
      font-size: 20px;
      font-weight: 700;
      color: #e1e1e1;
    }
    .profile-a {
      font-size: 15px;
      cursor: pointer;
      color: #9e9e9e;
    }

    .profile-a:hover {
      cursor: pointer;
      color: #e1e1e1;
    }
  }
`;

export const DropdownButton = styled.button`
  position: relative;
  background-image: url("images/usericon.png"); /* 이미지 경로 수정 */
  background-size: cover;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  overflow: visible; /* 의사 요소가 버튼을 벗어나도록 허용 */

  /* 의사 요소로 버튼의 전체 영역을 확장 */
  &::before {
    content: "";
    position: absolute;
    top: -1em; /* 버튼 위로 1em만큼 이동 */
    left: -1em; /* 버튼 왼쪽으로 1em만큼 이동 */
    right: -1em; /* 버튼 오른쪽으로 1em만큼 이동 */
    bottom: -1em; /* 버튼 아래로 1em만큼 이동 */
    background-color: transparent; /* 배경색은 투명 */
    z-index: -1; /* 의사 요소가 버튼보다 뒤에 있도록 설정 */
  }
`;

export const ItemBack = styled.div`
  padding: 20px 0 20px 0;
  border-top: 1px solid #2e2e2e;
  .drop-item {
    color: 99ee9e;
    padding: 12px 30px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #2e2e2e;
      color: #e1e1e1;
    }
  }
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #2e2e2e;
  }
`;
