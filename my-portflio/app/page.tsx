import React from 'react'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import ParticleEffect from './components/ParticleEffect';



const page = () => {
  return (
    <div>
      <title>Delong Yang</title>
      <Home/>
      <Portfolio/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page