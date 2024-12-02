import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Home />
    <About />
    <Skills />
    </BrowserRouter>
  )
}
