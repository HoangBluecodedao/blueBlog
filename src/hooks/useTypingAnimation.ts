import { useState, useEffect, useRef } from 'react';

export const useTypingAnimation = (
  text: string,
  duration: number = 2000, // Total duration to type the entire text
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    // Reset states when text changes
    if (text !== displayText) {
      setDisplayText('');
      setIsComplete(false);
      hasStarted.current = false;
      currentIndex.current = 0;
    }

    let timeout: number;
    const totalChars = text.length;
    const interval = duration / totalChars; // Calculate interval between each character

    // Only start if not already started and should start
    if (!hasStarted.current && startDelay >= 0) {
      hasStarted.current = true;
      
      // Initial delay before starting
      const startTimeout = setTimeout(() => {
        const typeNextChar = () => {
          if (currentIndex.current < totalChars) {
            setDisplayText(text.slice(0, currentIndex.current + 1));
            currentIndex.current++;
            timeout = setTimeout(typeNextChar, interval);
          } else {
            setIsComplete(true);
          }
        };

        typeNextChar();
      }, startDelay);

      return () => {
        clearTimeout(startTimeout);
        clearTimeout(timeout);
      };
    }
  }, [text, duration, startDelay]);

  return { displayText, isComplete };
}; 