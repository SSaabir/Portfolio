import React from 'react'
import { Link } from 'react-router-dom'
import htmlIcon from '../images/html.svg'
import javaIcon from '../images/java.svg'
import cssIcon from '../images/css.svg'
import gitIcon from '../images/git.svg'
import figmaIcon from '../images/figma.svg'
import jsIcon from '../images/js.svg'
import nodeIcon from '../images/node.svg'
import phpIcon from '../images/php.svg'
import reactIcon from '../images/react.png'
import vscIcon from '../images/vsc.svg'

export default function Skills() {
  return (
    <section className="h-screen py-4 px-32">
          <div className='text-center py-4 text-white'>A problem is a chance for you to do your best. <br />
    Skills&Experience <br />
    <br />
    The main area of expertise is front end development (client side of the web).
    <br />
    <br />
    HTML, CSS, JS, building small and medium web applications with Vue or React, custom<br />plugins, features, animations, and coding interactive layouts.
    <br />
    Visit my <Link to="https://www.linkedin.com/in/siraaj-saabir-502866263"><span className='text-yellow-400 hover:underline'>Linkedin</span></Link> for more details.
      </div>
      <div className='flex gap-14 flex-wrap justify-center text-center'>
        <div className='flex-3 items-center'>
          <img src={htmlIcon} alt="HTML" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>HTML5</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={javaIcon} alt="Java" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>Java</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={cssIcon} alt="Java" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>CSS3</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={figmaIcon} alt="CSS3" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>Figma</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={reactIcon} alt="React" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>React</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={nodeIcon} alt="Node" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>Node</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={vscIcon} alt="Vsc" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>Visual Studio <br />Code</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={phpIcon} alt="php" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>PHP</span>
        </div>
        <div className='flex-2 items-center'>
          <img src={gitIcon} alt="GIT" className='h-20 w-20'/>
          <span className='text-white text-lg font-medium'>GIT</span>
        </div>
      </div>  
    </section>
  
  )
}
