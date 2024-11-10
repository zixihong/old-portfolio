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
          <div className="heading"><h1><TypingText/></h1><p>I'm a student at  
            <span style={{color: 'blue'}}><b> UC Santa Barbara </b> </span> studying
            <span style={{color: 'blue'}}><b> CS + Statistics & Data Science </b></span> with a minor in <span style={{color: 'blue'}}><b> Pure Math. </b></span> My project experience spans diverse fields—including urban planning, bioinformatics, public health, and more—but at the core, each is united by my passion for <b>machine and deep learning, computer vision, & predictive modeling.</b> I value curiosity, creativity, and a commitment to facts and originality, and I'm a problem-solver at heart. Explore some of my personal and research projects below!</p>
            <p><b>CURRENTLY BUILDING: <span style={{color: 'Purple'}}>Alexandria - your AI reading assistant.</span></b></p></div>

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
