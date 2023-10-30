import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Topic = styled.h1`
  margin-top: 3%;
  margin-left: 7%;
  font-size:50px;
`;
const Form = styled.form`
  width: 400px;
  margin: 0 30px 0 30px;
  margin-top: 40px;
  height: 300px;
  justfy-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  // flex-direction: column;
  display: flex;
  background: linear-gradient(to right, #FF8282 50%, #7DA1FF 50%);
`
const MiniForm = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  justfy-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  // flex-direction: column;
  // background: white;
`
const Left = styled.h2`
  margin-left: 5%;
  width: 38%;
  font-size: 25px;
  justify-content: center;
  text-align: center;
  `
const VS = styled.h2` 
  margin-left: 2%;
  margin-right: 2%;
  width: 10%;
  font-size: 30px;
  margin: 0 auto;
`
const Right = styled.h2`
margin-right: 5%;
font-size: 25px;
width: 38%;
justify-content: center;
text-align: center;
`
const People = styled.h5`
  margin-top: 0;
  height: 5%;
  text-align: center;
  font-size: 15px; 
  width: 100%; 
  // background-color: gray;
`
const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px; /* 아이콘과 텍스트 사이의 여백 설정 */
`
function GameGridPage() {
  return (
    <div>
        <Header newTag = {true}/>
        <Topic>인기 게임</Topic>
        <div style={
          {
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
          }
        }>
      <div>
        <Form>
          <MiniForm>
            <Left>인간으로 태어나기</Left>
            <VS>VS</VS>
            <Right>부잣집 고양이로 태어나기</Right>
          </MiniForm>
          <People>
            <Icon icon={faUser} /> 1,234명 참여중
          </People>
        </Form>
        <Form>
        <MiniForm>
          <Left>일주일 머리 감기 불가</Left>
          <VS>VS</VS>
          <Right>일주일 양치질 불가</Right>
        </MiniForm>
        <People>
            <Icon icon={faUser} /> 1,002명 참여중
          </People>
          </Form>
      </div>
      <div>
        <Form>
        <MiniForm>
        <Left>똥 먹었는데 아무도 모르기</Left>
          <VS>VS</VS>
          <Right>똥 안먹었는데 동네방네 소문나기</Right>
          </MiniForm>
          <People>
            <Icon icon={faUser} /> 934명 참여중
          </People>
        </Form>
        <Form>
        <MiniForm>
        <Left>월 200 백수</Left>
          <VS>VS</VS>
          <Right>월 500 직장인</Right>
          </MiniForm>
          <People>
            <Icon icon={faUser} /> 857명 참여중
          </People>
        </Form>
      </div>
      <div>
        <Form>
        <MiniForm>

        <Left>전자기기 없이 살기</Left>
          <VS>VS</VS>
          <Right>친구 없이 살기</Right>
          </MiniForm>
          <People>
            <Icon icon={faUser} /> 788명 참여중
          </People>
        </Form>
        <Form>
        <MiniForm>

          <Left>프론트엔드</Left>
          <VS>VS</VS>
          <Right>백엔드</Right>
          </MiniForm>
          <People>
            <Icon icon={faUser} /> 601명 참여중
          </People>
        </Form>
      </div>
    </div>
  </div>
  );
}

export default GameGridPage;