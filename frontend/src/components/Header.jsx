import { Button } from '@mui/joy'
import { Link } from 'react-router'
import './header.css'
const Header = () => {
  return (
   
        <header className='border-white border-2 bg-[var(--third-color)] flex items-center justify-between w-[95%] rounded-2xl'>
            <h1 className="text-3xl  bg-linear-to-r from-black to-red-500 bg-clip-text text-transparent">PrimeDrive</h1>
            <nav className='flex items-center gap-5'>
                <ul className='flex gap-5 items-center text-base'>
                    <Link>Home</Link>
                    <Link>Contact Us</Link>
                    <Link>About Us</Link>
                </ul>
                <div className='flex items-center gap-5'>
                    <Button  sx={{ padding : "0.5rem 3rem", fontFamily : "var(--button-font)"}}>Login</Button>
                    <Button  sx={{ padding : "0.5rem 3rem", fontFamily : "var(--button-font)"}}>Join Us</Button>
                </div>
            </nav>
        </header>
   
  )
}

export default Header