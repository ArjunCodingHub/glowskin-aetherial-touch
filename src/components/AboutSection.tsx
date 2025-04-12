
import React, { useEffect, useRef } from 'react';
import ParallaxContainer from './ParallaxContainer';

const AboutSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              entry.target.classList.add('animate-slide-left');
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  
  return (
    <ParallaxContainer
      bgImage="https://i.pinimg.com/474x/1a/1f/2c/1a1f2c7501d133487b3a24c11b91f192.jpg"
      className="py-24 bg-gray-50"
    >
      <div id="about" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={headingRef}
            className="md:col-span-1 glassmorphism rounded-2xl flex flex-col justify-center items-center p-8 md:p-12 opacity-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-glow-purple to-glow-blue">
              Why Choose GlowSkin
            </h2>
            <div className="mt-8 w-32 h-32 rounded-full bg-gradient-to-br from-glow-purple to-glow-blue p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-5xl">✨</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="md:col-span-2 glassmorphism rounded-2xl p-8 md:p-12 opacity-0"
          >
            <div className="space-y-6">
              <p className="text-lg">
                Our mission is to bridge the gap between cutting-edge science and nature's wisdom, 
                bringing you clean, futuristic skincare that delivers real results. All our products are 
                cruelty-free, vegan, and dermatologist-tested to ensure they're as ethical as they are effective.
              </p>
              
              <p className="text-lg">
                We believe in radical transparency and environmental responsibility, ensuring that every step 
                of our production process is ethical and sustainable. Our packaging is biodegradable or recyclable, 
                and we're committed to minimizing our carbon footprint.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "Science-Backed", description: "Every formula is validated through rigorous clinical testing" },
                  { title: "Sustainable", description: "Eco-friendly practices from sourcing to packaging" },
                  { title: "Ethical", description: "Cruelty-free, vegan, and socially responsible" },
                  { title: "Innovative", description: "Constantly evolving with the latest skincare technology" }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 text-glow-purple">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default AboutSection;
