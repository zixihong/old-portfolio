import './App.css';
import React from 'react';
import TypingText from './TypingText';
import ProjectsGrid from './ProjectsGrid';

function App() {
  return (
    <div className="App">

      <section id="introduction">
        <div className="container">
          <img src = "IMG_1149 (1).jpg" alt = "Bryan Hong" width="400" height="400"/>
          <div className="heading"><h1><TypingText/></h1><p>I am currently a student at the 
            <span style={{color: 'blue'}}> Univeristy of California - Santa Barbara </span>
            studying CS and DS. I've worked on projects and conducted research over a variety of different subjects including urban planning, bioinformatics, and public health, but the one intersection between all of these is my passion for <b>Machine and Deep Learning, Computer Vision, and Data Analysis. </b>Check out some of my personal and research projects below!</p></div>
          </div>
      </section>
     
      <section id="projects"> 
        <div className='container'>
          <h2>Projects</h2>
          <ProjectsGrid />
        </div>
      </section>
      <footer>
        <div className="container">
          <p><b>© 2024 Bryan Hong.</b> Full website source code is available on <a href="https://github.com/zixihong" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
      </footer>
  </div>
  
  );
}
export default App;
