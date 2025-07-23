import React from 'react'
import { Link, useNavigate } from 'react-router'
import {  LucideBriefcaseBusiness } from 'lucide-react';
import ProfileMenu from './ProfileMenu';
import { UserContext } from '../../context/usercontext';
import { useContext } from 'react';


const ExploreHeader = () => {
    const {UserData ,setUserData} = useContext(UserContext)
  const Navigate = useNavigate() 
  return (
    <header className='p-3 border-white border-2 bg-[var(--third-color)] flex items-center justify-between sticky top-0 z-30'>
            <h1 className="text-3xl  bg-linear-to-r from-black to-red-500 bg-clip-text text-transparent">PrimeDrive</h1>
            <nav className='flex items-center gap-5'>
                <ul className='flex gap-5 items-center text-base'>
                    <Link to={'/explore'}>Explore</Link>
                    <Link to={'/Cars'}>Cars</Link>
                    <Link to={'/favourites'}>Favourites</Link>
                    {UserData.user.role === "admin" && <Link>Promos</Link>}
                    {UserData.user.role === "admin" && <Link>Popular</Link>}
                </ul>
              
            </nav>
              <div className='flex items-center gap-5'>
                <div className='cursor-pointer' onClick={() => Navigate('/cart')}>
                  <LucideBriefcaseBusiness/>
                </div>
                   <ProfileMenu/>
                </div>
        </header>
  )
}

export default ExploreHeader