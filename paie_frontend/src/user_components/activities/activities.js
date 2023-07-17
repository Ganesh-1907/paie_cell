import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../Assets/inner_eng.png';
import image2 from '../../Assets/uhv.png';
import image3 from '../../Assets/women_emp.png';
import image4 from '../../Assets/introduction.png';
import image5 from '../../Assets/plastic_drive.webp';
import image6 from '../../Assets/project_pavitra.jpeg';
import image7 from '../../Assets/daily_yoga.jpeg';
import image8 from '../../Assets/international_yogaday.jpg';
import image9 from '../../Assets/mananiru.jpeg';
import image10 from  '../../Assets/gtbt.jpeg';
import image11 from '../../Assets/drug_free.png';
function Activity(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
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
        <h1>ACTIVITIES</h1>
        <div className='Carousel-a'>

                <Slider {...settings}>
                <div className='box-a'>
                    <img className="activity_logo" src={image1} height="75px" width="75px" />
                    <h3>Inner Engineering</h3>
                </div>
                <div className='box-a'>
                    <img className="activity_logo" src={image7} height="75px" width="75px" />
                    <h3>Daily Yoga</h3>
                </div>
                <div className='box-a'>
                <img className="activity_logo" src={image4} height="75px" width="75px" />
                    <h3>Induction programme</h3>     
                </div>
                <div className='box-a'>
                    <img className="activity_logo" src={image6} height="75px" width="75px" />
                    <h3>Project Pavitra</h3>
                </div>
                <div className='box-a'>
                <img className="activity_logo" src={image5} height="75px" width="75px" />
                    <h3>plastic drive</h3>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image2} height="75px" width="75px" />
                    <h3>Universal Human Values</h3>
                </div>
                <div className='box-a'>
                <img className="activity_logo" src={image3} height="75px" width="75px" />
                    <h3>women empowerment</h3>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image8} height="75px" width="75px" />
                    <h3>International Yoga Day</h3>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image10} height="75px" width="75px" />
                    <h3>Good Touch & Bad Touch</h3>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image9} height="75px" width="75px" />
                    <h3>Mana Ooru Mana Neeru</h3>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image11} height="75px" width="75px" />
                    <h3>Drug Free India</h3>
                </div>
                
                </Slider>
    </div>
        </>
    )
}
export default Activity;