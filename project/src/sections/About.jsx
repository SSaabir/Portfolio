import React from 'react';

export default function About() {
  return (
    <section
      className="h-screen flex flex-col lg:flex-row gap-6 items-center justify-center py-8 px-6 bg-gradient-to-br from-gray-800 to-gray-600"
      id="about"
    >
      <div className="flex-1 text-left">
        <h2 className="text-6xl font-bold text-teal-400">
          Hi, I'm Saabir <br /> <span className="text-teal-300">Web Developer</span>
        </h2>
        <p className="mt-4 text-xl font-medium text-gray-300">
          Full Stack Developer / Experienced Backend Developer
        </p>
      </div>
      <div className="flex-1 space-y-4">
        <p className="text-lg text-gray-200">
          Professionally connected with the web development industry.
        </p>
        <p className="text-lg text-gray-200">
          Problem solver, well-organized person, and loyal employee with high attention to detail.
        </p>
        <p className="text-lg text-gray-200">
          Fan of Boxing, outdoor activities, video games, and coding of course.
        </p>
        <p className="text-lg text-gray-200">
          Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
        </p>
      </div>
    </section>
  );
}
