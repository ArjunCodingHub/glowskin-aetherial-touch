
import React, { ReactNode, useEffect, useRef } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  speed?: number;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className = '',
  bgImage,
  speed = 0.5
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const container = parallaxRef.current;
      if (!container) return;
      
      const scrollPos = window.pageYOffset;
      const containerOffset = container.offsetTop;
      const containerHeight = container.offsetHeight;
      
      // Only apply parallax effect when the element is in view
      if (
        scrollPos + window.innerHeight > containerOffset && 
        scrollPos < containerOffset + containerHeight
      ) {
        const parallaxOffset = (scrollPos - containerOffset) * speed;
        const yPos = parallaxOffset * -1;
        
        // Apply transform to the background
        if (container.querySelector('.parallax-bg')) {
          (container.querySelector('.parallax-bg') as HTMLElement).style.transform = 
            `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={parallaxRef}
      className={`relative overflow-hidden ${className}`}
    >
      {bgImage && (
        <div 
          className="parallax-bg absolute inset-0 w-full h-[130%] -z-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;
