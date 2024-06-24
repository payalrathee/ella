import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from '../../components/card/OrderCard'

const Order = () => {

    const orderStatusFilters = [
        {
            label: 'On the way',
            value: 'onTheWay'
        },
        {
            label: 'Delivered',
            value: 'delivered'
        },
        {
            label: 'Cancelled',
            value: 'cancelled'
        },
        {
            label: 'Returned',
            value: 'returned'
        }
    ]

    return (
        <Grid container className='m-5 space-x-5'>
            <Grid item xs={12} sm={2} className='shadow-md p-5'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-900 border-b-2 pb-2 font-semibold text-lg'>Filters</h1>
                    <h2 className='text-gray-700'>Order Status</h2>
                    {
                        orderStatusFilters.map(option => (
                            <div className='flex gap-3'>
                                <input type="checkbox" value={Option.value} />
                                <label className='text-gray-400'>{option.label}</label>
                            </div>
                        ))
                    }
                </div>
            </Grid>

            <Grid item xs={12} sm={9}>
                <div className='flex flex-col gap-5'>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            </Grid>
        </Grid>
    )
}

export default Order