import styled from '@emotion/styled';
import { FaEye,FaThumbsUp } from 'react-icons/fa';

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

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

const BalanceList = ({balanceData}) => {
  //const [balanceData, setBalanceData] = useState([]);

  const handleItemClick = (item) => {
    // API 호출 및 데이터 표시
    console.log(`Clicked on ${item.TITLE}`);
  };

  const slicedData = balanceData.slice(0, 5);
  return (

    <BalanceForm>
      {slicedData.map(item => (
        <BalanceItem key={item.TITLE} onClick={() => handleItemClick(item)}>
             <BalanceTitleSpan title={item.TITLE}>{truncateText(item.TITLE, 15)}</BalanceTitleSpan>
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
