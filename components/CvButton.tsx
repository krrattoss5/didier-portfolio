import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import React from 'react'

const CvButton = () => {

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '../Didier Pereira FullStack Web Developer.pdf'
    link.download = 'Didier Pereira FullStack Web Developer.pdf'
    link.click()
  }

  return (
    <button
      onClick={handleDownload}
      data-aos='fade-up'
      className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
      <p>Descargar Cv</p>
      <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
    </button>
  )
}

export default CvButton