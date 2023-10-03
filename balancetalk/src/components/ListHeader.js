import React from 'react';
import '../styles/ListHeader.css';

const ListHeader = ({title}) => {
  return (
    <div className='header-row'>
      <h2 className='title2'>{title}</h2>
      <button className='detail-button'>+자세히보기</button>
    </div> 
  );
};

export default ListHeader;