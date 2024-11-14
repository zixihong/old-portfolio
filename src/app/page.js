'use client'
import React from 'react';
import TypingText from '../components/TypingText/TypingText';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>

export default function Home() {
  return (
    <>
      <section id="introduction">
        <div className="container">
          <img 
            src="IMG_1149 (1).jpg" 
            alt="Bryan Hong" 
            width="400" 
            height="400"
            loading="eager"
            priority="true"
          />
          <div className="heading">
            <h1><TypingText/></h1><br />
            <p>
              I'm a student at{' '}
              <span style={{color: 'blue'}}><b>UC Santa Barbara </b></span> studying
              <span style={{color: 'blue'}}><b> CS + Statistics & Data Science </b></span> 
              with a minor in <span style={{color: 'blue'}}><b>Pure Math.</b></span>{' '}
              My project experience spans diverse fields—including urban planning, bioinformatics, 
              public health, and more—but at the core, each is united by my passion for{' '}
              <b>Machine and Deep Learning, Computer Vision, & Predictive Modeling.</b>{' '}
              I value curiosity, creativity, and a commitment to facts and originality, 
              and I'm a problem-solver at heart. Explore some of my personal and research 
              projects below!
            </p><br />
            <p>
              <b>CURRENTLY BUILDING:{' '}
                <span style={{color: 'Purple'}}>
                  Alexandria - your AI reading assistant.
                </span>
              </b>
            </p><br /><br />
          </div>
        </div>
      </section>
     
      <section id="projects"> 
        <div className='container'>
          <ProjectsGrid />
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            <b>© 2024 Bryan Hong.</b> Full website source code is available on{' '}
            <a 
              href="https://github.com/zixihong" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  )
}