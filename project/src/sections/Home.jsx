import React from "react";
import { HashLink } from "react-router-hash-link";
import avatha from '../images/pro.png'

export default function Home() {
  return (
    <section
      className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center py-4 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
      id="home"
    >
      <div className="text-left max-w-screen-lg">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-teal-400">
        Hi, I'm Siraaj Saabir
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-200">
          Data Science Undergraduate | Web Developer
        </p>
        <HashLink
          smooth
          to="#about"
          className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white text-xl font-bold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        >
          About Me <span className="ml-2">&gt;</span>
        </HashLink>
      </div>
      <div className="flex items-center justify-center">
        {/* Replace the span with an image or graphic */}
        <span className="bg-yellow-400 w-72 h-72 rounded-full shadow-lg">
          <img src={avatha} alt="figure" className="rounded-full bg-hero-pattern"/>
        </span>
      </div>
    </section>
  );
}
