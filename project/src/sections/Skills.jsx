import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <section
      className="h-screen py-12 px-8 lg:px-32 bg-gradient-to-b from-gray-700 to-gray-900"
      id="skills"
    >
      <div className="text-center text-gray-200 space-y-4 mb-12">
        <h2 className="text-5xl font-extrabold text-teal-400">
          Skills & Experience
        </h2>
        <p className="text-lg font-medium text-gray-300">
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." <br /> – Martin Fowler, Refactoring
        </p>
        <p className="text-gray-400">
        My main focus lies in back-end development, working with technologies like Node.js and Python to build and manage server-side solutions. I aim to create efficient and scalable back-end systems that support seamless integration with front-end applications.</p>
        <p className="text-gray-400">
          Visit my{' '}
          <Link
            to="https://www.linkedin.com/in/siraaj-saabir-502866263"
            className="text-yellow-400 hover:underline"
          >
            LinkedIn
          </Link>{' '}
          for more details.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { icon: htmlIcon, label: 'HTML5' },
          { icon: javaIcon, label: 'Java' },
          { icon: cssIcon, label: 'CSS3' },
          { icon: figmaIcon, label: 'Figma' },
          { icon: reactIcon, label: 'React' },
          { icon: nodeIcon, label: 'Node' },
          { icon: vscIcon, label: 'Visual Studio Code' },
          { icon: phpIcon, label: 'PHP' },
          { icon: gitIcon, label: 'GIT' },
          { icon: jsIcon, label: 'JavaScript' },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 group"
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="h-20 w-20 transform transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-lg font-medium text-gray-300 group-hover:text-teal-400">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
