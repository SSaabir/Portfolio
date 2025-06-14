import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import  Project  from './sections/Project'
import  Contact  from './sections/Contact'
import Footer from './components/Footer'
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
    <Footer/>
    </div>
    </BrowserRouter>
  )
}
