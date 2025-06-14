import React from 'react';
import RedDrop from '../images/RedDrop.png';
import soon from '../images/ComingSoon.jpg';
import complete from '../images/Completed.jpg';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
export default function Projects() {
  const projects = [
    {
      title: "RedDrop - Smart Blood Donation Management",
      description: "Reddrop is a smart blood donation management system that simplifies donor registration, health screening, and scheduling — making the donation process easier and more efficient for everyone.",
      image: RedDrop,
      link: "",
      github: "https://github.com/SSaabir/RedDrop-Project-Advanced-Blood-Donation-System.git",
      tags: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Fresh Co — E-Commerce Platform",
      description: "Fresh Co is a modern e-commerce platform offering fresh produce, groceries, and essentials delivered straight to your door.",
      icon: "🛒",
      link: "",
      github: "https://github.com/SSaabir/FreshCo-Project---Grocery-Ordering-System.git",
      tags: ["Java", "JSX", "MySQL", "CSS", "HTML"]
    },
    {
      title: "Tylac - E-Commerce & Landing Page",
      description: "Tylac is a sleek and modern e-commerce landing page built to convert visitors into customers. Perfect for showcasing products and delivering a seamless shopping experience.",
      image: soon,
      link: "",
      github: "https://github.com/SSaabir/Tylac-Paints-Project---Advanced-Buisness-Management-System.git",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Portfolio",
      description: "A personal portfolio showcasing projects, skills, and experience using React and Tailwind. The site you're currently viewing!",
      icon: "💼",
      link: "https://ssaabir.github.io/Portfolio/",
      github: "https://github.com/SSaabir/Portfolio.git",
      tags: ["React", "Tailwind", "Vite", "JavaScript"]
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative overflow-hidden bg-[#2D2D2A]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mix-blend-screen filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            My work
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore some of the projects I have worked on, showcasing my skills in full-stack development and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-orange-50/5 backdrop-blur-sm border border-orange-500/20 rounded-xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg">
                  {/* Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 h-48 flex items-center justify-center">
                  {project.image && (
                    <img src={project.image} alt="" />
                  
                  )}{(
                    <span className="text-6xl">{project.icon}</span>
                  )}
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-6">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex space-x-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        >
                          View Live
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-white/80 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/ssaabir"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}