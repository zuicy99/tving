import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import Intro from "./pages/intro/Intro";
import Main from "./pages/main/Main";
import BasicLayout from "./layout/BasicLayout";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <Wrap max={2200}>
      {/* <BasicLayout> */}
      <Routes>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/" element={<TestPage />}></Route>
        {/* <Route path="/" element={<Main />}></Route> */}
        <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
      </Routes>
      {/* </BasicLayout> */}
    </Wrap>
  );
};

export default App;
