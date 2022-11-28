import React from "react";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import IGO from "./Components/IGO/IGO";
import Info from "./Components/InfoSection/Info";
import Navbar from "./Components/Navbar/Navbar";
import ServicesNFT from "./Components/Services/ServicesNFT";
import Carousel from "./Components/Slider/Carousel";
import VideoSection from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <div className="gradient-bg-transactions">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ServicesNFT />
      <IGO />
      <Info />
      <Carousel />
      <Footer />
    </div> 
  );
}

export default App;
