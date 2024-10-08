import React from 'react'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';

const page = () => {
  return (
    <div>
      <title>Delong Yang</title>
      <Home/>
      <Resume/>
      <Portfolio/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page