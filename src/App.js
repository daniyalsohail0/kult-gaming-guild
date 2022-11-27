import React from "react";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import IGO from "./Components/IGO/IGO";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Slider/Carousel";
import VideoSection from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <HeroSection />
      </div>
      <VideoSection />
      <IGO />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
