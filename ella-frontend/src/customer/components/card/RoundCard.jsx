import React from 'react'

const RoundCard = (props) => {

  const brand = props.item.name;
  const image = props.item.image;

  return (
    <div className=''>
        <img className='h-40 w-40 shadow-lg rounded-full' src={image}/>
        <p className='text-center p-3 text-gray-600'>{brand}</p>
    </div>
  )
}

export default RoundCard