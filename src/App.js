import React from 'react';
import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
  return (
    <div className="App">
        <div class = "image">
            <img src = {dp} alt = "Display Picture" align = "left" /> 
            <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
            <h1>Jerald </h1>
        </div>
    </div>
  );
}

export default App;