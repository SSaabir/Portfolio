import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import React from 'react'

export default function Header() {
    const path= useLocation().pathname;
  return ( 
    <Navbar className='bg-transparent text-white'>
    <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
    <span>Saabir Siraaj</span>
    </Link>
   
    <div className='flex gap-2 md:order-2 text-white'>
       
            
        <Navbar.Toggle/>
    </div>
        <Navbar.Collapse>
            <Navbar.Link active={path=="/"} as={'div'}>
                <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path=="/#about"} as={'div'}>
                <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path=="/skills"} as={'div'}>
                <Link to='/'>Skills</Link>
            </Navbar.Link>
            <Navbar.Link active={path=="/project"} as={'div'}>
                <Link to='/'>Project</Link>
            </Navbar.Link>
            <Navbar.Link active={path=="/contact"} as={'div'}>
                <Link to='/'>Contact</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
