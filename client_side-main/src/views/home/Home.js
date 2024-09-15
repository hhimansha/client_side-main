import React, { useState } from 'react';
import Slider from 'react-slick';
import './home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer/Footer';

function Home() {
  const eventSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (currentSlide) => setActiveSlide(currentSlide),
  };

  const eventTexts = [
    {
      title: 'Event 1 Title',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2 Title',
      description: 'Description for Event 2',
    },
    {
      title: 'Event 3 Title',
      description: 'Description for Event 3',
    },
    // Add more objects for additional events
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    

<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[90vh] text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src="{heroimage}" alt="Background Image" class="object-cover object-center w-full h-[90vh]" />
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div class="relative z-10 flex flex-col px-[24px] w-fit mx-auto justify-center items-center h-full text-center">
                    <h1 class="text-4xl sm:text-6xl font-bold leading-tight mb-4">IEEE STUDENT BRANCH<br />SLIIT</h1>
                    <p class="text-lg text-gray-300 mb-8">Join the Force Driving Technological Advancements</p>
                    <a href="#" class="bg-white text-gray-900 hover:bg-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Join Us</a>
                </div>
            </div>
    
  );
}

export default Home;
