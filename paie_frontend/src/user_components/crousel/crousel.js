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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
            breakpoint: 480,
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
                <div id="crousel-image"><img src={image1} height="300px" width="500px" /></div>
                <div id="crousel-text"><h2>Mana Ooru Mana Niru </h2></div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image2} height="300px" width="500px" /></div>
                <div id="crousel-text"><h2>INAUGURATION BY PRINCIPAL ON INTERNATIONAL YOGA DAY</h2></div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image3} height="300px" width="500px" /></div>
                <div id="crousel-text"><h2>DRUG FREE INDIA</h2></div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image1} height="300px" width="500px" /></div>
                <div id="crousel-text"><h2></h2></div>
              </div>
            </div>

            </Slider>
            </div>
            </div>
        </>
    )
}
export default Crousel;