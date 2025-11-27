import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import Home from './components/Home';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Blog from './components/Blog';
import PostDetail from './components/PostDetail';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
        <GridBackground>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Blog />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </GridBackground>
      </div>
    </Router>
  );
};

export default App;