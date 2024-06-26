'use client'

import { useState } from 'react'
import Marquee from 'react-fast-marquee'
import Card from './card-banner'
//Images
import ImgBarCode from '@/images/banner/nft.png'
import ImgBarCode1 from '@/images/banner/nft1.png'
import ImgBarCode2 from '@/images/banner/nft2.png'
import ImgNFT from '@/images/banner/nftActive.png'
import ImgNFT1 from '@/images/banner/nftActive1.png'
import ImgNFT2 from '@/images/banner/nftActive2.png'
import portal from '@/images/banner/portal.png'
import Image from 'next/image'
const BannerAnimate = () => {
  const DATA1 = [ImgBarCode1, ImgBarCode2, ImgBarCode].reverse()
  const DATA2 = [ImgNFT, ImgNFT2, ImgNFT1]
  const [active, setActive] = useState(false)
  const handleIntersect = (id: number, message: string) => {
    if (message == '1') {
      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, 1500)
    }
  }
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
      <div
        className={`absolute w-[300px] h-[360px] z-[2] mix-blend-plus-lighter overflow-hidden ${active ? 'visible' : 'invisible'} `}
      >
        <div className={`relative w-full h-full`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className='mix-blend-plus-lighter origin-center h-full w-full mx-auto object-cover ml-[65px] opacity-70'
          >
            <source src='/video/bar.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='absolute w-[250px] z-10 h-[370px] flex justify-end items-center ml-[63px]'>
        <Image src={portal} alt='line icon' className='object-cover' />
      </div>
      <section className='overflow-hidden relative flex justify-center items-center'>
        <Marquee direction='right' speed={200} autoFill>
          {DATA1.map((item, index) => {
            return <Card item={item} key={item.src} id={index} onIntersect={handleIntersect} />
          })}
        </Marquee>

        <div className='absolute top-0 left-0 flex w-1/2 overflow-hidden'>
          <div className='w-full h-full relative justify-center items-center'>
            <Marquee direction='right' speed={200} autoFill>
              {DATA2.map((item, index) => {
                return <Card item={item} key={item.src} id={index} onIntersect={handleIntersect} />
              })}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerAnimate
