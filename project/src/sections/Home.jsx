import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
      <section className="h-screen flex gap-2 justify-center py-4 px-4">
        <div className="flex-1 text-left">
          <span className="text-7xl font-semibold text-white">
            Software Engineer
          </span>
          <br />
          <p className="text-lg font-semibold text-white">
            Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
            <Link
          to="/About"
          className="flex items-center text-4xl font-bold text-purple-600"
        >
          About Me <span className="ml-2 text-purple-600">&gt;</span>
        </Link></p>
    
        </div>
        <div className='flex-1'><span></span></div>
      </section>
    );
  }
