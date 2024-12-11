import React from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

const Carousel = ({ news }) => {
  const validNews = Array.isArray(news) ? news : [];
  // https://www.popbela.com/

  return (
    <BootstrapCarousel>
      {validNews.length > 0 ? (
        validNews.map((item, index) => (
          item.image_url ? (
            <CarouselItem key={index}>
              <img
                className="d-block w-100"
                src={item.image_url}
                alt={item.title}
              />
              <BootstrapCarousel.Caption>
                <h3 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{item.title}</h3>
              </BootstrapCarousel.Caption>
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
