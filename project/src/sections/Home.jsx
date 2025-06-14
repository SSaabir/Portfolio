import React from "react";
import { HashLink } from "react-router-hash-link";
import avatha from '../images/pro.png'
import resume from '../assets/SiraajSaabirResume.pdf'
export default function Home() {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-15"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center min-h-screen py-16 px-6 lg:px-12 pt-24">
        {/* Text Content */}
        <div className="text-left max-w-screen-lg">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-medium rounded-full shadow-lg">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2D2D2A] leading-tight">
            Hi, I'm{" "}
            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Siraaj Saabir
            </span>
          </h1>
          
          <p className="mt-6 text-xl lg:text-2xl font-medium text-[#2D2D2A]/80 leading-relaxed">
            Data Science Undergraduate |{" "}
            <span className="text-orange-500 font-semibold">Web Developer</span>
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              About Me 
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-lg hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
            >
              View Work
            </button>

            <a
  href={resume} // Adjust the path if needed
  download
  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
>
  Download CV
  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">↓</span>
</a>

          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 rounded-full border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={avatha} 
                alt="Siraaj Saabir" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              />
              </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
