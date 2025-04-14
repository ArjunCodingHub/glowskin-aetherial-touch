
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import TreatmentSection from '@/components/TreatmentSection';
import ProductSection from '@/components/ProductSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Smooth scroll functionality for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    // Get all elements with the scroll-transition class
    const scrollElements = document.querySelectorAll('.scroll-transition');
    scrollElements.forEach((el) => {
      observer.observe(el);
    });
    
    // Apply scroll transitions to main section containers
    sectionRefs.current.forEach((section) => {
      if (section) {
        section.classList.add('scroll-transition');
        observer.observe(section);
      }
    });
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      scrollElements.forEach((el) => observer.unobserve(el));
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <div ref={el => sectionRefs.current[0] = el} id="info">
        <InfoSection />
      </div>
      <div ref={el => sectionRefs.current[1] = el} id="treatment">
        <TreatmentSection />
      </div>
      <div ref={el => sectionRefs.current[2] = el} id="product">
        <ProductSection />
      </div>
      <div ref={el => sectionRefs.current[3] = el} id="about">
        <AboutSection />
      </div>
      <div ref={el => sectionRefs.current[4] = el} id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
