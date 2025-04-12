
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMenuOpen(false);
      const navbarHeight = 80; // approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 glassmorphism border-b",
      scrolled ? "py-2 bg-white/80 shadow-md" : "py-4 bg-white/50"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img 
            src="https://i.pinimg.com/474x/e1/d2/c7/e1d2c74465c7a32159486ca595860032.jpg" 
            alt="GlowSkin Logo" 
            className={cn(
              "h-12 transition-all duration-300 rounded-full", // Removed animate-float
              scrolled ? "h-10" : "h-12"
            )}
          />
          <span className="ml-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-glow-purple to-glow-blue">
            GlowSkin
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'treatment', 'product', 'about', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="relative text-gray-700 font-medium transition-colors hover:text-glow-purple"
                >
                  <span className="relative px-1">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow-purple transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden md:hidden",
          menuOpen ? "max-h-64 border-t py-4" : "max-h-0"
        )}
      >
        <ul className="flex flex-col space-y-4 px-6 py-2">
          {['home', 'treatment', 'product', 'about', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-gray-700 font-medium w-full text-left py-2 hover:text-glow-purple transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

