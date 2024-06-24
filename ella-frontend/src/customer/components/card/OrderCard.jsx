import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => {navigate("/account/order/1")}}>
            <Grid container className='cursor-pointer shadow-md p-5 space-x-3'>

                <Grid item xs={5} sm={2}>
                    <img className='h-28 w-28 object-cover' src="/images/women-feature-img1.jpeg"></img>
                </Grid>

                <Grid item xs={5} sm={3}>
                    <div>
                        <h1 className='text-lg font-semibold'>Lakme Bold Kajal</h1>
                        <p className='text-gray-500'>Seller: Lakme</p>
                    </div>
                </Grid>

                <Grid item xs={5} sm={2}>
                    <p className='text-green-500'>$500</p>
                </Grid>

                <Grid item xs={5} sm={3}>
                    <div>
                        <p className='text-gray-900'>Expected delivery on June 15</p>
                        <p className='text-gray-400'>Your item has been shipped</p>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard