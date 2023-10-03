import React, { useState } from 'react';
import Headers from '../components/Header.js';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Headers newTag={false} />
    <div className="login-form"> {/* 클래스 이름을 "login-form"으로 변경 */}
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-container"> {/* 클래스 이름을 "login-container"으로 변경 */}
          <label>이메일</label>
          <input
            className='login-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-container"> {/* 클래스 이름을 "login-container"으로 변경 */}
          <label>비밀번호</label>
          <input
            className='login-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  </div>
  );
}

export default LoginPage;
