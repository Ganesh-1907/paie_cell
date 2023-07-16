import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../Assets/paie.png';
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
                <div className="crousel-text"><h1>FIT INDIA CHALLENGE WINNER</h1></div>
                <div className="crousel-image"><img src={image1} /> </div>
            </div>
            <div className='box-c'>
                <h3>ganesh</h3>
                <h3>sreeja</h3>
            </div>
            <div className='box-c'>
                <h3>plastic drive</h3>
            </div>
            <div className='box-c'>
                <h3>women empowerment</h3>
            </div>
            <div className='box-c'>
                <h3>menstrual cycle</h3>
            </div>
            <div className='box-c'>
                <h3>manasa ganga ashram</h3>
            </div>

            </Slider>
            </div>
        </>
    )
}
export default Crousel;