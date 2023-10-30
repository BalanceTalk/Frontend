import React from 'react';
import Header from '../components/Header.js';
import '../styles/CreateGamePage.css';

function CreateGamePage() {
  const [title, setTitle] = React.useState('');
  const [option1, setOption1] = React.useState('');
  const [option2, setOption2] = React.useState('');
  const [option1Description, setOption1Description] = React.useState('');
  const [option2Description, setOption2Description] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);

  const handleCreateGame = () => {
    alert("게임 생성 오류");
  };
  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    setImage1(file);
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setImage2(file);
  };

  return (
    <div>
      <Header newTag={false} />
    <div  className="create-game-page">
      <h2>주제</h2>
      <div className="title-container">
        <input
          className="title"
          placeholder="주제(상황설명) 입력"
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <h2>선택지</h2>

      <div className ="option-container">
      <h4>1번 선택지</h4>
        <input
          className="option"
          placeholder="선택지1"
          required
          type="text"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        /><br/>
        <textarea
          className="option-description" 
          placeholder="추가 설명1"
          rows="4"
          value={option1Description}
          onChange={(e) => setOption1Description(e.target.value)}
        /><br/>
        <input
            type="file"
            accept="image/*"
            onChange={handleImage1Change}
        />
        {image1 && <img src={URL.createObjectURL(image1)} alt="Option 1" />}
      </div>

      <div className ="option-container">
      <h4>2번 선택지</h4>
        <input
          className="option"
          placeholder="선택지2"
          required
          type="text"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        /><br/>
        <textarea
          className="option-description" 
          placeholder="추가 설명2"
          rows="4"
          value={option2Description}
          onChange={(e) => setOption2Description(e.target.value)}
        /><br/>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage2Change}
        />
        {image2 && <img src={URL.createObjectURL(image2)} alt="Option 2" />}
      </div>

      <h2>마감기한</h2>
      <input
        required
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      /><br/><br/><br/>

      <button className ="create-button" onClick={handleCreateGame}>Create</button>
      </div>
    </div>
  );
}

export default CreateGamePage;