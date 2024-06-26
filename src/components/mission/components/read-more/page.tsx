'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Beat from './beat'

const ReadMore = () => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  return (
    <div
      onMouseEnter={() => {
        setIsMouseOver(true)
      }}
      onMouseLeave={() => {
        setIsMouseOver(false)
      }}
      className='mission_read_more w-full sm:w-auto bg-[radial-gradient(62.93%_420.2%_at_29.79%_52.21%,rgba(213,213,213,0.25)_0%,rgba(234,234,234,0.15)_100%)] p-[1px] rounded-[32px]'
    >
      <div className='w-full 2xl:w-[428px] h-[267px] rounded-[32px] px-8 pb-8 pt-4 flex flex-col gap-[5.12px] justify-between bg-[linear-gradient(180deg,rgba(44,16,48,0.5)_0%,rgba(113,25,135,0.5)_80.9%,rgba(182,37,194,0.5)_100%)] hover:bg-[linear-gradient(180deg,rgba(76,26,84,0.5)_0%,rgba(144,40,170,0.5)_80.9%,rgba(215,52,169,0.5)_100%)] transition-all duration-1000 backdrop-blur-[64px]'>
        <div className='relative mx-auto w-fit px-2 py-1 rounded-full bg-[rgba(255,255,255,0.1)] after:contents-[""] after:w-[9.85px] after:h-0 after:absolute after:top-[100%] after:left-[50%] after:-translate-x-1/2 after:border-t-[rgba(255,255,255,0.1)] after:border-t-[8.53px] after:border-l-[4.925px] after:border-l-transparent  after:border-r-[4.925px] after:border-r-transparent'>
          <p className='text-xs font-medium leading-[14.65px] text-[rgba(255,255,255,0.5)]'>TODAY</p>
          <div className='absolute top-[calc(100%+8.53px)] left-[50%] -translate-x-1/2 h-[111.46px] w-[1px] custom-border'></div>
        </div>
        <div className='w-full'>
          <Beat isMouseOver={isMouseOver} />
        </div>
        <div className='w-full flex flex-row gap-12 items-end justify-center'>
          <p className='text-[24px] leading-[29.3px] 2xl:text-[32px] 2xl:leading-[39.07px] font-normal tracking-[-2px] text-white'>
            Read more about our future
          </p>
          <Link
            href='https://drive.google.com/file/d/1OGWg-HWotkUl1YKI3IYAKXQZ-XuantwA/view'
            target='_blank'
            className='relative w-10 h-10 flex overflow-hidden'
          >
            <div className='scroll w-10 h-10'>
              <Image src='/icons/arrow-up.svg' width={40} height={40} alt='arrow' className='object-cover' />
            </div>
            <button className='scroll w-full h-full absolute top-[100%] left-[-100%] text-5xl leading-[72px] font-medium text-white'>
              <Image src='/icons/arrow-up.svg' width={40} height={40} alt='arrow' className='object-cover' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReadMore
