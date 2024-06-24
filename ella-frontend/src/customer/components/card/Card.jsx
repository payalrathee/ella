import React from 'react';
import img from "../../../assets/images/img3.jpg";
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => {navigate("/product/1")}} className='cursor-pointer flex flex-col items-center shadow-lg w-48 h-64'>
            <img className='w-full' src={img}></img>
            <h1 className='text-gray-900 px-2'>Brand</h1>
            <p className='text-gray-600 w-48 px-2 truncate'>Lorem ipsum dolor Lorem ..</p>
        </div>
    )
}

export default Card
