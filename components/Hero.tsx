import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import CvButton from './CvButton'

const Hero = () => {
  return (
    <div className='h-[88vh] bg-[url("/images/banner.jpg")] mt-[8vh] bg-cover bg-center'>
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 data-aos='fade-left' className='text-[35px] md:text-[50px] text-white font-bold'>
            HOLA, SOY <span className='text-yellow-400'>DIDIER!</span>
          </h1>
          <TextEffect />
          <p  data-aos='zoom-in' className='mt-[1.5rem] text-[22px] text-[#ffffff92]'>Desarrollador FullStack(PERN),
           orientado principalmente a
           React con background en SEO onPage!</p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <CvButton />
          </div>
        </div>
        <div
          data-aos='zoom-in'
          className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src='/images/u1.jpg' alt='user' layout='fill' className='object-cover rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Hero