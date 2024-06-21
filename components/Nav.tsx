import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  handleOpenMenu: () => void
}

const Nav:React.FC<Props> = ({handleOpenMenu}) => {
  return (
    <div className='w-[100%] fixed top-0 h-[12vh] bg-[#141c27] shadow-md z-[10000000000]'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
          PORTFOLIO
          <span className='text-yellow-300'>DEV</span>
        </h1>
        <div className='nav-link'>INICIO</div>
        <div className='nav-link'>SERVICIOS</div>
        <div className='nav-link'>SOBRE MI</div>
        <div className='nav-link'>PROYECTOS</div>
        {/* <div className='nav-link'>BLOG</div> */}
        <div className='nav-link'>CONTACTO</div>
        <div onClick={handleOpenMenu}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
        </div>
      </div>
    </div>
  )
}

export default Nav