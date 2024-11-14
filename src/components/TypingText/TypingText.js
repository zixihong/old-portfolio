'use client'
import React, { useState, useEffect } from 'react';
import styles from './TypingText.module.css';

function TypingText() {
  const [text, setText] = useState('');
  const targetText = "Hello, World! I'm Bryan.";
  const linkText = "Bryan";
  const typingSpeed = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text.length < targetText.length) {
        setText(prevText => prevText + targetText[prevText.length]);
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, targetText]);

  const renderTextWithLink = () => {
    const linkPosition = targetText.indexOf(linkText);
    
    if (text.length < linkPosition + linkText.length) {
      return text;
    }

    const beforeLink = text.slice(0, linkPosition);
    const afterLink = text.slice(linkPosition + linkText.length);
    
    return (
      <>
        {beforeLink}
        <a 
          href='https://linktr.ee/zixihong' 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.nameLink}
        >
          {linkText}
        </a>
        {afterLink}
      </>
    );
  };

  return (
    <div className={styles.typingContainer}>
      {renderTextWithLink()}
      <span className={styles.cursor}></span>
    </div>
  );
}

export default TypingText;