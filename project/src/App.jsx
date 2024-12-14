import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
import { Project } from './sections/project'
import { Contact } from './sections/contact'
export default function App() {
  return (
    <BrowserRouter>
    <div className='bg-black'>
    <Header />
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
    </BrowserRouter>
  )
}
