import React from 'react';
import { Carousel as BootstrapCarousel, Button, CarouselItem } from 'react-bootstrap';
import '../style/Carousel.css'

const Carousel = ({ news }) => {
  const validNews = Array.isArray(news) ? news : [];

  return (
    <BootstrapCarousel>
      {validNews.length > 0 ? (
        validNews.map((item, index) => (
          item.image_url ? (
            <CarouselItem key={index}>
              <div className="carousel-item-container">
                <div className="carousel-caption-container">
                  <BootstrapCarousel.Caption className="carousel-caption">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="me-2">
                          Read More
                        </Button>
                      </a>
                    ) : (
                      <Button variant="secondary" disabled className="me-2">
                        No Link
                      </Button>
                    )}
                  </BootstrapCarousel.Caption>
                </div>
                <div className="carousel-image-container">
                  <img
                    className="carousel-image d-block w-100"
                    src={item.image_url}
                    alt={item.title}
                  />
                  <div className="carousel-gradient-left"/>
                  <div className="carousel-gradient-right"/>
                </div>
              </div>
            </CarouselItem>
          ) : null
        ))
      ) : (
        <div>No news available for carousel.</div>
      )}
    </BootstrapCarousel>
  );
};

export default Carousel;
