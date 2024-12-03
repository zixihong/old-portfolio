'use client'
import React from 'react';
import TypingText from '../components/TypingText/TypingText';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import Link from 'next/link';

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
            I'm a student at <span style={{color: 'blue'}}><b>UC Santa Barbara</b></span> studying <span style={{color: 'blue'}}><b>CS + Math, </b></span> 
            and I love working on projects involving <b>Machine and Deep Learning, Computer Vision, and Predictive Modeling. </b> At my core, I value curiosity, creativity, uniqueness, and originality, and I'm a problem-solver at heart who believes that they can <b>Change The World. </b>
            Explore some of my personal and research projects below! Or check out my {' '}
            <Link href="/pure-simple-html" style={{color: 'yellow', textDecoration: 'underline', fontWeight: 'bold'}}> Blog :) </Link>
            </p><br />
            <p>
              <b>CURRENTLY BUILDING:{' '}
                <span style={{color: 'Purple'}}>
                  Alexandria - your AI reading assistant.
                </span>
              </b>
            </p><br />
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