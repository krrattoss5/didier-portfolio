import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import React, { useState } from 'react'

const HomePage:React.FC = () => {

  const [isOpenMenu, SetIsOpenMenu] = useState(false)

  const handleOpenMenu = (): void => SetIsOpenMenu(!isOpenMenu)

  return (
    <div className="overflow-x-hidden">
      <Nav handleOpenMenu={handleOpenMenu} />
      <MobileNav isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
    </div>
  )
}

export default HomePage