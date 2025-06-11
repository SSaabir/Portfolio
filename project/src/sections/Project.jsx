import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A responsive e-commerce web app with user authentication, product filtering, and payment integration.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/ecommerce",
      github: "https://github.com/example/ecommerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and experience using React and Tailwind.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/portfolio",
      github: "https://github.com/example/portfolio",
      tags: ["React", "Tailwind", "Vite", "TypeScript"]
    },
    {
      title: "Chat Application",
      description: "A real-time chat application built with Node.js, Socket.IO, and React, featuring group chats and media sharing.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/chatapp",
      github: "https://github.com/example/chatapp",
      tags: ["React", "Socket.IO", "Node.js", "Express"]
    },
    {
      title: "Task Management Tool",
      description: "A full-stack task manager app with drag-and-drop functionality and real-time updates.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/taskmanager",
      github: "https://github.com/example/taskmanager",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"]
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg mb-6 animate-scale-in">
            My work
          </div>
          <h2 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent leading-tight mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore some of the projects I have worked on, showcasing my skills in full-stack development and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-700/50 text-teal-400 text-sm font-medium rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        View Live
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center px-6 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-slate-900 transform hover:-translate-y-1 transition-all duration-300"
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
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <p className="text-xl text-gray-300 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
