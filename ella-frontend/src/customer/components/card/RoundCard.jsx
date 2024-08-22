import React from 'react'
import { useNavigate } from 'react-router-dom';

const RoundCard = (props) => {

  const brandId = props.item.id;
  const brand = props.item.name;
  const image = props.item.image;
  const navigate = useNavigate();
  const state = {
    filters: {
      brands: [brandId],
      category: [],
      price: '',
      minDiscount: '',
      stock: '',
      sort: '',
    }
  }

  return (
    <div className='cursor-pointer' onClick={() => navigate("/products", {state: state})}>
        <img className='h-40 w-40 shadow-lg rounded-full' src={image}/>
        <p className='text-center p-3 text-gray-600'>{brand}</p>
    </div>
  )
}

export default RoundCard