
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://i.pinimg.com/474x/e1/d2/c7/e1d2c74465c7a32159486ca595860032.jpg" 
                alt="GlowSkin Logo" 
                className="h-10 mr-3"
              />
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-glow-purple to-glow-blue">
                GlowSkin
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              The future of skincare technology, delivering exceptional results through advanced formulations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-glow-purple transition-colors"><a href="#treatment">Treatments</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#product">Moisturizers</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#product">Cleansers</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#product">Sunscreens</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-glow-purple transition-colors"><a href="#about">About Us</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#contact">Contact</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#careers">Careers</a></li>
              <li className="hover:text-glow-purple transition-colors"><a href="#press">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 GlowSkin. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
