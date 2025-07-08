import React from 'react'

const Footer = () => {
  return (
     <footer className="w-[95%]  flex flex-col  justify-center bg-[var(--third-color)] rounded-t-4xl p-5 border-2 border-white">
      <div className="flex justify-around  border-b-2 border-amber-50 pb-5">
        <div className="flex flex-col gap-3 ">
        
          <h1 className="text-3xl  bg-linear-to-r from-black to-red-500 bg-clip-text text-transparent">PrimeDrive</h1>
      
        <p className="text-black">Discover top-tier vehicles for rent or purchase, backed by trusted service and unbeatable value..</p>
      </div>
      <div className="flex flex-col gap-3 text-black max-[458px]:hidden">
        <h3 className="text-black text-lg font-bold cursor-pointer">Cars</h3>
        <p className="hover:text-gray-800 cursor-pointer">Features</p>
        <p className="hover:text-gray-800 cursor-pointer">Pricing</p>
        <p className="hover:text-gray-800 cursor-pointer">Integrations</p>
      </div>
       <div className="flex flex-col gap-3 text-black max-[458px]:hidden">
        <h3 className="text-black text-lg font-bold cursor-pointer">Company</h3>
        <p className="hover:text-gray-800 cursor-pointer">About</p>
        <p className="hover:text-gray-800 cursor-pointer">Blog</p>
        <p className="hover:text-gray-800 cursor-pointer">Careers</p>
      </div>
      </div>
      <p className="text-bold text-black text-center py-5">© 2025 PrimeDrive. All rights reserved by Anis Omri.</p>
    </footer>
  )
}

export default Footer