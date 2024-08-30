"use client"
import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(prev => prev + text[index]);
      index += 1;
      if (index >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer); 
  }, [text, speed]);
  
  return <span>{displayedText}</span>;
};

export default TypingEffect;
