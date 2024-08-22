
import React, { useEffect, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstance from '../../../axiosInstance';

const Carousel = (props) => {

    const title = props.data;
    const settings = {
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

    const getProducts = async (filters) => {
        try {
            const response = await axiosInstance.post("/filter/0", filters);
            setProducts(response.data)
        } catch(error) {
            console.log("Error: ", error)
        }
    }

    let [products, setProducts] = useState([]);
    useEffect( () => {

        let filters = {};
        switch (title) {
            case "Latest": 
                filters = {sort: "date_desc", count: 10 }
                break;
            case "Top Deals": 
                filters = {sort: "discount_desc", count: 10 }
                break;
            case "Trending": 
                filters = {sort: "discount_desc", count: 10 }
                break;
            default:
                filters = {};
        }
        getProducts(filters);
        
    }, [title]);
    const items = products.map(item => (<Card item={item} />))

    return (
        <div className="ell-carousel mx-auto w-11/12 relative">
            <h2 className="text-black p-3 text-xl font-semibold">{title}</h2>
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