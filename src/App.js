import React from "react";
import {Route, Routes} from "react-router-dom";

import Header from "./components/header";
import Intro from "./components/intro";
import MainPage from "./components/mainPage";

function App() {
  return (
    <>
    <Header></Header>
    {/* <FirstPage></FirstPage> */}
    <Routes>
      <Route path="/" element={<Intro></Intro>} />
      <Route path="/main" element={<MainPage></MainPage>}/>
    </Routes>
    </>
  )
}

export default App;
