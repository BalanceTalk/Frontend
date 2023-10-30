import React from 'react';
import MainPage from './pages/MainPage.js';
import CreateGamePage from './pages/CreateGamePage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VoteGamePage from './pages/VoteGamePage.js';
import WarPage from './pages/WarPage.js';
import GameGridPage from './pages/GameGridPage.js';
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
        optionDescription: "머리에 물 묻히기 불가",
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


const DummyData1 = [
  {
    title: "내가 다음 생에 태어나게 된다면?",
    deadline: "2021-10-10",
    optionTitle1: "인간으로 태어나기",
    optionDescription1: "단, 국가좌표는 랜덤",
    optionImageUrl1: " ",
    optionTitle2: "부잣집 고양이로 태어나기",
    optionDescription2: "단, 종은 랜덤",
    optionImageUrl2: " ",
  },
];
const DummyVoteRate1 = [
  {
    voteRate1: "30%",
    voteRate2: "70%",
  },
];
const DummyComment1 = [
  {
    content: "인간이 좋아요",
    side: "1",
  },
  {
    content: "고양이가 더 좋아요",
    side: "2",
  },
];

const DummyData2 = [
  {
    title: "일주일 동안 한가지를 할 수 없다면?",
    deadline: "2023-11-10",
    optionTitle1: "일주일 머리 감기 불가",
    optionDescription1: "머리에 물 묻히기 불가",
    optionImageUrl1: " ",
    optionTitle2: "일주일 양치질 불가",
    optionDescription2: "물 마시기, 입 행구기는 가능",
    optionImageUrl2: " ",
  },
];
const DummyVoteRate2 = [
  {
    voteRate1: "43%",
    voteRate2: "57%",
  },
];
const DummyComment2 = [
  {
    content: "양치는 하고 살아라 얘들아",
    side: "1",
  },
  {
    content: "머리에 일주일동안 물도 못 묻히는게 맞냐",
    side: "2",
  },
  {
    content: "ㅇㅈ",
    side: "2",
  },
];

const DummyData3 = [
  {
    title: "똥을 먹어보자",
    deadline: "2023-11-10",
    optionTitle1: "똥 먹었는데 아무도 모르기",
    optionDescription1: "똥 100g 이상",
    optionImageUrl1: " ",
    optionTitle2: "똥 안 먹었는데 동네방네 소문나기",
    optionDescription2: "카톡, 인스타 친구 다 알게됨",
    optionImageUrl2: " ",
  },
];
const DummyVoteRate3 = [
  {
    voteRate1: "24%",
    voteRate2: "76%",
  },
];
const DummyComment3 = [
  {
    content: "똥을 왜 먹냐",
    side: "2",
  },
  {
    content: "많이들 드시고",
    side: "2",
  },
];


const DummyData4 = [
  {
    title: "돈이 좋아?, 일이 싫어?",
    deadline: "2023-11-10",
    optionTitle1: "월 200 백수",
    optionDescription1: "집에 하루종일 있어도 됨",
    optionImageUrl1: " ",
    optionTitle2: "월 500 직장인",
    optionDescription2: "9시 출근 6시 퇴근",
    optionImageUrl2: " ",
  },
];
const DummyVoteRate4 = [
  {
    voteRate1: "47%",
    voteRate2: "53%",
  },
];
const DummyComment4 = [
  {
    content: "집에만 있으면 뭐하냐",
    side: "2",
  },
  {
    content: "개꿀인데",
    side: "1",
  },
  {
    content: "시간 엄청 많은 백수가 낫지",
    side: "1",
  },
  {
    content: "500이면 차이 많이 나지 ㅇㅈ?",
    side: "1",
  },
];

const DummyData5 = [
  {
    title: "카레냐 똥이냐?",
    deadline: "2023-11-10",
    optionTitle1: "똥맛 카레",
    optionDescription1: "순수한 똥 맛",
    optionImageUrl1: " ",
    optionTitle2: "카레맛 똥",
    optionDescription2: "고씨네 카레 맛 근데 똥임",
    optionImageUrl2: " ",
  },
];
const DummyVoteRate5 = [
  {
    voteRate1: "50%",
    voteRate2: "50%",
  },
];
const DummyComment5 = [
  {
    content: "황밸이네 그래도 카레먹는게 낫지",
    side: "1",
  },
];

const side1 = [
  {
    side: "1",
  }
];

const side2 = [
  {
    side: "2",
  }
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
          <Route path="gamegrid"element={<GameGridPage></GameGridPage>}></Route>
          <Route path="war/1-1" element={<WarPage data={DummyData1} voteRate={DummyVoteRate1} com={DummyComment1} side={side1}></WarPage>}/>
          <Route path="war/2-1" element={<WarPage data={DummyData2} voteRate={DummyVoteRate2} com={DummyComment2} side={side1}></WarPage>}/>
          <Route path="war/3-1" element={<WarPage data={DummyData3} voteRate={DummyVoteRate3} com={DummyComment3} side={side1}></WarPage>}/>
          <Route path="war/4-1" element={<WarPage data={DummyData4} voteRate={DummyVoteRate4} com={DummyComment4} side={side1}></WarPage>}/>
          <Route path="war/5-1" element={<WarPage data={DummyData5} voteRate={DummyVoteRate5} com={DummyComment5} side={side1}></WarPage>}/>
          <Route path="war/1-2" element={<WarPage data={DummyData1} voteRate={DummyVoteRate1} com={DummyComment1} side={side2}></WarPage>}/>
          <Route path="war/2-2" element={<WarPage data={DummyData2} voteRate={DummyVoteRate2} com={DummyComment2} side={side2}></WarPage>}/>
          <Route path="war/3-2" element={<WarPage data={DummyData3} voteRate={DummyVoteRate3} com={DummyComment3} side={side2}></WarPage>}/>
          <Route path="war/4-2" element={<WarPage data={DummyData4} voteRate={DummyVoteRate4} com={DummyComment4} side={side2}></WarPage>}/>
          <Route path="war/5-2" element={<WarPage data={DummyData5} voteRate={DummyVoteRate5} com={DummyComment5} side={side2}></WarPage>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;