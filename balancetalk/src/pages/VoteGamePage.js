import Header from "../components/Header.js";
import GameTitle from "../components/GameTitle.js";
import GameVoteButton from "../components/GameVoteButton.js";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const gameData = [
  {
    gameTitle: "undefined",
    options: [
      {
        optionTitle: "undefined",
        optionDescription: "undefined",
        optionImage: " ",
      },
      {
        optionTitle: "undefined",
        optionDescription: "undefined",
        optionImage: " ",
      },
    ],
  },
];
const GameVoteForm = styled.div`
  margin-top: 3%;
  display: flex;
  width: 100%;
  height: 60vh;
  flex-direction: row;
  justify-content: space-around; //가로
  align-content: space-around; //세로
`;

function VoteGamePage({ data = gameData }) {
  const navigate = useNavigate();
  const handleButtonClick = (gameIndex, optionIndex, data) => {
    // gameIndex와 optionIndex에 따라 적절한 경로로 이동하도록 처리
      switch (data[0].gameTitle) {
        case "내가 다음 생에 태어나게 된다면?":
          navigate(`/war/1-${optionIndex+1}`);
          break;
        case "일주일 동안 한가지를 할 수 없다면?":
          navigate(`/war/2-${optionIndex+1}`);
          break;
        case "똥을 먹어보자":
          navigate(`/war/3-${optionIndex+1}`);
          break;
        case "돈이 좋아?, 일이 싫어?":
          navigate(`/war/4-${optionIndex+1}`);
          break;
        case "카레냐 똥이냐?":
          navigate(`/war/5-${optionIndex+1}`);
          break;
      }  
    }

  return (
    <div>
      <Header newTag={false} />
      <GameTitle title={data[0].gameTitle} />
      <GameVoteForm>
        {data.map((game, gameIndex) =>
          game.options.map((option, optionIndex) => (
            <GameVoteButton
              //key={`${gameIndex}-${optionIndex}`}
              color={optionIndex === 0 ? "skyblue" : "pink"}
              onClick={() => handleButtonClick(gameIndex, optionIndex, data)}
              title={option.optionTitle}
              description={option.optionDescription}
              url={option.optionImage}
            />
          ))
        )}
      </GameVoteForm>
    </div>
  );
}

export default VoteGamePage;
