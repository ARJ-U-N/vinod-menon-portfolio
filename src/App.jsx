import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import KeySkills from './components/KeySkills';
import Projects from './components/Projects';
import MediaAccomplishments from './components/MediaAccomplishments';
import Insights from './components/Insights';
import Footer from './components/Footer';
import './styles/App.css';
import KeyMilestones from './components/KeyMilestones';
import AdditionalMedia from './components/AdditionalMedia';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <KeyMilestones />
      <Projects />
      <MediaAccomplishments />
      <AdditionalMedia />
      
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
