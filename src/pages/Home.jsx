import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Properties from '../components/Properties';
import CTA from '../components/CTA';

const images = [
  '/images/img_1.jpg', // Replace with your image paths
  '/images/img_2.jpg',
  '/images/img_3.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='relative h-screen overflow-hidden'>
        {/* Background Images */}
        <div
          className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        {/* Navbar */}
        <Navbar isHome={true} />
        {/* Hero Content */}
        <Hero />
      </div>
      <Properties isHome={true} />
      <CTA />
    </>
  );
};

export default Home;
