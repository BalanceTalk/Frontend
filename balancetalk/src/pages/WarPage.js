import React from "react";
import Header from "../components/Header.js";
import "../styles/WarPage.css";
import { useState, useEffect } from "react";

function WarPage() {
  const DummyData = [
    {
      title: "내가 다음 생에 태어나게 된다면?",
      deadline: "2023-11-30T10:24:27.465Z",
      optionTitle1: "인간으로 태어나기",
      optionDescription1: "단, 국가좌표는 랜덤",
      optionImageUrl1: "https://source.unsplash.com/random/400x360",
      optionTitle2: "부잣집 고양이로 태어나기",
      optionDescription2: "단, 종은 랜덤",
      optionImageUrl2: "https://source.unsplash.com/random/400x360", // added this line for the second option's image
    },
  ];
  const DummyVoteRate = [
    {
      voteRate1: "30%",
      voteRate2: "70%",
    },
  ];
  const DummyUser = [
    {
      email: "dign552@naver.com",
      nickname: "dign552",
      age: "24",
      region: "DAEJEON",
    },
  ];
  const DummyComment = [
    {
      content: "인간이 좋아요",
      vote: "1",
    },
    {
      content: "고양이가 더 좋아요",
      vote: "2",
    },
  ];
  const DummyVote = [
    {
      vote: "2",
    },
  ];

  const [comments, setComments] = useState(DummyComment);
  const [commentInput, setCommentInput] = useState("");
  const [vote, setVote] = useState(null);

  useEffect(() => {
    setVote(DummyVote[0].vote);
  }, []);

  const addComment = () => {
    if (commentInput.trim() === "" || !vote) return;
    const newComment = {
      content: commentInput,
      vote: vote,
    };
    setComments([...comments, newComment]);
    setCommentInput("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      addComment();
    }
  };
  

  return (
    <div>
      <Header newTag={true} />
      <br></br>
      <h2 id="title">{DummyData[0].title}</h2>
      <br></br>
      <br></br>
      <div>
        <div className="option-title">{DummyData[0].optionTitle1}</div>
        <div className="option-desc">{DummyData[0].optionDescription1}</div>
        <div
          className="bar blue-bar"
          style={{ width: DummyVoteRate[0].voteRate1 }}
        >
          {DummyVoteRate[0].voteRate1} <span></span>
        </div>
      </div>
      <br></br>
      <div>
        <div className="option-title">{DummyData[0].optionTitle2}</div>
        <div className="option-desc">{DummyData[0].optionDescription2}</div>
        <div
          className="bar red-bar"
          style={{ width: DummyVoteRate[0].voteRate2 }}
        >
          {DummyVoteRate[0].voteRate2}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="comment-container">
        <input
          className="comment-input"
          type="text"
          placeholder="댓글을 입력하세요"
          id="commentInput"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyPress={handleEnterKey}
        />
        <button className="comment-button" onClick={addComment}>
          입력
        </button>
      </div>

      <div className="comment-section">
        {comments.map((comment, index) => {
          if (comment.vote === "1") {
            return (
              <div key={index} className="comment-box blue-bg">
                {comment.content}
              </div>
            );
          } else if (comment.vote === "2") {
            return (
              <div key={index} className="comment-box red-bg">
                {comment.content}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default WarPage;
