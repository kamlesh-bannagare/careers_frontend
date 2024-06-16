// src/components/SlidingQuotesCarousel.jsx

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sliding.css';

const SlidingQuotesCarousel = () => {
  const items = [
    {
      img: 'https://images.unsplash.com/photo-1590134797180-f4170305bf5a?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'The best way to get started is to quit talking and begin doing. - Walt Disney',
    },
    {
      img: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill',
    },
    {
      img: 'https://images.unsplash.com/photo-1474308371634-c715850e8d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Don\'t let yesterday take up too much of today. - Will Rogers',
    },
  ];

  return (
    <Carousel interval={3000} controls={false} indicators={false} pause={false}>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 custom-carousel-image"
            src={item.img}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <p className="custom-carousel-quote">{item.quote}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlidingQuotesCarousel;
