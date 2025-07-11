import React from 'react'
import { Link } from 'react-router'
import {  LucideBriefcaseBusiness } from 'lucide-react';
import ProfileMenu from './ProfileMenu';


const ExploreHeader = () => {
   
  return (
    <header className='p-3 border-white border-2 bg-[var(--third-color)] flex items-center justify-between '>
            <h1 className="text-3xl  bg-linear-to-r from-black to-red-500 bg-clip-text text-transparent">PrimeDrive</h1>
            <nav className='flex items-center gap-5'>
                <ul className='flex gap-5 items-center text-base'>
                    <Link to={'/explore'}>Explore</Link>
                    <Link>Cars</Link>
                    <Link>Favourites</Link>
                </ul>
              
            </nav>
              <div className='flex items-center gap-5'>
                    <LucideBriefcaseBusiness/>
                   <ProfileMenu/>
                </div>
        </header>
  )
}

export default ExploreHeader