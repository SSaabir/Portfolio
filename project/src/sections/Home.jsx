
import React from "react";
import { HashLink } from "react-router-hash-link";
import avatha from '../images/pro.png'

export default function Home() {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center min-h-screen py-16 px-6 lg:px-12">
        {/* Text Content */}
        <div className="text-left max-w-screen-lg animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg animate-scale-in">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm{" "}
            <span className="block mt-2 text-white">
              Siraaj Saabir
            </span>
          </h1>
          
          <p className="mt-6 text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">
            Data Science Undergraduate |{" "}
            <span className="text-teal-400 font-semibold">Web Developer</span>
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <HashLink
              smooth
              to="#about"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              About Me 
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </HashLink>
            
            <HashLink
              smooth
              to="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-teal-400 text-teal-400 text-lg font-bold rounded-xl hover:bg-teal-400 hover:text-slate-900 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View Work
            </HashLink>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center lg:justify-end animate-fade-in animation-delay-300">
          <div className="relative group">
            {/* Glowing ring effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={avatha} 
                alt="Siraaj Saabir" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}