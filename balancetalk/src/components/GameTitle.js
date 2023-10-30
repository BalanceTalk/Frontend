import styled from '@emotion/styled';

const Gametitle = styled.h1`
    margin-top: 2%;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    //background-color: skyblue;
    font-size: xxx-large;
`;

const GameTitle = ({title}) => {
    
    return (
        <Gametitle>{title}</Gametitle>
    );
}

export default GameTitle;
