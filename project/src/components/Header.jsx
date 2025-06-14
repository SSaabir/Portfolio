import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import brand from '../images/brand.png'
import React, {useState} from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#2D2D2A]/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-lg border-b border-orange-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-xl font-semibold text-white hover:text-orange-400 transition-colors duration-200"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
              <img src={brand} alt="brand" className='rounded'/>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white/80 hover:text-orange-400 transition-colors duration-200 capitalize font-medium"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-orange-500/20">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white/80 hover:text-orange-400 transition-colors duration-200 capitalize font-medium text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
