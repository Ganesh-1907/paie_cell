import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../../Assets/inner_eng.png';
import image2 from '../../Assets/uhv.png';
import image4 from '../../Assets/introduction.png';
import image5 from '../../Assets/plastic_drive.webp';
import image6 from '../../Assets/project_pavitra.jpeg';
import image7 from '../../Assets/daily_yoga.jpeg';
import image8 from '../../Assets/international_yogaday.jpg';
import image9 from '../../Assets/mananiru.jpg';
import image10 from  '../../Assets/gtbt.jpeg';
import image11 from '../../Assets/drug_free.webp';

import projectpavitra from '../../Documents/Activities/_Project pavitra2019'
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
        <h1 className="activities">ACTIVITIES</h1>
        <h5 className="activities">Social and Development Activities Conducted by PAIE CELL</h5>
        <div className='Carousel-a'>

                <Slider {...settings}>
                <div className='box-a'>
                    <img className="activity_logo" src={image1} height="60px" width="60px" />
                    <h4>Inner Engineering</h4>
                </div>
                <div className='box-a'>
                    <img className="activity_logo" src={image7} height="60px" width="60px" />
                    <h4>Daily Yoga</h4>
                    <h6>Practice of Yoga <br/> Meditation and Pranayamas <br/> By Students and Faculty </h6>
                    <a href="">know more...</a>
                </div>
                <div className='box-a'>
                <img className="activity_logo" src={image4} height="65px" width="65px" />
                    <h4>Induction programme</h4> 
                    <h6>introducing Students to the Culture and Ambience of SRKR Engg college</h6> 
                    <a href="">know more...</a>   
                </div>
                <div className='box-a'>
                    <img className="activity_logo" src={image6} height="60px" width="60px" />
                    <h4>Project Pavitra</h4>
                    <h6>Empower girls and women with knowledge and awareness on menstrual health and hygiene.</h6>
                    <a href="">Know more...</a>
                </div>
                <div className='box-a'>
                <img className="activity_logo" src={image5} height="60px" width="60px" />
                    <h4>plastic drive</h4>
                    <h6> Say no to plastic <br/>Make the college <br/>plastic free</h6>
                    <a href="">Know more...</a>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image2} height="60px" width="60px" />
                    <h4>Universal Human Values</h4>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image8} height="60px" width="60px" />
                    <h4>International Yoga Day</h4>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image10} height="60px" width="60px" />
                    <h4>Good Touch & Bad Touch</h4>
                    <h6>protection of rights of children & initiative for rescuing and assisting children in distress</h6>
                    <a href="">Know more ...</a>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image9} height="60px" width="70px" />
                    <h4>Mana Ooru Mana Neeru</h4>
                    <h6>create awareness about importance of water bodies by cleaning the local canals</h6>
                    <a href="">Know more ...</a>
                </div>
                <div className='box-a'>  
                    <img className="activity_logo" src={image11} height="60px" width="60px" />
                    <h4>Drug Free India</h4>
                    <h6>A campaign to make India drug free</h6>
                    <a href="">Know more...</a>
                </div>
                
                </Slider>
    </div>
        </>
    )
}
export default Activity;