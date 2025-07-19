import React from 'react'
import ExploreHeader from '../components/ExplorePage/ExploreHeader'
import CartList from '../components/cartComponent/CartList'

const CartPage = () => {
  return (
    <div className = 'h-screen flex flex-col'>
        <ExploreHeader/>
      <div className='flex-1'>
         <CartList/>
      </div>
         
       
    </div>
  )
}

export default CartPage