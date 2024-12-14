import React from 'react';

export default function About() {
  return (
    <section
      className="h-screen flex flex-col lg:flex-row gap-6 items-center justify-center py-8 px-6 bg-gradient-to-br from-gray-800 to-gray-600"
      id="about"
    >
      <div className="flex-1 text-left">
        <h2 className="text-6xl font-bold text-teal-400">
          About<span className="text-teal-300"> Me</span>
        </h2>
       
        <p className="mt-4 text-xl font-medium text-gray-300">
        Hi! I’m a software engineer with a passion for solving design problems and building seamless web applications.</p>
      </div>
      <div className="flex-1 space-y-4">
      <ul className='list-disc list-inside text-gray-700 space-y-2 text-justify'>
        <li className='text-lg text-gray-200'>
          Problem solver, well-organized person, Deep Worker, and loyal employee with high attention to detail.
          </li>
        <li className='text-lg text-gray-200'>
          Fan of Formula 1, UFC, outdoor activities, video games, and coding of course.
        </li>
        <li className='text-lg text-gray-200'>
        Interested in the entire frontend and backend spectrum and love to work on ambitious projects with interesting people.
        </li>
        </ul>
      </div>
    </section>
  );
}
