import React, { useState } from 'react';
import '../styles/Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`/search?query=${searchTerm}`);
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
        placeholder="검색어를 입력하세요"
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
