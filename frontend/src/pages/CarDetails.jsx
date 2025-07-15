import React, { useContext } from 'react'
import ExploreHeader from '../components/ExplorePage/ExploreHeader'
import { CarDetailContext } from '../context/CarContext'

const CarDetails = () => {
   const {CarDetailData, setCarDetailData} = useContext(CarDetailContext)
   console.log(CarDetailData)
  return (
    <div>
        <ExploreHeader/>
    </div>
  )
}

export default CarDetails