import React from 'react';
import img from "../../../assets/images/img3.jpg";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const item = props.item;

    return (
        <div onClick={() => {navigate("/product", {state: {id: item.id}})}} className='cursor-pointer flex flex-col items-center shadow-lg w-48 h-64'>
            <img className='w-full h-[60%]' src={img}></img>
            <h1 className='text-gray-900 text-center px-2 w-48 truncate'>{item.title}</h1>
            <p className='text-primary text-center px-2 w-48 truncate'>{item.brand}</p>
           <div className='flex gap-2'>
                <p className='text-gray-900 line-through font-semibold'>₹{item.price}</p>
                <p className='text-yellow-500'>{item.discount}% off</p>
                <p className='text-green-500'>₹{item.discountedPrice}</p>
           </div>
        </div>
    )
}

export default Card
