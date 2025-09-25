import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets.js"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if(showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px32 bg-transparent'>
            <img className='h-25 w-25 brightness-90' src={assets.oniLogo} alt="" />
            <ul className='hidden md:flex gap-7 text-black'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Sobre mí</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Capacidades</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Contáctame</a>
            </ul>
            <img onClick={()=> setShowMobileMenu(true)} src={assets.menuLogo} alt="" className='md:hidden w-7 cursor-pointer'/>
        </div>
        {/* Menu para dispositivos small*/}
        <div className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-black transition-transform duration-800 ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>
            <div className='flex justify-end p-6'>
                <img onClick={()=> setShowMobileMenu(false)} src={assets.cross} className='w-12 cursor-pointer transition-all' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium  text-white'>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='cursor-pointer px-4 py-2 rounded-full inline-block  hover:bg-green-900 hover:text-black transition-colors duration-300'>Home</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='cursor-pointer px-4 py-2 rounded-full inline-block  hover:bg-green-900 hover:text-black transition-colors duration-300'>Sobre mí</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='cursor-pointer px-4 py-2 rounded-full inline-block  hover:bg-green-900 hover:text-black transition-colors duration-300'>Capacidades</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='cursor-pointer px-4 py-2 rounded-full inline-block  hover:bg-green-900 hover:text-black transition-colors duration-300'>Contáctame</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar