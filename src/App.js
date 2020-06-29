import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
  return (
    <div>
        <div class="topnav"> 
             <a href = "https://www.twitch.tv/sheng94">Twitch</a>
             <a href = "https://www.google.com">Journal</a>
             <a href = "https://www.google.com">Codes</a>
             <a href = "https://www.google.com">Books</a>
             <a href = "https://jeraldtsy.github.io/web/">jeraldtsy</a>
        </div>
        <div class = ".displayPicture">
            <img src = {dp} alt = "dp" className = "displayPicture" /> 
                <div class = ".greet">
                    <p className = "greet">HELLO</p>               
                <div class = ".AboutMe">
                    <span className = "AboutMe"> I'm Jerald and I am a christian!<br/>
                    I like to read books, code and play <a href = "https://blog.dota2.com/?l=english">DotA</a>. <br/><br/>

                    If you would like to read my book reviews(Mostly christian), head over to <a href = "www.google.com">books</a><br/>
                    If you would like to practise some coding, head over to <a href = "www.google.com">codes</a> <br/>
                    If you would like to read my <a href = "www.google.com">journal</a>, drop me a request. <br/><br/>

                    Corem deo, carpe diem~  </span>
                    </div>
            </div>
        </div>
        <footer>
    		<ul>
        		<li><a href="mailto:jeraldtsy@gmail.com">email</a></li>
        		<li><a href="https://github.com/jeraldtsy/">github.com/jeraldtsy/</a></li>
			</ul>
		</footer>
    </div>  
  );
}

export default App;