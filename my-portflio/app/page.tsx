import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';

const Page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default Page;