// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExploreProjectsCTA from './components/ExploreProjectsCTA';
import Projects from './pages/Projects';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LexSentinelAccessRequest from "./components/LexSentinelAccessRequest";
import SwiftEagleAccessRequest from "./components/SwiftEagleAccessRequest";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ExploreProjectsCTA />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/lexsentinel-access" element={<LexSentinelAccessRequest />} />
          <Route path="/projects/swifteagle-access" element={<SwiftEagleAccessRequest />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
