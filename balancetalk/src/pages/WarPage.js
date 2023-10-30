import React from "react";
import Header from "../components/Header.js";
import "../styles/WarPage.css";
import { useState, useEffect } from "react";

function WarPage({data, voteRate, com, side}) {

  const [comments, setComments] = useState(com);
  const [commentInput, setCommentInput] = useState("");
  const [vote, setVote] = useState(null);

  useEffect(() => {
    setVote(String(side[0].side));
}, []);

  const addComment = () => {
    if (commentInput.trim() === "" || !vote) return;
    const newComment = {
      content: commentInput,
      side: vote,
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
      <h2 id="title">{data[0].title}</h2>
      <br></br>
      <br></br>
      <div>
        <div className="option-title">{data[0].optionTitle1}</div>
        <div className="option-desc">{data[0].optionDescription1}</div>
        <div
          className="bar blue-bar"
          style={{ width: voteRate[0].voteRate1 }}
        >
          {voteRate[0].voteRate1} <span></span>
        </div>
      </div>
      <br></br>
      <div>
        <div className="option-title">{data[0].optionTitle2}</div>
        <div className="option-desc">{data[0].optionDescription2}</div>
        <div
          className="bar red-bar"
          style={{ width: voteRate[0].voteRate2 }}
        >
          {voteRate[0].voteRate2}
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
          if (comment.side === "1") {
            return (
              <div key={index} className="comment-box blue-bg">
                {comment.content}
              </div>
            );
          } else if (comment.side === "2") {
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
