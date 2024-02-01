import React from 'react';
import Swiper from 'swiper';
 import 'swiper/css/swiper.min.css';
import '../css/Slider.css';

const Slider = () => {
  const slideList = [
    { title: 'The Crown', image: 'https://www.themoviedb.org/t/p/original/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg' },
    { title: 'The Crown', image: 'https://www.themoviedb.org/t/p/original/jkXkaZBg8GhFrnypBnVvGDuMj5c.jpg' },
    { title: 'The Crown', image: 'https://www.themoviedb.org/t/p/original/bFEFDqhxxon7CTe6k8lUgPE2qUO.jpg' },
    { title: 'The Crown', image: 'https://www.themoviedb.org/t/p/original/y1TixZNYVOPBZ9CgIQHdxE83MmZ.jpg' },
  ];

  React.useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: 3,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 20,
        slideShadows: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="swiper">
        <div className="swiper-wrapper">
          {slideList.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="swiper-overlay"></div>
              <div className="swiper-description">
                <h1>{slide.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
                  Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Slider;
