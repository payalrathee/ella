import { StarBorder } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'

const OrderDetailCard = () => {
  return (
    <Grid container className='shadow-md p-5 space-x-5'>
        <Grid item xs={5} sm={2}>
            <img className='h-40 w-50 object-cover' src="/images/women-feature-img2.jpeg"></img>
        </Grid>
        <Grid item xs={5} sm={6}>
            <div>
                <h1 className='text-lg font-semibold'>Lakme Bold Kajal</h1>
                <p className='text-gray-500'>Seller: Lakme</p>
                <p className='text-green-500'>$500</p>
            </div>
        </Grid>
        <Grid item xs={12} sm={3}>
            <StarBorder/>
            Rate & Review Product
        </Grid>
    </Grid>
  )
}

export default OrderDetailCard