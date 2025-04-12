
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ParallaxContainer from './ParallaxContainer';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      
      if (!container) return;
      
      const { width, height, left, top } = container.getBoundingClientRect();
      const mouseX = clientX - left;
      const mouseY = clientY - top;
      
      // Calculate the movement offset (adjusted to be subtle)
      const moveX = (mouseX - width / 2) / 50;
      const moveY = (mouseY - height / 2) / 50;
      
      // Apply the movement to floating elements with different intensities
      floatingElements.current.forEach((el, i) => {
        const intensity = (i + 1) * 0.4;
        el.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Function to add floating elements to the ref array
  const addToFloatingRefs = (el: HTMLDivElement | null) => {
    if (el && !floatingElements.current.includes(el)) {
      floatingElements.current.push(el);
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative min-h-screen">
      <ParallaxContainer
        bgImage="https://i.pinimg.com/474x/0c/41/fe/0c41fe747d1e058a40608cb48a3abcbc.jpg"
        className="min-h-screen flex items-center justify-center px-4"
      >
        {/* Decorative floating elements */}
        <div ref={addToFloatingRefs} className="absolute w-40 h-40 rounded-full bg-glow-purple/10 blur-3xl top-1/4 left-1/4 transition-transform duration-200" />
        <div ref={addToFloatingRefs} className="absolute w-56 h-56 rounded-full bg-glow-blue/10 blur-3xl bottom-1/4 right-1/4 transition-transform duration-200" />
        <div ref={addToFloatingRefs} className="absolute w-32 h-32 rounded-full bg-glow-pink/10 blur-3xl top-1/3 right-1/3 transition-transform duration-200" />
        
        {/* Main content */}
        <div className="glassmorphism rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative z-10 border-white/30">
          <div className="space-y-6 backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-glow-purple to-glow-blue">
              Unveil Your Inner Beauty with Our Futuristic Skincare
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Our advanced skincare formulas combine cutting-edge technology with natural ingredients to enhance your natural beauty and give you the radiant confidence you deserve.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-glow-purple to-glow-blue text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
              >
                Discover Collection
              </Button>
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  );
};

export default Hero;
