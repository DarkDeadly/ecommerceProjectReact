import { Button } from '@mui/joy'
import "./rentaldeal.css"
import {CarFeatures} from "../util/util"
import CarCard from './CarCard'
const RentalDeals = () => {
  return (
    <section className='border-white border-2 bg-black  w-[95%]   text-center  rounded-4xl  text-white p-5' data-aos="fade-left" data-aos-duration="3000">
        <div className = "flex justify-between gap-4 items-center anounce">
            <h1 className='flex-1 text-3xl font-bold'>Best Car <span className='text-yellow-500'>Deals</span> in Our Company</h1>
            <p className='flex-1 text-lg '>Looking for a rental car ? Check out our selection of cars available for rent with  flexible terms and competititve rates</p>
            <div className='flex-1'><Button  color="success" sx={{ padding : "0.5rem 3rem", fontFamily : "cursive"}}>View All</Button></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 feature  '>
            {CarFeatures.map((feature , index) => (
                <CarCard key={index} feature = {feature}/>
            ))}
        </div>
    </section>
  )
}

export default RentalDeals