import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const VoteButton = styled.button`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //border: none; /* 테두리 제거 */
  border-radius: 30px;
  cursor: pointer;
`;
const VoteTitle = styled.span`
  font-weight: bolder;
  font-size: xxx-large;
`;
const VoteDescription = styled.span`
  font-weight: bold;
  font-size: xx-large;
  margin-top: 1vh;
`;
const GameVoteButton = ({ title, description, color, url, war, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    backgroundImage: url ? `url(${url})` : "none",
    backgroundSize: "cover",
  };
  return (
    <VoteButton style={buttonStyle} onClick={onClick}>
        <VoteTitle>{title}</VoteTitle>
      <VoteDescription>{description}</VoteDescription>
    </VoteButton>
  );
};

export default GameVoteButton;
