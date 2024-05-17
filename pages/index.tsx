import About from '@/components/About'
import Hero from '@/components/Hero'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import React, { useState } from 'react'

const HomePage:React.FC = () => {

  const [isOpenMenu, SetIsOpenMenu] = useState(false)

  const handleOpenMenu = (): void => SetIsOpenMenu(!isOpenMenu)

  return (
    <div className="overflow-x-hidden">
      <Nav handleOpenMenu={handleOpenMenu} />
      <MobileNav isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      <Hero />
      <div className='relative z-30'>
        <About />
        <Services />
        <Skills />
      </div>
    </div>
  )
}

export default HomePage