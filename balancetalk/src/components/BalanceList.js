import React, { useEffect, useState } from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import "../styles/BalanceList.css";
import { Link } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const BalanceList = ({ data }) => {
  const [balanceData, setBalanceData] = useState([]);

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item.title}`);
  };

  useEffect(() => {
    setBalanceData(data);
  }, [data]);

  const slicedData = balanceData.slice(0, 5);

  return (
    <div className="balance-form">
      {slicedData.map((item, index) => (
        <div
          className="balance-item"
          key={item.title}
          onClick={() => handleItemClick(item)}
        >
          <span className="balance-title-span" title={item.title}>
            <Link
              to={
                item.title === "인간으로 태어나기 vs 부잣집 고양이로 태어나기" || 
                item.title === "일주일 머리 감기 불가 vs 일주일 양치질 불가" ||
                item.title === "똥 먹었는데 아무도 모르기 vs 똥 안 먹었는데 동네방네 소문나기" ||
                item.title === "월 200 백수 vs 월 500 직장인" ||
                item.title === "똥맛 카레 vs 카레맛 똥"
                  ? `vote/${index + 1}`
                  : `vote/`
              }
              style={{ textDecoration: "none" }}
            >
              {truncateText(item.title, 15)}
            </Link>
          </span>
          <span className="balance-span">
            <FaEye style={{ marginRight: "5px" }} />
            {item.playerCount}
          </span>
          <span className="balance-span">
            <FaThumbsUp style={{ marginRight: "5px" }} />
            {item.likes}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BalanceList;
