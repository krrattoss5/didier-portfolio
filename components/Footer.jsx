import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <div className='border-b-[1px] pb-[6rem] border-gray-400 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
        <div className='flex items-center space-x-6 '>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <MapIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h3 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Address</h3>
            <p className='text-[17px] w-[90%] text-white opacity-60'>Lorem, ipsum dolor sit amen</p>
          </div>
        </div>
        <div className='flex items-center space-x-6 '>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h3 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Phone</h3>
            <p className='text-[17px] w-[90%] text-white opacity-60'>+57321548976 <br />
            +57466895117</p>
          </div>
        </div>
        <div className='flex items-center space-x-6 '>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <EnvelopeIcon className='md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h3 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Address</h3>
            <p className='text-[17px] w-[90%] text-white opacity-60'>krrattoss5@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20 hover:opacity-100">
          React Developer Didier Pereira 2024 | Todos los derechos reservados.
        </div>
        <div className='flex items-center space-x-10'>
          <p className='text-[16px] text-white opacity-20 hover:opacity-100'>Terms & Conditions</p>
          <p className='text-[16px] text-white opacity-20 hover:opacity-100'>Privacy Policy</p>
          <p className='text-[16px] text-white opacity-20 hover:opacity-100'>Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer