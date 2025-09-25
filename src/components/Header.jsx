import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img.jpg')"}}id='Header'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-black'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
            max-w-3xl font-semibold pt-20'>
                Llevando ideas, códigos y diseños a la realidad.
                </h2>
            <div className='space-x-20 mt-16'>
                <a href="https://github.com/francisconimarvin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='font-semibold bg-green-800 text-black border border-white py-3 px-3 rounded'>GitHub</a>
                <a href="#Contact" className='font-semibold bg-white className=border border-white py-3 px-3 rounded'>Contáctame</a>
            </div>
        </div>
    </div>
  )
}

export default Header