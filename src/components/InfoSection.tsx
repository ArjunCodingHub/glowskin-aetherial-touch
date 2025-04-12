
import React, { useEffect, useRef } from 'react';

const InfoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="container mx-auto px-4 py-24 opacity-0"
    >
      <div className="futuristic-card p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-glow-purple to-glow-accent">
            Awaken Your Natural Beauty
          </h2>
          <p className="text-lg text-gray-700">
            Our team of scientists and dermatologists carefully research and test every product, 
            ensuring each formula meets our exacting standards for performance, safety, and efficacy. 
            Combining cutting-edge technology with pristine natural ingredients, 
            our products help you navigate the future of skincare with confidence.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Advanced Formulas",
                description: "Scientifically developed with breakthrough technologies"
              },
              {
                icon: "🌿",
                title: "Natural Ingredients",
                description: "Ethically sourced from sustainable suppliers worldwide"
              },
              {
                icon: "🔬",
                title: "Clinically Tested",
                description: "Proven results backed by dermatological research"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="futuristic-card p-6 glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
