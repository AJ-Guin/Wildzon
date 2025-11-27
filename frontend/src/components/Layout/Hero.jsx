import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/rabbit-hero.webp'
import heroimg from '../../assets/hero-img.jpg'

 
const Hero = () => {
    return (
        <section className='relative bg-white'>
            <img src={heroimg} alt="Wildzon" className='w-full h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover' />
            <div className='absolute bg-black bg-opacity-15 inset-0 flex items-center'>
                <div className='text-left text-white p-4 md:p-12'>
                    <h1 className='text-xl xs:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-2 xs:mb-4'>
                        Be You.<br/> Be Bold..<br/> Be Seen...
                    </h1>
                    <p className='hidden md:block text-sm sm:text-lg sm:mb-6'>
                        Fashion that fits your journey, from weekend escapes to city adventures.
                    </p>
                    <Link to="#" className='bg-brand-colo text-white px-4 py-1 xs:px-6 xs:py-2 md:px-6 md:py-2 rounded-md text-xs md:text-2xl'>
                    Shop Now</Link>
                </div>
            </div>
        </section>

    )
}

export default Hero
