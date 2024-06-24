import React from 'react'
import { useNavigate } from 'react-router-dom'

const BillingCard = () => {
    const navigate = useNavigate();

    return (
        <div className='shadow-md flex flex-col gap-5 p-3'>
            <p className='text-gray-900 text-2xl pb-2 border-b-2'>Price Details</p>
            <div className='flex justify-between'>
                <p className='text-gray-500'>PriceChange(3 item)</p>
                <p className='text-green-500'>$1500</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Discount</p>
                <p className='text-green-500'>$500</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Delivery Charges</p>
                <p className='text-green-500'>Free</p>
            </div>
            <div className='flex justify-between pt-2 border-t-2'>
                <p className='text-gray-500'>Total Amount</p>
                <p className='text-green-500'>$1000</p>
            </div>
            <div onClick={() => { navigate('/checkout/2') }} className='ell-btn'>Check Out</div>
        </div>
    )
}

export default BillingCard