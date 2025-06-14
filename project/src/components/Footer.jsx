import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white">
    
      {/* Copyright/Trademark Bar */}
      <div className="border-t border-orange-400/30 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            
            {/* Copyright */}
            <div className="text-orange-100 mb-2 md:mb-0">
              <span>© {currentYear} Siraaj Saabir. All rights reserved.</span>
            </div>

            {/* Trademark & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 text-orange-200">
              <span className="text-xs">
                Portfolio Design & Brand ™ Siraaj Saabir
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-2 -left-2 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
      </div>
    </footer>
  );
}