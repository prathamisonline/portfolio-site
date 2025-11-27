import React from 'react';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Blog from './Blog';
import Gallery from './Gallery';
import Contact from './Contact';
import TechStack from './TechStack';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <TechStack />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="posts">
        <Blog />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;