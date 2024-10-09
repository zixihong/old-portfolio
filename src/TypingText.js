import React, { useState, useEffect } from 'react';

function TypingText() {
  const [text, setText] = useState(''); 
  const targetText = "Hello, World! I'm Bryan."; 
  const linkText = "Bryan"; 

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      if (text.length < targetText.length) {
   
        setText(prevText => prevText + targetText[prevText.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, [text, targetText]);

  const renderTextWithLink = () => {
    const linkPosition = targetText.indexOf(linkText);
    
    if (text.length < linkPosition + linkText.length) {
      return text;
    } else {
   
      const beforeLink = text.slice(0, linkPosition);
      const afterLink = text.slice(linkPosition + linkText.length);
      
      return (
        <>
          {beforeLink}
          <a href='https://linktr.ee/zixihong' target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
          {afterLink}
        </>
      );
    }
  };

  return (
    <div>
      {renderTextWithLink()}
    </div>
  );
}

export default TypingText;