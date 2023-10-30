import React, { useState } from 'react';
import '../styles/Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`검색 불가: ${searchTerm}`);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="검색창 공사중"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleEnterKey}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;