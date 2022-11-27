import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import game1 from "../../Assets/game1.png";
import game2 from "../../Assets/game2.jpg";
import game3 from "../../Assets/game3.jpg";
import game4 from "../../Assets/game4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './Carousel.css'
import { AiFillStar } from 'react-icons/ai'

const images = [game1, game2, game3, game4];

const Carousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className='flex flex-col justify-center items-center w-full p-3 text-white gradient-bg-services h-screen'>
      <h1 className='text-center text-4xl px-2 py-8'>
        Most Played Games
      </h1>
      <div className='md:w-[800px] w-full'>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div className='bg-gray-900 h-auto w-fit'>
                <img src={img} alt={img} width='200' />
                <div className='flex justify-between items-center p-3'>
                  <h3>
                    Moonknights Battlefield
                  </h3>
                  <p className='text-xs flex items-center'>
                    <AiFillStar className='text-yellow-300' /> 
                    <span>
                      4/5
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      <br />
      <br />
        <p className='bg-blue-700 shadow-lg shadow-blue-700/50 text-sm py-2 px-2 mx-4 cursor-pointer hover:bg-[#2546bd]'>
          Play Now 
        </p>
    </div>
  )
}

export default Carousel