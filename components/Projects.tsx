import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h2 data-aos='fade-up' className='heading'>Pro<span className='text-yellow-400'>jects</span></h2>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>

        <Link href='https://figma-clone-dusky.vercel.app/'>
          <div data-aos='fade-up'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
              <Image src='/images/p1.jpg' alt='easy design' layout='fill' className='object-contain'/>
            </div>
          </div>
        </Link>

        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p2.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p3.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p4.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p5.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
        <div data-aos='fade-up'>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image src='/images/p1.jpg' alt='easy design' layout='fill' className='object-contain'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects