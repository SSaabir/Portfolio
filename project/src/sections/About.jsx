import React from 'react';
import { User, Target, Heart, Activity } from 'lucide-react'; // Added Activity icon for Hobbies
export default function About() {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-[#2D2D2A]"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mix-blend-screen filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            Get to know me
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            About<span className="block mt-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg blur opacity-20"></div>
              <div className="relative bg-orange-50/10 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-orange-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-xl text-white/80 leading-relaxed">
                  I'm Saabir Siraaj — a purpose-driven tech enthusiast blending code, character, and creativity. With a background in IT and Data Science, I focus on building practical, human-centered solutions that solve real problems.
                  <br />
                  <br />
                  Grounded in values like discipline, integrity, and faith, I'm constantly growing — not just as a developer, but as a person. Whether I'm designing systems, learning something new, or helping someone out, I believe in building with intention and living with meaning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Professional",
                text: "IT student specializing in Data Science and Software Engineering. Passionate about building real-world systems that solve meaningful problems. Committed to writing clean, efficient, and ethical code."
              },
              {
                icon: Heart,
                title: "Personal",
                text: "Grounded in faith, discipline, and integrity. Quiet by nature, thoughtful by choice. Always working on self-mastery — mentally, physically, and spiritually."
              },
              {
                icon: User,
                title: "Passion",
                text: "Building meaningful tech with real-world impact. Exploring AI, automation, and problem-solving. Memorizing the Quran and committed to lifelong learning."
              },
              {
                icon: Activity,
                title: "Hobbies",
                text: "Nature walks, reading (mindset, productivity, Islamic knowledge), journaling, occasional gaming, and watching insightful documentaries."
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-orange-50/5 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-orange-400 mb-2">{item.title}</h4>
                        <p className="text-white/80 leading-relaxed">{item.text}</p>
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
