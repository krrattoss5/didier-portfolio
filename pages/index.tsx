import About from '@/components/About'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
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
        <Projects />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage