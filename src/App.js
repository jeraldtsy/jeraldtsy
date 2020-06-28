import React from 'react';
import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
  return (
    <div className="App">
        <div class = ".image">
          <h1>HELLO </h1>
          <img src = {dp} alt = "Display Picture" className = "image"  /> 
        </div>
    </div>
  );
}

export default App;