import React from 'react';

import './App.css';
import dp from './img/DisplayPicture.jpg';

function App() {
    const twitchPage = "https://www.twitch.tv/sheng94";
    const journalPage = "https://www.google.com"; 
    const booksPage = "https://www.google.com";
    const codePage = "https://www.google.com";
    const webPage = "https://jeraldtsy.github.io/web/";
    const mailPage = "mailto:jeraldtsy@gmail.com";
    const githubPage = "https://github.com/jeraldtsy";

  return (
    <div>
        <div class="header"> 
             <a href = {webPage}>Jerald Tan</a>
             <a href = {booksPage}>Books</a>
             <a href = {codePage}>Codes</a>                   
             <a href = {journalPage}>Journal</a>
             <a href = {twitchPage}>Twitch</a>
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
        <div class = ".bibleVerse">
            <span className = "bibleVerse">For the eyes of the Lord range throughout the earth to strengthen those whose hearts are fully committed to him </span>
		</div>
        <div class = "footer">           
            <a href = {mailPage}>email</a>
        	<a href = {githubPage}>github.com/jeraldtsy/</a>           		    
        </div>
    </div>  
  );
}

export default App;