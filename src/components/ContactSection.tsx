
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond to your inquiry soon.",
      });
      
      // Create mailto link
      const mailtoLink = `mailto:charlesaguchinemerem@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}%0A%0AFrom: ${formState.email}`;
      window.location.href = mailtoLink;
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
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
      id="contact"
      ref={sectionRef}
      className="container mx-auto px-4 py-24 opacity-0"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-glow-purple to-glow-blue">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about our skincare technology?
            Our team of experts is here to help you achieve your best skin ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-glow-purple to-glow-blue rounded-xl blur opacity-30"></div>
              <div className="relative glassmorphism rounded-xl overflow-hidden">
                <img 
                  src="https://i.pinimg.com/474x/3e/80/d0/3e80d0b3a6c5d74f5bbdad095d3f5e41.jpg"
                  alt="Header"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-glow-purple">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Support Hours</h3>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-glow-purple">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:charlesaguchinemerem@gmail.com" className="hover:text-glow-purple">
                      charlesaguchinemerem@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-glow-purple">
                    <path d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 14.25C9.33333 14.75 10.2 15.75 12 15.75C14.25 15.75 15 14.25 15 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Whatsapp</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="https://wa.me/2348025272827" target="_blank" rel="noopener noreferrer" className="hover:text-glow-purple">
                      +234 802 527 2827
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="futuristic-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/50 border-gray-200 focus:border-glow-purple"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="bg-white/50 border-gray-200 focus:border-glow-purple"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="min-h-[150px] bg-white/50 border-gray-200 focus:border-glow-purple"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-glow-purple to-glow-blue text-white border-0 hover:shadow-lg transition-all duration-300 ${isSuccess ? 'bg-green-500' : ''}`}
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
