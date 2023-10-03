import Header from '../components/Header.js';
import GameTitle from '../components/GameTitle.js';
import GameVoteButton from '../components/GameVoteButton.js';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";

const GameVoteForm = styled.div`
    margin-top: 3%;
    display: flex;
    width: 100%;
    height: 60vh;
    flex-direction : row;
    justify-content: space-around;  //가로
    align-content: space-around;    //세로
`;


function VoteGamePage() {
    const DummyData = [
        {"gameTitle" : "내가 다음 생에 태어나게 된다면?",
        "options": [
            {
                "optionTitle": "인간으로 태어나기",
                "optionDescription": "단, 국가좌표는 랜덤",
                "optionImage": "https://source.unsplash.com/random/400x360"
            },
            {
                "optionTitle": "부잣집 고양이로 태어나기",
                "optionDescription": "단, 종은 랜덤",
                "optionImage": " "
            }
        ]
        },

    ]
    const history = useNavigate(); // useHistory 훅 사용 -> useNavigate로 바뀜

    const handleButtonClick = (gameIndex, optionIndex) => {
        // gameIndex와 optionIndex에 따라 적절한 경로로 이동하도록 처리
        if (optionIndex === 0) {
            history('../left');
        } else if (optionIndex === 1) {
            history('../right');
        }
    };

    return (
        <div>
            <Header newTag={false} />
            <GameTitle title={DummyData[0].gameTitle} />
            <GameVoteForm>
                {DummyData.map((game, gameIndex) => (
                    game.options.map((option, optionIndex) => (
                        <GameVoteButton
                            //key={`${gameIndex}-${optionIndex}`}
                            color={optionIndex === 0 ? "skyblue" : "seagreen"} 
                            onClick={() => handleButtonClick(gameIndex, optionIndex)}
                            title={option.optionTitle}
                            description={option.optionDescription}
                            url={option.optionImage}
                        />
                    ))
                ))}
            </GameVoteForm>
        </div>
    );
}

export default VoteGamePage;