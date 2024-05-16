import About from '@/components/About'
import Hero from '@/components/Hero'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import React, { useState } from 'react'

const HomePage:React.FC = () => {

  const [isOpenMenu, SetIsOpenMenu] = useState(false)

  const handleOpenMenu = (): void => SetIsOpenMenu(!isOpenMenu)

  return (
    <div className="overflow-x-hidden">
      {/* NavBar */}
      <Nav handleOpenMenu={handleOpenMenu} />
      <MobileNav isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      {/* HeroSection */}
      <Hero />
      <div className='relative z-30'>
        {/* about */}
        <About />
      </div>
    </div>
  )
}

export default HomePage