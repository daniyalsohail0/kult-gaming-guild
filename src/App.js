import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import IGO from "./Components/IGO/IGO";
import Navbar from "./Components/Navbar/Navbar";
import VideoSection from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <IGO />
    </div>
  );
}

export default App;
