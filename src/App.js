import React from 'react';
import profileImage from './img/DisplayPicture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App </h1>
      <h2> Author: Jerald</h2>
      <img src = {profileImage} alt = "profile-image"/>
      <p> Hello world!.</p>
    </div>
  );
}

export default App;
