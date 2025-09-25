import React from 'react'
import {assets} from '../assets/assets.js'

const Projects = () => {
  return (
    <div className='container mx-auto py-4 pt-20 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
    id='Projects'>
        <h1 className='text 2xl: sm:text-4xl font-bold mb-2 text-center'>Proyectos <span className='underline underline-offset-4 decoration-1 under font-light'>completados y en curso</span></h1>
        <p className='tex-center text-gray-500 mb-8 max-w-80 mx-auto'>Creando espacios y oportunidades.</p>
    
        <div className='flex justify-end items-center mb-8'>
            <button className='cursor-pointer p-3 bg-gray-200 rounded mr-2 h-15 w-15 pl-2 hover:bg-gray-300 transition' aria-label='Siguiente'>
                <img src={assets.left_arrow} alt="Previous"/>
            </button>
            <button className='cursor-pointer p-3 bg-gray-200 rounded mr-2 h-15 w-15 pl-2 hover:bg-gray-300 transition' aria-label='Anterior'>
                <img src={assets.right_arrow} alt="Previous"/>
            </button>
        </div>

    </div>
    
  )
}

export default Projects