
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../card/Card';
import img from "../../../assets/images/home-carousel-img1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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


    const items = [1, 2, 1, 2, 1, 0, 9, 8, 7, 6].map(item => (<Card image_src={img} />))

    return (
        <div className="ell-carousel mx-auto w-11/12 relative">
            <h2 className="text-black p-3 text-xl font-semibold">Top Deals</h2>
            <div className="slider-container shadow-md p-10">
                <Slider {...settings}>
                    {
                        items
                    }
                </Slider>
            </div>

        </div>
    )
}

export default Carousel