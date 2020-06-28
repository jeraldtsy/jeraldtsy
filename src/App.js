import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';
import {text} from './textfiles/AboutMe.txt';

function App() {
  return (
    <div className="App">
        <div class = ".displayPicture">
            <img src = {dp} alt = "Display Picture" className = "displayPicture" /> 
                <div class = ".h1">
                    <h1>HELLO</h1>
                </div>
                <div class = ".AboutMe">
                    <script class ="AboutMe">console.log(text)</script>
                </div>
        </div>
    </div>
  );
}

export default App;