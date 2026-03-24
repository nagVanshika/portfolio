import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './sections/Hero';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';
import './styles/global.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* <BackgroundEffect /> */}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <main>
              <Hero />
              <Education />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
