import React from 'react'
import Navbar from '../components/navbar/Navbar'
import About from './about/About'
import Home from './home/Home'
import Skills from './skills/Skills'
import Education from './education/Education'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Footer from '../components/footer/Footer'

const Pages = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Pages
