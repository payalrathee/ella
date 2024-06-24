import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { hoemCarouselData } from './HomeCarouselData';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = hoemCarouselData.map(item => (<div className="item" data-value="1"><img src={item.image}></img></div>))

const HomeCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        fade:true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="ell-home-carousel my-5 mx-auto w-11/12">
            {/* <AliceCarousel
            animationType="fadeout"
            animationDuration={2000}
            disableButtonsControls
            infinite
            autoPlay
            items={items}
        /> */}

            <div className="slider-container">
                <Slider {...settings}>
                    {
                        items
                    }
                </Slider>
            </div>

        </div>

    );
}
export default HomeCarousel;