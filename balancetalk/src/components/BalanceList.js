import React, { useEffect, useState } from 'react';
import { FaEye, FaThumbsUp } from 'react-icons/fa';
import '../styles/BalanceList.css';
import { Link } from 'react-router-dom';

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

    <div className='balance-form'>
      {slicedData.map(item => (
        <div className='balance-item' key={item.TITLE} onClick={() => handleItemClick(item)}>
            <span className='balance-title-span' title={item.TITLE}>
              <Link to='vote' style={{ textDecoration: 'none' }}>{truncateText(item.TITLE, 15)}</Link>
            </span>
            <span className='balance-span'>
                <FaEye style={{ marginRight: '5px' }} />{item.PLAYER_COUNT}
            </span>
            <span className='balance-span'>
                <FaThumbsUp style={{ marginRight: '5px' }} />{item.LIKES}
            </span>
        </div>
      ))}
    </div>
  );
};

export default BalanceList;