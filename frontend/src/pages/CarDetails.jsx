import React from 'react'
import ExploreHeader from '../components/ExplorePage/ExploreHeader'

import CarDetailsInfo from '../components/CarsComp/CarDetailsInfo'

const CarDetails = () => {
   
  return (
    <div className='min-h-screen'>
        <ExploreHeader/>
        <CarDetailsInfo/>
    </div>
  )
}

export default CarDetails