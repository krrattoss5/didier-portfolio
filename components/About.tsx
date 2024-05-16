import React from 'react'

const About = () => {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] md-1rem'>ABOUT ME</h1>
          <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>
            Transforming <span className='text-yellow-400'>Visions</span>
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About