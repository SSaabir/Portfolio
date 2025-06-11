import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Database, Palette } from 'lucide-react';
import htmlIcon from '../images/html.svg';
import javaIcon from '../images/java.svg';
import cssIcon from '../images/css.svg';
import gitIcon from '../images/git.svg';
import figmaIcon from '../images/figma.svg';
import jsIcon from '../images/js.svg';
import nodeIcon from '../images/node.svg';
import phpIcon from '../images/php.svg';
import reactIcon from '../images/react.png';
import vscIcon from '../images/vsc.svg';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { icon: htmlIcon, label: 'HTML5' },
        { icon: cssIcon, label: 'CSS3' },
        { icon: jsIcon, label: 'JavaScript' },
        { icon: reactIcon, label: 'React' }
      ]
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { icon: nodeIcon, label: 'Node.js' },
        { icon: phpIcon, label: 'PHP' },
        { icon: javaIcon, label: 'Java' }
      ]
    },
    {
      icon: Palette,
      title: "Tools",
      skills: [
        { icon: figmaIcon, label: 'Figma' },
        { icon: vscIcon, label: 'VS Code' },
        { icon: gitIcon, label: 'Git' }
      ]
    }
  ];

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      id="skills"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg mb-6 animate-scale-in">
            My expertise
          </div>
          <h2 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-8">
            Skills & Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <p className="text-xl font-medium text-gray-300 italic mb-4">
                  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
                </p>
                <p className="text-teal-400 font-semibold">– Martin Fowler, Refactoring</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My main focus lies in back-end development, working with technologies like Node.js and Python to build and manage server-side solutions. I aim to create efficient and scalable back-end systems that support seamless integration with front-end applications.
            </p>
            
            <p className="text-gray-400">
              Visit my{' '}
              <Link
                to="https://www.linkedin.com/in/siraaj-saabir-502866263"
                className="text-teal-400 hover:text-teal-300 underline font-semibold inline-flex items-center gap-1 transition-colors duration-200"
              >
                LinkedIn <ExternalLink className="w-4 h-4" />
              </Link>{' '}
              for more details.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 300}ms`}}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                          <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full blur opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300"></div>
                            <img
                              src={skill.icon}
                              alt={skill.label}
                              className="relative h-12 w-12 transform transition-transform duration-300 group-hover/skill:scale-110"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-teal-400 transition-colors duration-300">
                            {skill.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}