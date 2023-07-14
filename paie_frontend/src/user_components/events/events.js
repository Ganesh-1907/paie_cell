import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Events= () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
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



    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/events')
        .then((responce)=>{   
            setData(responce.data.sort().reverse());
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        <h1>EVENTS</h1>
        {
            data.map((item)=>{
                return(
                    <>
                        <div className='Carousel'>

                        <Slider {...settings}>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        <div className='box'>
                            <h3>1</h3>
                        </div>
                        
                        
                        
                        </Slider>
                        </div>
                    </>
                )
            })
        }
        </>
    );
}
export default Events;