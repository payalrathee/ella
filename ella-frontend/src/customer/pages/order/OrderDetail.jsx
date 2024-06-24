import React from 'react'
import AddressCard from '../../components/card/AddressCard'
import { Step, StepLabel, Stepper } from '@mui/material'
import OrderDetailCard from '../../components/card/OrderDetailCard';

const OrderDetail = () => {

    const activeStep = 2;
    const steps = ['Order Placed', 'Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

    return (
        <div className='flex flex-col gap-10 m-10'>
            <div className='shadow-md p-5'>
                <h1>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='shadow-md p-5'>
                <Stepper activeStep={activeStep}>
                    {
                        steps.map(item => (
                            <Step key={item}>
                                <StepLabel>{item}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
            </div>
            <div className='flex-col flex gap-5'>
                <OrderDetailCard/>
                <OrderDetailCard/>
                <OrderDetailCard/>
            </div>
        </div>
    )
}

export default OrderDetail