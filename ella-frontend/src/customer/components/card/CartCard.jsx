import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';

const CartCard = () => { 
  return (
    <div className='flex gap-5 shadow-md p-3'>
        <div className='flex flex-col gap-3'>
            <div>
                <img className='w-40 h-40 object-cover' src="/images/women-feature-img1.jpeg"/>
            </div>
            <p className='flex justify-evenly'>
                <AddCircleOutlineIcon sx={{color: 'green'}}/>
                <div className='text-gray-900 w-10 text-center' style={{boxShadow:'rgb(170 170 170 / 54%) 0px 0px 4px'}}>1</div>
                <RemoveCircleOutlineIcon/>
            </p>
        </div>
        <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-2xl'>Lakme Bold Kajal</h3>
            <p className='text-gray-500'>Seller: Lakme</p>
            <div className='flex gap-3'>
                <p className='text-gray-900'>$500</p>
                <p className='text-gray-400 line-through'>$1000</p>
                <p className='text-green-500'>50% off</p>
            </div>
            <div className='ell-btn mt-3'>Remove</div>
        </div>
    </div>
  )
}

export default CartCard