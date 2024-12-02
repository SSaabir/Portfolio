import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
      <section className="flex gap-2 justify-center py-4 px-4">
        <div className="flex-1 text-left">
          <span className="text-7xl font-semibold text-gray-800 hover:text-blue-500 transition-all">
            Software Engineer
          </span>
          <br />
          <p className="text-lg font-semibold text-gray-800">
            Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
            <Link
          to="/About"
          className="flex items-center text-4xl font-bold text-gray-800 hover:text-blue-500 transition-colors"
        >
          About Me <span className="ml-2 text-blue-500 hover:text-blue-700">&gt;</span>
        </Link></p>
    
        </div>
        <div className='flex-1'><span></span></div>
      </section>
    );
  }
