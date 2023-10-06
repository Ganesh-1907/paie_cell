import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../Assets/MUMN.png';
import image2 from '../../Assets/crousel-2.jpg';
import image3 from '../../Assets/drug-crousel.jpg';
function Crousel(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint:500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
        <div className="crousel-container">
            <div className='Carousel-c'>
            <Slider {...settings}>
            <div className='box-c'>
              <div className="slider-container">
                <div id="crousel-image"><img src={image1} /></div>
                <div id="crousel-text">Mana Ooru Mana Niru</div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image2} /></div>
                <div id="crousel-text">INAUGURATION BY PRINCIPAL ON INTERNATIONAL YOGA DAY</div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image3}  /></div>
                <div id="crousel-text">DRUG FREE INDIA</div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image1} /></div>
                <div id="crousel-text"></div>
              </div>
            </div>

            </Slider>
            </div>
            </div>
        </>
    )
}
export default Crousel;