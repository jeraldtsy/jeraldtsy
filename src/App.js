import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
  return (
    <div>
        <div class = ".displayPicture">
            <img src = {dp} alt = "dp" className = "displayPicture" /> 
                <div class = ".greet">
                    <p className = "greet">HELLO</p>               
                <div class = ".AboutMe">
                    <p className = "AboutMe"> I'm Jerald and I am a christian!<br/>
                    I like to read books and code. <br/><br/>

                    If you would like to read my book reviews(Mostly christian), head over to the "Books" link above. <br/>
                    If you would like to practise some coding, head over to the "Codes" link above. <br/>
                    If you would like to read my journal, drop me a request. <br/><br/>

                    Corem deo, carpe diem~  </p>
                    </div>
            </div>
        </div>     
    </div>  
  );
}

export default App;