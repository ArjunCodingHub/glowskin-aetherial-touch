
import React, { useEffect, useRef } from 'react';
import ParallaxContainer from './ParallaxContainer';

const treatments = [
  {
    title: "Nano-Infusion Facial",
    description: "Advanced technology delivers active ingredients deep into skin layers for maximum results.",
    icon: "https://i.pinimg.com/474x/25/ad/68/25ad6810d7b469e227182a45ca0ee5b1.jpg"
  },
  {
    title: "Quantum Acne Solution",
    description: "Targeted light therapy and precision formulas for stubborn blemishes and acne-prone skin.",
    icon: "https://i.pinimg.com/474x/91/1a/ea/911aea0a1f834f316a11718289bc460a.jpg"
  },
  {
    title: "Luminosity Enhancement",
    description: "Revolutionary brightening complex evens skin tone and diminishes dark spots naturally.",
    icon: "https://i.pinimg.com/474x/6a/1d/96/6a1d96b21788c8c8902ee3b1e7001e88.jpg"
  },
  {
    title: "Bio-Adaptive Hydration",
    description: "Intelligent formulas that adjust hydration levels based on your skin's changing needs.",
    icon: "https://i.pinimg.com/474x/2a/22/8b/2a228b3a0b8b3d8497b6154f9c26ffab.jpg"
  }
];

const TreatmentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <ParallaxContainer
      bgImage="https://i.pinimg.com/474x/1a/1f/2c/1a1f2c7501d133487b3a24c11b91f192.jpg"
      className="py-20 bg-gray-50"
    >
      <div 
        id="treatment"
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-glow-purple to-glow-blue">
            Futuristic Treatments
          </h2>
          <p className="text-lg text-gray-700">
            Experience the future of skincare with our innovative treatments that combine
            advanced technology with the finest natural ingredients for transformative results:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="futuristic-card p-6 glow-effect opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={treatment.icon} 
                  alt={treatment.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default TreatmentSection;
