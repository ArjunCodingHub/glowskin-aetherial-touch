
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail, MessageSquare } from "lucide-react";

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
        
        {/* Contact Information - Moved above the form */}
        <div className="futuristic-card p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-glow-purple" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Support Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-glow-purple" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email Us</h3>
                <p className="text-gray-600">
                  <a 
                    href="mailto:charlesaguchinemerem@gmail.com" 
                    className="hover:text-glow-purple transition-colors"
                  >
                    charlesaguchinemerem@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-glow-purple/10 flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-glow-purple" />
              </div>
              <div>
                <h3 className="font-medium text-lg">WhatsApp</h3>
                <p className="text-gray-600">
                  <a 
                    href="https://wa.me/2348025272827" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-glow-purple transition-colors"
                  >
                    +234 802 527 2827
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
          
        {/* Contact Form - Now takes full width */}
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
            
            {isSuccess && (
              <div className="p-3 bg-green-100 text-green-700 rounded-md text-center animate-fade-in">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
