import React from 'react';
import MainPage from './pages/MainPage.js';
import CreateGamePage from './pages/CreateGamePage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VoteGamePage from './pages/VoteGamePage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="new" element={<CreateGamePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="vote" element={<VoteGamePage></VoteGamePage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
