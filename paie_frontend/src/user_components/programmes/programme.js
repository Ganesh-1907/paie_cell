import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
 function Programme(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
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
        <h1 className="courses">Programmes</h1>
        <h5 className="courses">Courses/Programmes Conducted by PAIE CELL in Association with ART OF LIVING</h5>
                        <div className='Carousel-p'>

                <Slider {...settings}>
                <div className='box-p'>

                    <h2>Youth Empoverment  Skills(YES+)</h2>
                    <p>Be More Attentive</p>
                    <p>Have Better Self-Control</p>
                    <p>De-stress and Relax</p>
                    <p>Be more Self-Aware</p>
                    <p>Discover Breathing Tools for better life</p>
                    <p>Relieve Stress & feel Happier in 60 minutes</p>
                    
                </div>
                <div className='box-p'>
                    <h2>Advanced Meditation  Programme</h2>
                    <p>Experience deep Meditations</p>
                    <p>Explore Meaningful Silence</p>
                    <p>Relieve Emotional Stress</p>
                    <p>Enhance Immunity</p>
                    <p>Unlock Creativity</p>
                    <p>Experience Higher Level of Energy</p>
                </div>
                <div className='box-p'>
                    <h2>Happieness Programme</h2>
                    <p>Boost Immunity and Health</p>
                    <p>Ability to Manage Mind</p> 
                    <p>Relieve Stress,Anxiety & Depression</p> 
                    <p>Live with Joy and Purpose</p>
                    <p>Increase Stamina</p> 
                    <p>Experience the evidence based breathing meditation</p>                
                </div>
                <div className='box-p'>
                    <h2>Dynamism For Self And Nation</h2>  
                    <p>Break your Barriers</p>
                    <p>Overcome your Fears</p>   
                    <p>Experience Limitless  Possibilities of  Your Mind</p>
                    <p>Expand your Capabilities</p>
                    <p>Access the Power with You</p> 
                    <p>Explore the role that You could play in creating a positive change in society</p>             
                </div>
                <div className='box-p'>                    
                    <h2>Intution Programme</h2>
                    <p>Think creatively and innovate</p>
                    <p>Take better decisions intuitively</p>
                    <p>Have a relaxed yet dynamic frame of mind</p>
                    <p>Develop an Intuition which guides them in every aspect of their life</p>
                    <p>Interest in Academics</p>
                    <p>Hyper Activity</p>
                </div>
                <div className='box-p'>                    
                    <h2>Sahaj Samadi Course</h2>
                    <p>Unlock Intuitive Skills</p>
                    <p>Enhance Peace of Mind</p>
                    <p>Improve Physical Health</p>
                    <p>Boost Mental Clarity</p>
                    <p>Meditation Technique Based on Personal Mantra</p>
                    <p>Key Principles of Meditation</p>
                </div>
                </Slider>
                </div>
        
        </>
    )
 }
 export default Programme;