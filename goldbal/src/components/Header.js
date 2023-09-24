import React from 'react';
import '../styles/Header.css';

function Header({newTag = true}) {
  return (
    <div id="header">
      <div className="header-left">
        <h2>⚖️BALANCETALK</h2>
      </div>
      <div className="header-right">
        {newTag && <button id="new" to="/new">+NEW</button>}
        <button className="login-buttons">Login</button>
        <button className="register-buttons">Register</button>
      </div>
    </div>
  )
}

export default Header;