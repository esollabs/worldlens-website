'use client'
import spotlight from '@/images/banner/spotlight.png'
import Image from 'next/image'
import React from 'react'
import BannerAnimate from './banner-animate'

function VideoBanner() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload='auto'
      className='mix-blend-plus-lighter origin-center h-full w-full md:object-fill object-cover mx-auto'
    >
      <source src='/video/background.mp4' type='video/mp4' />
    </video>
  )
}

const Banner: React.FC = () => {
  return (
    <div className='w-full md:h-[450px] h-[80vh] relative overflow-hidden flex justify-center ite'>
      <VideoBanner />
      <div className='absolute inset-0 wrapper'></div>
      <div className='absolute inset-0 left-0 top-0 flex justify-center items-center'>
        <BannerAnimate />
        <div className={`absolute w-[640px] h-[464px] z-[3] bottom-0 flex justify-center  opacity-60`}>
          <Image priority src={spotlight} alt='spotlight' className='object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Banner
