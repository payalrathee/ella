
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../card/Card';
// import img from "../../../assets/images/home-carousel-img1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {

  const img = '/images/women-feature-img2.jpeg'

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={img} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const items = [1,1,7,6].map(item => (<img src={img} />))

    return (
        <div className="">
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        items
                    }
                </Slider>
            </div>

        </div>
    )
}

export default ProductCarousel