import React, { useState } from 'react';
import Headers from '../components/Header.js';
import '../styles/RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
    age: '',
    region: 'SEOUL',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <Headers newTag = {false}/>
      <div className="register-form">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className='register-container'>
            <label>이메일</label>
            <input
              className='register-input'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='register-container'>
            <label>비밀번호</label>
            <input
              className='register-input'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='register-container'>
            <label>닉네임</label>
            <input
              className='register-input'
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='register-container'>
            <label>나이</label>
            <input
              className='register-input'
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className='register-container'>
            <label>지역</label>
            <select
              className='register-input'
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
            >
              <option value="SEOUL">서울</option>
              <option value="BUSAN">부산</option>
              <option value="INCHEON">인천</option>
              <option value="DAEJEON">대전</option>
              <option value="DAEGU">대구</option>
              <option value="GWANGJU">광주</option>
              <option value="ULSAN">울산</option>
                  <option value="GYEONGGIDO">경기도</option>
                  <option value="GWANGWONDO">강원도</option>
                  <option value="CHOONGCHEONGDO">충청도</option>
                  <option value="GYEONGSANGDO">경상도</option>
                  <option value="JEONRADO">전라도</option>
                  <option value="JEJUDO">제주도</option>
                </select>
              </div>
              <button className='register-button' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
