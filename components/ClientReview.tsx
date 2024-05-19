import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

interface Props {
  image: string
  name: string
  role: string
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
      <Image src={image} alt={name} width={100} height={100} objectFit='contain' className='mx-auto mb-[2rem] rounded-full' />
      <div className='flex items-center mx-auto'>
        <StarIcon />
      </div>
    </div>
  )
}

export default ClientReview