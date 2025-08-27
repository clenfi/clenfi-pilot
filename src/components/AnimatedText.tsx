import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: 'fadeIn' | 'slideUp' | 'typewriter' | 'wordByWord';
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  animationType = 'fadeIn',
  duration = 1000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible && animationType === 'typewriter') {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex >= text.length) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    } else if (isVisible && animationType === 'wordByWord') {
      const words = text.split(' ');
      let currentWordIndex = 0;
      const interval = setInterval(() => {
        setDisplayText(words.slice(0, currentWordIndex + 1).join(' '));
        currentWordIndex++;
        if (currentWordIndex >= words.length) {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    } else {
      setDisplayText(text);
    }
  }, [isVisible, text, animationType]);

  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animationType) {
      case 'fadeIn':
        return 'opacity-100 transition-opacity duration-1000 ease-out';
      case 'slideUp':
        return 'opacity-100 translate-y-0 transition-all duration-1000 ease-out';
      case 'typewriter':
        return 'opacity-100';
      case 'wordByWord':
        return 'opacity-100';
      default:
        return 'opacity-100 transition-opacity duration-1000 ease-out';
    }
  };

  const initialClasses = animationType === 'slideUp' ? 'opacity-0 translate-y-8' : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`${initialClasses} ${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: animationType === 'fadeIn' || animationType === 'slideUp' ? `${delay}ms` : '0ms'
      }}
    >
      {animationType === 'typewriter' && (
        <span className="relative">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      )}
      {animationType === 'wordByWord' && (
        <span>{displayText}</span>
      )}
      {(animationType === 'fadeIn' || animationType === 'slideUp') && text}
    </div>
  );
};

export default AnimatedText;