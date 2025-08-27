import React, { useState, useEffect, useRef } from 'react';

interface SplitTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const SplitTextAnimation: React.FC<SplitTextAnimationProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 50
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleWords, setVisibleWords] = useState<boolean[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  const words = text.split(' ');

  useEffect(() => {
    setVisibleWords(new Array(words.length).fill(false));
  }, [words.length]);

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
    if (isVisible) {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * stagger);
      });
    }
  }, [isVisible, words.length, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-2 transition-all duration-700 ease-out ${
            visibleWords[index] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * stagger}ms`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default SplitTextAnimation;