import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const navigate = useNavigate();

    const img = "/images/women-feature-img2.jpeg";
    return (
        <div onClick={() => {navigate("/product/1")}} className='flex gap-3 flex-col items-center shadow-lg product-card h-[300px] w-[200px]'>
            <img className='w-full h-3/5' src={img}></img>
            <h1 className='text-gray-950 px-2'>Brand</h1>
            <p className='text-gray-500 px-2 leading-4 w-[160px] truncate'>Lorem ipsum dolor Lorem .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odio.</p>
            <div className='flex gap-3 px-2'>
                <span className='text-gray-900'>₹600</span>
                <span className='line-through text-gray-300'>₹1000</span>
                <span className='text-green-500'>40% off</span>
            </div>
        </div>
    )
}

export default ProductCard
