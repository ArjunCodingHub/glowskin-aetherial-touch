import React, { useEffect, useRef } from 'react';
import ParallaxContainer from './ParallaxContainer';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      
      if (!container) return;
      
      const { width, height, left, top } = container.getBoundingClientRect();
      const mouseX = clientX - left;
      const mouseY = clientY - top;
      
      const moveX = (mouseX - width / 2) / 50;
      const moveY = (mouseY - height / 2) / 50;
      
      floatingElements.current.forEach((el, i) => {
        const intensity = (i + 1) * 0.4;
        el.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const addToFloatingRefs = (el: HTMLDivElement | null) => {
    if (el && !floatingElements.current.includes(el)) {
      floatingElements.current.push(el);
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-applying-cream-to-her-face-32962-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div ref={addToFloatingRefs} className="absolute w-40 h-40 rounded-full bg-glow-purple/10 blur-3xl top-1/4 left-1/4 transition-transform duration-200" />
        <div ref={addToFloatingRefs} className="absolute w-56 h-56 rounded-full bg-glow-blue/10 blur-3xl bottom-1/4 right-1/4 transition-transform duration-200" />
        <div ref={addToFloatingRefs} className="absolute w-32 h-32 rounded-full bg-glow-pink/10 blur-3xl top-1/3 right-1/3 transition-transform duration-200" />
        
        <div className="glassmorphism rounded-2xl p-6 md:p-8 max-w-6xl w-full mx-auto relative z-10 border-white/30">
          <div className="flex flex-col md:flex-row items-center backdrop-blur-sm gap-6">
            <div className="md:w-1/2 text-left space-y-4">
              <h1 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-glow-purple to-glow-blue" style={{fontFamily: 'Arial Black, sans-serif'}}>
                Unveil Your Inner Beauty with Our Futuristic Skincare
              </h1>
              <p className="text-lg md:text-xl text-black max-w-2xl">
                Our advanced skincare formulas combine cutting-edge technology with natural ingredients to enhance your natural beauty and give you the radiant confidence you deserve.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://th.bing.com/th/id/OIP.bgTTSI8qqLrn4cJEpeOtGQHaEh?w=312&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
                alt="Skincare Product" 
                className="w-full h-auto rounded-lg shadow-lg object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
