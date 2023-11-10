import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function Crousel(){
  const [data,sdata]=useState([]);
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
      useEffect(()=>
      {
          axios.post("https://paiecell.onrender.com/photos")
          .then((res)=>
          {
              sdata(res.data)
          })
      })
    return(
        <>
        <div className="crousel-container">
            <div className='Carousel-c'>
            <Slider {...settings}>
            {
              data.map((val)=>
              (
                <div className='box-c'>
                  <div className="slider-container">
                    <div id="crousel-image"><img src={val.Link} /></div>
                    <div id="crousel-text">{val.imageName}</div>
                  </div>
                </div>
              ))
            }
            </Slider>
            </div>
            </div>
        </>
    )
}
export default Crousel;