import React from 'react';
// import MainPage from './pages/MainPage.js';
// import CreateGamePage from './pages/CreateGamePage.js';
import VoteGamePage from './pages/VoteGamePage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <MainPage />
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/new" component={CreateGamePage} />
      </Routes> */}
      <VoteGamePage />
    </Router>
  );
}

export default App;