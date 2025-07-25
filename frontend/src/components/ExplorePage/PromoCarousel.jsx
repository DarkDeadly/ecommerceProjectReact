import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const PromoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }
const queryClient = useQueryClient();
queryClient.invalidateQueries(['cars']);
  const GetPromoCars = async() => {
  try {
      const response  = await axios.get(import.meta.env.VITE_BACKENDURLCAR + "/promo")
    return response.data
  } catch (error) {
    console.log(error)
  }
  }

  const {status , error , data }  = useQuery({
    queryKey : ['cars'] , 
    queryFn : GetPromoCars
  })

 
 
  return (
    <section className="w-[98%] h-[50vh]" >
      <Slider {...settings}>
        {data?.cars?.map((car, index) => (
          <div key={index}>
            <div
              className="h-[50vh] rounded-xl bg-center bg-cover text-white flex flex-col justify-between p-5"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${car.imageUrl})`
              }}
            >
              <div className="flex justify-between">
                <h1 className="text-4xl">{car.name}</h1>
                <p className="text-4xl font-bold text-red-500">{car.Promo} %</p>
              </div>
              <div className="flex justify-center gap-10 pb-4">
                <p className="text-3xl font-bold line-through text-red-500">{car.price} DT</p>
                <p className="text-3xl font-bold">{car.price -(car.price * car.Promo)/100} DT</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default PromoCarousel
