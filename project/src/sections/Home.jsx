import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <section
      className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center py-4 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
      id="home"
    >
      <div className="text-left max-w-screen-lg">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-teal-400">
          Software Engineer
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-200">
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
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
        <span className="bg-teal-500 w-40 h-40 rounded-full shadow-lg"></span>
      </div>
    </section>
  );
}
