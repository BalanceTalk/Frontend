import React from "react";
import Header from "../components/Header.js";
import Search from "../components/Search.js";
import ListHeader from "../components/ListHeader.js";
import BalanceList from "../components/BalanceList.js";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 400px;
  margin: 30px;
  margin-top: 40px;
  height: 300px;
  background-color: #ebebf6;
  justfy-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const ListForm = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  margin: auto auto;
  //background-color: darkgray;
`;

function MainPage() {
  return (
    <div>
      <Header newTag={true} />
      <Search />
      <div
        style={{ display: "flex", margin: "auto", justifyContent: "center" }}
      >
        <div>
          <Form>
            <ListHeader title="인기 게임" />
            <ListForm>
              <BalanceList data={data1} />
            </ListForm>
          </Form>
          <Form>
            <ListHeader title="최신 게임" />
            <ListForm>
              <BalanceList data={data2} />
            </ListForm>
          </Form>
          <Form>
            <ListHeader title="이번주 핫했던 게임" />
            <ListForm>
              <BalanceList data={data3} />
            </ListForm>
          </Form>
        </div>
        <div>
          <Form>
            <ListHeader title="10대 인기순" />
            <ListForm>
              <BalanceList data={data4} />
            </ListForm>
          </Form>
          <Form>
            <ListHeader title="20대 인기순" />
            <ListForm>
              <BalanceList data={data5} />
            </ListForm>
          </Form>
          <Form>
            <ListHeader title="대전 인기순" />
            <ListForm>
              <BalanceList data={data6} />
            </ListForm>
          </Form>
        </div>
      </div>
    </div>
  );
}

const data1 = [
  {
    title: "인간으로 태어나기 vs 부잣집 고양이로 태어나기",
    playerCount: 516,
    likes: 152,
  },
  {
    title: "일주일 머리 감기 불가 vs 일주일 양치질 불가",
    playerCount: 516,
    likes: 152,
  },
  {
    title: "똥 먹었는데 아무도 모르기 vs 똥 안 먹었는데 동네방네 소문나기",
    playerCount: 516,
    likes: 152,
  },
  { title: "월 200 백수 vs 월 500 직장인", playerCount: 330, likes: 181 },
  { title: "똥맛 카레 vs 카레맛 똥", playerCount: 330, likes: 181 },
];

const data2 = [
  {
    title: "평생 떡볶이만 먹기 vs 평생 떡볶이 안먹기",
    playerCount: 330,
    likes: 181,
  },
  {
    title: "매일 소음 공해 당하기 vs 매일 송해 고음 당하기",
    playerCount: 1500,
    likes: 480,
  },
  {
    title: "콧구멍에 빨대 꽂기 vs 똥구멍에 빨대 꽂기",
    playerCount: 1232,
    likes: 377,
  },

  {
    title: "병장으로 군대 2년 vs 이등병으로 군대 1년",
    playerCount: 1500,
    likes: 480,
  },
  {
    title: "웃고 싶을 때 못 웃음 vs 울고 싶을 때 못 울음",
    playerCount: 1232,
    likes: 377,
  },
];

const data3 = [
  {
    title: "머리 아픔 vs 배 아픔",
    playerCount: 516,
    likes: 152,
  },
  {
    title: "팔만대장경 다 읽기 vs 대장내시경 팔만번 하기",
    playerCount: 1500,
    likes: 480,
  },
  {
    title: "머리 5일 안감기 vs 세수 5일 안하기",
    playerCount: 1232,
    likes: 377,
  },
  {
    title: "손톱 옆 거스름 뜯다 찢어짐 vs 음식 먹다가 볼 안쪽 깨묾",
    playerCount: 1041,
    likes: 321,
  },
  {
    title: "1년 동안 전자기기 없이 살기 vs 1년 동안 친구 없이 살기",
    playerCount: 516,
    likes: 152,
  },
];

const data4 = [
  {
    title: "배터리 5% 데이터 가능 vs 배터리 100% 데이터, 와이파이 불가",
    playerCount: 330,
    likes: 181,
  },
  { title: "토맛 토마토 vs 토마토맛 토", playerCount: 1500, likes: 480 },
  {
    title:
      "따뜻하고 치즈 듬뿍 들어간 고급피자 끝부분 vs 차갑게 식어버린 그냥 피자",
    playerCount: 1232,
    likes: 377,
  },
  {
    title: "재미없는 비행기 1시간 vs 재밌는 비행기 10시간",
    playerCount: 1041,
    likes: 321,
  },
  { title: "민트초코 라면 vs 초콜렛 라면", playerCount: 1041, likes: 321 },
];

const data5 = [
  {
    title: "1년간 핸드폰 안 하면 1억 vs 그냥 돈 안 받고 핸드폰 사용",
    playerCount: 330,
    likes: 181,
  },
  {
    title: "사막에서 길 잃기 vs 북극에서 길 잃기",
    playerCount: 1500,
    likes: 480,
  },
  {
    title: "자도 자도 피곤 vs 먹어도 먹어도 배고픔",
    playerCount: 1232,
    likes: 377,
  },
  {
    title: "예쁜 글씨체 획득 vs 엄청난 필력 획득",
    playerCount: 1041,
    likes: 321,
  },
  {
    title: "매일 고구마 먹기 vs 매일 감자 먹기",
    playerCount: 1041,
    likes: 321,
  },
];

const data6 = [
  { title: "남극에서 에어컨 vs 사막에서 히터", playerCount: 330, likes: 181 },
  { title: "미래로 가기 vs 과거로 가기", playerCount: 1500, likes: 480 },
  {
    title: "랜덤으로 다시 태어나는 것 vs 현재 삶 사는 것",
    playerCount: 1232,
    likes: 377,
  },
  { title: "시력 200 vs IQ 200", playerCount: 1041, likes: 321 },
  {
    title: "싫은데 재미있는 사람 vs 착한데 재미없는 사람",
    playerCount: 516,
    likes: 152,
  },
];

export default MainPage;
