import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div 
    className='flex flex-col items-center justify-center  my-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id = 'About'>
        <h1 className='sm:text-6xl font-bold mb-2 text-center'>
            Un poco sobre <span className='underline underline-offset-4 decoration-1 under font-light'>mi persona.</span>
            </h1>
            <p className='text-gray-750 text-center mt-6 font-semibold text-2xl'>
                Me define mi obsesión por aprender, mejorar y superar mis propios límites. Creo firmemente que la
                programación no es solo escribir códigos, si no transformar ideas en realidades útiles e innovadoras. <span className='underline underline-offset-4 decoration-1 under font-light'>Mi objetivo
                es convertirme en uno de los mejores en mi campo.</span>
            </p>
    
            <p className='text-gray-750 text-justify mt-6 font-semibold text-2xl'>
                Busco retos que me permitan crecer, equipos donde pueda aportar valor y proyectos que generen impacto real.
                Estoy convencido de que el camino para ser excelente es nunca dejar de aprender, de experimentar y de
                atreverse a crear lo que otros no se han atrevido a intentar. <span className='underline underline-offset-4 decoration-1 under font-light'>Mi motivación es simple pero poderosa: Quiero
                dedicar mi vida a la tecnología, a innovar, construir y marcar una diferencia.</span> Soy un desarrollador enfocado en
                crear soluciones que transciendan lo ordinario,<span className='underline underline-offset-4 decoration-1 under font-light'> creando un mundo en el que me gustaría vivir y usando 
                sistemas que disfrute usar.</span>
            </p>
            <p className='text-4xl font-medium mt-6'>Stats</p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.perfil} alt="" className="mt-35 w-32 h-32 rounded-full object-cover"/>
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-750'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium'>3</p>
                            <p className='mb-6'>Proyectos terminados</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium'>Lenguajes</p>
                            <p >Java, Python, Kotlin, JavaScript</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium'>BD</p>
                            <p >Oracle, MariaDB, MySQL, PL/SQL</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium'>Metodologías</p>
                            <p>Kanban, Scrum</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium'>SO</p>
                            <p>Arch Linux, Windows</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium'>Frameworks</p>
                            <p>SpringBoot, Flask, Pandas, Numpy, Tkinter, React.js, Node.js</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default About