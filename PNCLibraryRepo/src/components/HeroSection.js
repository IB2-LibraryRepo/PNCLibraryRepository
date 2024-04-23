import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg']; // Add more image filenames here

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='hero-container'>
      {images.map((image, index) => (
        <img
          key={index}
          src={`/images/${image}`}
          alt='Slideshow'
          className={`slideshow-image ${index === currentImageIndex ? '' : 'animate'}`} // Apply animation class conditionally
        />
      ))}
      <h1>PnC Library Repository</h1>
      <p><em>Search your needs</em></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Go to Resources <i className='far fas fa-search' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
