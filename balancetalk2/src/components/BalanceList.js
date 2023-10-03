import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaEye,FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BalanceForm = styled.div`
    width: 95%;
    display: flex;
    flex-direction : column;
    justify-content: space-around;  //가로
    align-content: space-around;    //세로
`;

const BalanceItem = styled.div` 
    width:100%;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    font-size: 18px;
    align-items: center;

`;
const BalanceTitleSpan = styled.span` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: skyblue;
    width: 60%;
    white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
`;

const BalanceSpan = styled.span` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: skyblue;
    
`;

// const BalanceEyeSpan = styled.span` 
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     //background-color: skyblue;
//     width: 15%;
// `;
// const BalanceThumbSpan = styled.span` 
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     //background-color: skyblue;
//     //width: 15%;
// `;
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

const BalanceList = () => {
  const [balanceData, setBalanceData] = useState([]);

  const handleItemClick = (item) => {
    // API 호출 및 데이터 표시
    console.log(`Clicked on ${item.TITLE}`);
  };

  useEffect(() => {
    // API에서 데이터를 가져오는 로직 구현.
    // fetch('API_URL').then(response => response.json()).then(data => setBalanceData(data));
    
    const mockData = [
      { TITLE: "똥맛카레 vs 카레맛 똥", DEADLINE: '항목 1', PLAYER_COUNT: 100, LIKES: 100, PLAYER_ID: 'asdf'},
      { TITLE: "토맛토마토 vs 토마토맛토", DEADLINE: '항목 2', PLAYER_COUNT: 100, LIKES: 100, PLAYER_ID: 'asdf'}, 
      { TITLE: "아야어여오요 vs 가갸거겨고교", DEADLINE: '항목 3', PLAYER_COUNT: 100, LIKES: 300, PLAYER_ID: 'asdf'},
      { TITLE: "고양이로 태어나기 vs 얼굴 랜덤돌리기", DEADLINE: '항목 4', PLAYER_COUNT: 100, LIKES: 300, PLAYER_ID: 'asdf'},
      { TITLE: "똥맛카레 5 vs 카레맛 똥 5", DEADLINE: '항목 5', PLAYER_COUNT: 100, LIKES: 300, PLAYER_ID: 'asdf'},
      { TITLE: "똥맛카레 6 vs 카레맛 똥 6", DEADLINE: '항목 6', PLAYER_COUNT: 100, LIKES: 300, PLAYER_ID: 'asdf'},
    ];
    setBalanceData(mockData);
  }, []);
  const slicedData = balanceData.slice(0, 5);
  return (

    <BalanceForm>
      {slicedData.map(item => (
        <BalanceItem key={item.TITLE} onClick={() => handleItemClick(item)}>
            <BalanceTitleSpan title={item.TITLE}>
              <Link to="/vote" style={{ textDecoration: 'none' }}>{truncateText(item.TITLE, 15)}</Link>
            </BalanceTitleSpan>
          
            <BalanceSpan>
                <FaEye style={{ marginRight: '5px' }} />{item.PLAYER_COUNT}
            </BalanceSpan>
            <BalanceSpan>
                <FaThumbsUp style={{ marginRight: '5px' }} />{item.LIKES}
            </BalanceSpan>
        </BalanceItem>
      ))}
    </BalanceForm>
  );
};

export default BalanceList;