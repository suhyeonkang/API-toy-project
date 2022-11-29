import React from "react";
import {Route, Routes} from "react-router-dom";

import Header from "./components/header";
import Intro from "./components/intro";
import MainPage from "./components/mainPage";
import RankingModal from "./components/rankingModal";

function App() {
  return (
    <>
    <Header></Header>
    {/* <FirstPage></FirstPage> */}
    <Routes>
      <Route path="/" element={<Intro></Intro>} />
      <Route path="/main" element={<MainPage></MainPage>}/>
      <Route path="/result" element={<RankingModal></RankingModal>}/>
    </Routes>
    </>
  )
}

export default App;
