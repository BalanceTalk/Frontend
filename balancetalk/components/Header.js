import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({newTag = true, loginTag = true, registerTag = true}) {
  return (
    <div id="header">
      <div className="header-left">
        <Link to='/' style={{ textDecoration: 'none' }}><h2>⚖️BALANCETALK</h2></Link>
      </div>
      <div className="header-right">
        {newTag && <Link to="/new" style={{ textDecoration: 'none' }}>
          <button id="new">+NEW</button>
        </Link>}
        {loginTag && <Link to="/login">
          <button className="login-buttons" style={{ textDecoration: 'none' }}>Login</button>
        </Link>}
        {!loginTag && <button className="login-buttons">Logout</button>}
        {registerTag && <Link to="/register" style={{ textDecoration: 'none' }}>
          <button className="register-buttons">Register</button>
        </Link>}
      </div>
    </div>
  )
}

export default Header;
