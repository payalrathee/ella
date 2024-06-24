import React from 'react'
import AddressCard from '../card/AddressCard'
import Cart from '../../pages/cart/Cart'

const OrderSummary = () => {
  return (
    <div className='flex flex-col gap-5'>
      <AddressCard/>
      <Cart/>
    </div>
  )
}

export default OrderSummary