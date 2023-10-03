import styled from '@emotion/styled';

const HeaderRow = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: baseline; /* 수직 정렬 (중앙 정렬) */
    width: 100%; /* HeaderRow를 100% 너비로 설정 */
    //background-color: gray;

`;
const Title = styled.h2`
    margin-left: 15px;
    text-align: left;
    display: space-between;
   // background-color: blue;
    width: 65%;
    white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
    // background-color: gray;
`;

const DetailButton = styled.button`
    font-size: 12px;
    //margin-right: 10px;
    background-color: transparent;
    border: none;
    //background-color: green;
`;

const ListHeader = ({title}) => {
    
    return (
        <HeaderRow>
            <Title>{title}</Title>
            <DetailButton>+자세히보기</DetailButton>
        </HeaderRow> 
        
    );
};

export default ListHeader;