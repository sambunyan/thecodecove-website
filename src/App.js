import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './app.css';
import EntertainmentSection from './components/EntertainmentSection';

function App() {
  return (
    <div className="App">
     <Navbar />
        <WelcomeSection />
        <AboutSection />
        <VideoSection />
        <EntertainmentSection />
       <Footer />
    </div>
  );
}

export default App;
