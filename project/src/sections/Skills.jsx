import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Database, Palette, Layers } from 'lucide-react';
import htmlIcon from '../images/html.svg';
import javaIcon from '../images/java.svg';
import cssIcon from '../images/css.svg';
import gitIcon from '../images/git.svg';
import figmaIcon from '../images/figma.svg';
import jsIcon from '../images/js.svg';
import nodeIcon from '../images/node.svg';
import phpIcon from '../images/php.svg';
import reactIcon from '../images/react.png';
import pythonIcon from '../images/python.svg';
import mongoIcon from '../images/mongodb.png';
import postmanIcon from '../images/postman.png';
import dockerIcon from '../images/docker.png';
import jwtIcon from '../images/jwt.png';
import vscodeIcon from '../images/vsc.svg';
import mysqlIcon from '../images/mysql.png';
export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { image: htmlIcon, label: 'HTML5' },
        { image: cssIcon, label: 'CSS3' },
        { image: jsIcon, label: 'JavaScript (ES6+)' },
        { image: reactIcon, label: 'React.js' },
        { emoji: '🟢', label: 'GSAP' }
      ]
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { image: nodeIcon, label: 'Node.js' },
        { image: phpIcon, label: 'PHP' },
        { image: javaIcon, label: 'Java' },
        { image: pythonIcon, label: 'Python' },
        { emoji: '🔄', label: 'REST APIs' },
        { image: jwtIcon, label: 'JWT Authentication' }
      ]
    },
    {
      icon: Layers,
      title: "Databases",
      skills: [
        { image: mongoIcon, label: 'MongoDB' },
        { image: mysqlIcon, label: 'MySQL / PostgreSQL' }
      ]
    },
    {
      icon: Palette,
      title: "Tools & Platforms",
      skills: [
        { image: gitIcon, label: 'Git' },
        { image: vscodeIcon, label: 'VS Code' },
        { image: figmaIcon, label: 'Figma' },
        { image: postmanIcon, label: 'Postman' },
        { image: dockerIcon, label: 'Docker' },
        { emoji: '⚙️', label: 'npm / yarn' },
        { emoji: '☁️', label: 'Heroku / Netlify' },
        { emoji: '🧪', label: 'Unit Testing (Jest, Mocha)' },
        { emoji: '🚀', label: 'CI/CD Pipelines' }
      ]
    }
  ];

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100"
      id="skills"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            My expertise
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-[#2D2D2A] leading-tight mb-8">
            Skills & Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-orange-200 rounded-lg p-8 shadow-lg">
                <p className="text-xl font-medium text-[#2D2D2A] italic mb-4">
                  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
                </p>
                <p className="text-orange-600 font-semibold">– Martin Fowler, Refactoring</p>
              </div>
            </div>
            
            <p className="text-lg text-[#2D2D2A]/80 leading-relaxed">
              My main focus lies in back-end development, working with technologies like Node.js and Python to build and manage server-side solutions. I aim to create efficient and scalable back-end systems that support seamless integration with front-end applications.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-8 h-full shadow-lg">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2D2A]">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-all duration-300 transform hover:scale-105 border border-orange-100">
                          {skill.image && (
                            <img src={skill.image} alt={skill.label} />
                          )}{(
                            <span className="text-2xl">{skill.emoji}</span>
                          )}
                          <span className="text-sm font-medium text-[#2D2D2A] group-hover/skill:text-orange-600 transition-colors duration-300">
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
