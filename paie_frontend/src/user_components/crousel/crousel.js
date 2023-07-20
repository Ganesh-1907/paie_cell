import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../Assets/MUMN.png';
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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
            <div className='Carousel-c'>
            <Slider {...settings}>
            <div className='box-c'>
              <div className="slider-container">
                <div id="crousel-image"><img src={image1} height="300px" width="650px" /></div>
                <div id="crousel-text"><h2>Mana Ooru Mana Niru </h2></div>
              </div>
            </div>
            <div className='box-c'>
                <h3>ganesh</h3>
                <h3>sreeja</h3>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image1} height="300px" width="650px" /></div>
                <div id="crousel-text"><h2>FIT INDIA CHALLENGE WINNER</h2></div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image1} height="300px" width="650px" /></div>
                <div id="crousel-text"><h2>DAILY YOGA</h2></div>
              </div>
            </div>
            <div className='box-c'>
            <div className="slider-container">
                <div id="crousel-image"><img src={image1} height="300px" width="650px" /></div>
                <div id="crousel-text"><h2></h2></div>
              </div>
            </div>

            </Slider>
            </div>
        </>
    )
}
export default Crousel;