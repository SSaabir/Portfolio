import React from 'react';
import { User, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      id="about"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg mb-6 animate-scale-in">
            Get to know me
          </div>
          <h2 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            About<span className="block mt-2 text-white">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Hi! I'm a software engineer with a passion for solving design problems and building seamless web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-fade-in animation-delay-1000">
            {[
              {
                icon: Target,
                title: "Professional",
                text: "Problem solver, well-organized person, Deep Worker, and loyal employee with high attention to detail."
              },
              {
                icon: Heart,
                title: "Personal",
                text: "Fan of Formula 1, UFC, outdoor activities, video games, and coding of course."
              },
              {
                icon: User,
                title: "Passion",
                text: "Interested in the entire frontend and backend spectrum and love to work on ambitious projects with interesting people."
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-teal-400 mb-2">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
