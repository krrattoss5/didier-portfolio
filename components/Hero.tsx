import React from 'react'
import Particle from './Particle'

const Hero = () => {
  return (
    <div className='h-[88vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
          HI, I`M <span className='text-yellow-400'>DIDIER!</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero