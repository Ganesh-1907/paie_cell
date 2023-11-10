import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function Activity()
{
  const [data,sdata]=useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3500,
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
      useEffect(()=>
    {
        axios.post("https://paiecell.onrender.com/actiphotos")
        .then((res)=>
        {
            sdata(res.data)
        })
    })
    return(
        <>
        <h1 className="activities">ACTIVITIES</h1>
        <h5 className="activities">Social and Development Activities Conducted by PAIE CELL</h5>
        <div className='Carousel-a'>

                <Slider {...settings}>
                {
                  data.map((val)=>
                  (
                    <div className='box-a'>
                    <img className="activity_logo" src={val.Link} height="60px" width="60px" />
                    <h4>{val.Theme}</h4>
                    <h6>{val.Description}</h6>
                </div>
                  ))
                }
                </Slider>
    </div>
        </>
    )
}
export default Activity;