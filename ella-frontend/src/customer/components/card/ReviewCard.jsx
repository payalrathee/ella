import { Avatar, Rating } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex gap-3 p-3' style={{boxShadow:'rgb(170 170 170 / 54%) 0px 0px 3px'}}>
        <div className=''>
            <Avatar sx={{bgcolor:"green"}}>P</Avatar>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='text-gray-900 text-lg'>Payal Rathee</div>
            <div className='text-gray-400 text-sm'>June 9, 2024</div>
            <Rating className="text-yellow-500" value="4" readOnly></Rating>
            <div className='text-gray-500'>Lorem ipsum dolor sit amet.</div>
        </div>
    </div>
  )
}

export default ReviewCard