import React from 'react';
import { Carousel } from "flowbite-react";

const slides = [
  {
    src: 'slider1.jpeg',
    heading: 'Supporting "Fresh Food" and "Responsible Farming"',
    text: 'Consumers deserve fresh food directly from Frams. Our platform brings Farmers and Consumers closer and together to make this possible',
    buttonText: 'Search Product'
  },
  {
    src: 'slider2.jpeg',
    heading: 'Win-Win, Transparent and Democratic platform',
    text: 'Everyone WINS in "GeeCom India" Platform. Sellers prosper because they recieve better prices than traditional market. Consumers save thair hard-earned money because they pay lower prices than traditional market',
    buttonText: 'Show Now'
  },
  {
    src: 'slider3.jpeg',
    heading: 'When "Farmers" will grow, "India" will grow When "Villages" will grow, "India" will grow',
    text: '"Farming" and "Rural Economy" is the next growth engine of India Economy. "GeeCom India" is proud to fuel this growth engine',
    buttonText: 'Go to Products'
  },
  {
    src: 'slider4.jpeg',
    heading: 'Friend of "Farmers" and "Rural India"',
    text: 'We are and E-commerce platform that will uplift, empower and transform millions of lives of "Farmers" & "People in Rural India"',
    buttonText: 'Shop Now'
  },
  {
    src: 'slider5.jpeg',
    heading: 'Supporting "Digital Economy"',
    text: 'We are directly connecting Farmers and Rural Sellers/Producers/Crafters to Consumers, City, Business, Industries and much more...',
    buttonText: 'Go to Products'
  }
];

function Hero() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen md:mt-32 lg:mt-20 relative mt-20">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            <img src={`/src/assets/${slide.src}`} alt="..." className="object-fill w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-lg sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">{slide.heading}</h2>
              <p className="mt-2 sm:mt-4 text-center text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl">{slide.text}</p>
              <button className="mt-4 sm:mt-6 px-3 py-1 sm:px-4 sm:py-2 bg-white text-black font-semibold rounded-lg hover:bg-green-600 focus:outline-none">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
