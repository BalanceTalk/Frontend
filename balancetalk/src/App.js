import React from 'react';
import MainPage from './pages/MainPage.js';
import CreateGamePage from './pages/CreateGamePage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VoteGamePage from './pages/VoteGamePage.js';
import WarPage from './pages/WarPage.js';
// npm install react-icons --save
// npm install react-router-dom
// npm install @emotion/styled

const gameData1 = [
  {
    gameTitle: "내가 다음 생에 태어나게 된다면?",
    options: [
      {
        optionTitle: "인간으로 태어나기",
        optionDescription: "단, 국가좌표는 랜덤",
        optionImage: " ",
      },
      {
        optionTitle: "부잣집 고양이로 태어나기",
        optionDescription: "단, 종은 랜덤",
        optionImage: " ",
      },
    ],
  },
];

const gameData2 = [
  {
    gameTitle: "일주일 동안 한가지를 할 수 없다면?",
    options: [
      {
        optionTitle: "일주일 머리 감기 불가",
        optionDescription: "머리에 물 뭍이기 불가",
        optionImage: " ",
      },
      {
        optionTitle: "일주일 양치질 불가",
        optionDescription: "물 마시기, 입 행구기는 가능",
        optionImage: " ",
      },
    ],
  },
];

const gameData3 = [
  {
    gameTitle: "똥을 먹어보자",
    options: [
      {
        optionTitle: "똥 먹었는데 아무도 모르기",
        optionDescription: "똥 100g 이상",
        optionImage: " ",
      },
      {
        optionTitle: "똥 안 먹었는데 동네방네 소문나기",
        optionDescription: "카톡, 인스타 친구 다 알게됨",
        optionImage: " ",
      },
    ],
  },
];

const gameData4 = [
  {
    gameTitle: "돈이 좋아?, 일이 싫어?",
    options: [
      {
        optionTitle: "월 200 백수",
        optionDescription: "집에 하루종일 있어도 됨",
        optionImage: " ",
      },
      {
        optionTitle: "월 500 직장인",
        optionDescription: "9시 출근 6시 퇴근",
        optionImage: " ",
      },
    ],
  },
];

const gameData5 = [
  {
    gameTitle: "카레냐 똥이냐?",
    options: [
      {
        optionTitle: "똥맛 카레",
        optionDescription: "순수한 똥 맛",
        optionImage: " ",
      },
      {
        optionTitle: "카레맛 똥",
        optionDescription: "고씨네 카레 맛 근데 똥임",
        optionImage: " ",
      },
    ],
  },
];




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="new" element={<CreateGamePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="vote/" element={<VoteGamePage></VoteGamePage>} />
          <Route path="vote/1" element={<VoteGamePage data={gameData1}></VoteGamePage>} />
          <Route path="vote/2" element={<VoteGamePage data={gameData2}></VoteGamePage>} />
          <Route path="vote/3" element={<VoteGamePage data={gameData3}></VoteGamePage>} />
          <Route path="vote/4" element={<VoteGamePage data={gameData4}></VoteGamePage>} />
          <Route path="vote/5" element={<VoteGamePage data={gameData5}></VoteGamePage>} />
          <Route path="war" element={<WarPage></WarPage>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;