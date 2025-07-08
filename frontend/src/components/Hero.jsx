import { Button } from "@mui/joy"
import imghero from "../assets/pngwing.com.png"
import "./hero.css"
const Hero = () => {
  return (
    <main className='border-white border-2 bg-[var(--third-color)] flex  items-center justify-center w-[95%]   text-center  rounded-4xl ' >
        <div  data-aos="fade-right" data-aos-duration="3000">
            <h1 className='text-3xl font-bold text-center'>Drive Your Dream. Own It or Rent It.</h1>
            <p className='text-lg text-center '>Explore a premium selection of vehicles tailored to your lifestyle — whether you're looking to buy your next car or rent one for the road ahead, we’ve got you covered with unmatched deals and trusted service.</p>
            <Button sx={{ padding : "0.5rem 3rem", fontFamily : "cursive"}}>Start Now</Button>
        </div>
        <figure className="w-full max-w-lg"  data-aos="fade-left" data-aos-duration="3000">
            <img src={imghero} alt="hero image" className="w-full h-auto object-contain" />
        </figure>
    </main>
  )
}

export default Hero