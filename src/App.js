import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
  return (
    <div>
        <div class = ".displayPicture">
            <img src = {dp} alt = "dp" className = "displayPicture" /> 
                <div class = ".greet">
                    <h1 className = "greet">HELLO</h1>
                </div>
        </div>
        <h5> //to be completed </h5>
    </div>
   
   
  );
}

export default App;