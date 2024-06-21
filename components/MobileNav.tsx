import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  handleOpenMenu: () => void
  isOpenMenu: boolean
}

const MobileNav = ({handleOpenMenu, isOpenMenu}:Props) => {

  const navAnimation = isOpenMenu ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-link-mobile'>INICIO</div>
        <div className='nav-link-mobile'>SERVICIOS</div>
        <div className='nav-link-mobile'>SOBRE MI</div>
        <div className='nav-link-mobile'>PROYECTOS</div>
        {/* <div className='nav-link-mobile'>BLOG</div> */}
        <div className='nav-link-mobile'>CONTACTO</div>
      </div>
      <div
        onClick={handleOpenMenu}
        className='absolute cursor-pointer right-[2rem] top-[2rem] w-[2rem] h-[2rem] text-yellow-300'
      >
        <XMarkIcon />
      </div>
    </div>
  )
}

export default MobileNav