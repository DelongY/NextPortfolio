import React from 'react';
import Head from 'next/head';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Skills from './pages/skills';

const Page = () => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Page;