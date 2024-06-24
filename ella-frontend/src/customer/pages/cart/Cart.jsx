import React from 'react'
import CartCard from '../../components/card/CartCard'
import BillingCard from '../../components/card/BillingCard'

const Cart = () => {
  return (
    <div className='flex'>
        <section className='w-[60%] p-5 flex flex-col gap-5'>
            <CartCard/>
            <CartCard/>
            <CartCard/>
        </section>
        <section className='w-[40%] p-5'>
            <BillingCard/>
        </section>
    </div>
  )
}

export default Cart