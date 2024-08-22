import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate();

    const { brand, desc, discount, discountedPrice, price, quantity } = props.product;
    const img = "/images/women-feature-img2.jpeg";

    return (
        <div onClick={() => {navigate("/product/1")}} className={`${quantity <= 0 ? 'opacity-50' : ''} flex gap-3 flex-col items-center shadow-lg product-card h-[300px] w-[200px]`}>
            {quantity <= 0 && <div className='text-red-700 absolute'>Out of stock</div>}
            <img className='w-full h-3/5' src={img}></img>
            <h1 className='text-gray-950 px-2'>{brand}</h1>
            <p className='text-gray-500 px-2 leading-4 w-[160px] truncate'>{desc}</p>
            <div className='flex gap-3 px-2'>
                <span className='text-gray-900'>₹{discountedPrice}</span>
                <span className='line-through text-gray-300'>₹{price}</span>
                <span className='text-green-500'>{discount}% off</span>
            </div>
        </div>
    )
}

export default ProductCard
