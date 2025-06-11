import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <Link to="/" className="self-center text-xl font-semibold whitespace-nowrap text-teal-400">
          Saabir Siraaj
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse className="gap-4">
        <HashLink smooth to="#home" className="hover:text-teal-400">
          Home
        </HashLink>
        <HashLink smooth to="#about" className="hover:text-teal-400">
          About
        </HashLink>
        <HashLink smooth to="#skills" className="hover:text-teal-400">
          Skills
        </HashLink>
        <HashLink smooth to="#projects" className="hover:text-teal-400">
          Projects
        </HashLink>
        <HashLink smooth to="#contact" className="hover:text-teal-400">
          Contact
        </HashLink>
      </Navbar.Collapse>
    </Navbar>
  );
}