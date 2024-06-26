'use client'

import { useInView } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useRef } from 'react'
import CardBorder from './card-border'

const Card = ({ path, title }: { path: string | StaticImport; title: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      style={{
        scale: isInView ? '1' : '0.5',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={ref}
      className='sm:size-[400px] flex-1 max-sm:w-full '
    >
      <CardBorder duration={3000} borderRadius='12px'>
        <div className='relative max-sm:size-full w-full h-full flex flex-col gap-8 items-center justify-center bg-gradient-to-br from-[#1C233680] to-[#3D384F80] rounded-xl shadow-card max-sm:p-6 before:backdrop-blur-[32px] before:absolute before:inset-0 before:rounded-xl'>
          <Image
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(50%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
            }}
            src={path}
            alt='logo'
            className='relative size-[200px] max-sm:size-[140px]'
            width={200}
            height={200}
          />
          <p
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
            }}
            className='relative text-white text-[32px] leading-normal  max-sm:text-2xl font-medium text-center w-full font-twk-everett'
          >
            {title}
          </p>
        </div>
      </CardBorder>
    </div>
  )
}

export default Card
