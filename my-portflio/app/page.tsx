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
      <title>Delong Yang</title>
      
      {/* Snap scroll container for Home and About */}
      <div className="h-[200vh] overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start h-screen">
          <Home/>
        </div>
        <div className="snap-start h-screen">
          <About/>
        </div>
      </div>

      {/* Normal scroll for the rest of the sections */}
      <div>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default Page;