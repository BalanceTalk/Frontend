import React from "react";
import "../styles/ListHeader.css";
import { Link } from "react-router-dom";

const ListHeader = ({ title }) => {
  return (
    <div className="header-row">
      <h2 className="title2">{title}</h2>
      <Link to="/gamegrid">
        <button className="detail-button">+자세히보기</button>
      </Link>
    </div>
  );
};

export default ListHeader;
