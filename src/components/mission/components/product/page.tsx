'use client'
import { useState } from 'react'
import Map from './map'
const Product = () => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  return (
    <div
      onMouseEnter={() => {
        setIsMouseOver(true)
      }}
      onMouseLeave={() => {
        setIsMouseOver(false)
      }}
      className='mission_product w-full 2xl:w-fit bg-[radial-gradient(62.93%_420.2%_at_29.79%_52.21%,rgba(213,213,213,0.15)_0%,rgba(234,234,234,0.1)_100%)] p-[1px] rounded-[32px]'
    >
      <div className='group relative w-full 2xl:w-[393px] h-[267px] rounded-[32px] px-8 pt-6 flex flex-col gap-7 2xl:gap-4 justify-start bg-[rgba(23,32,56,0.5)] transition-all duration-1000'>
        <h3 className='text-[20px] leading-[30px] sm:text-[24px] sm:leading-9 font-normal text-[rgba(255,255,255,0.7)] whitespace-nowrap'>
          Total Products
        </h3>
        <div className='relative overflow-hidden'>
          <p className='text-[48px] leading-[72px] sm:text-2xl 2xl:text-[48px] 2xl:leading-[72px] font-medium text-white scroll'>
            24.5M
          </p>
          <p className='absolute top-[100%] text-[48px] leading-[72px] sm:text-2xl 2xl:text-[48px] 2xl:leading-[72px] font-medium text-white scroll'>
            24.5M
          </p>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-[calc(100%+11.26px)] 2xl:w-[405.97px] 2xl:h-[199.54px] 2xl:group-hover:w-[405.97px] 2xl:group-hover:h-[229.54px] transition-all duration-300 ease-in-out flex items-end justify-end`}
        >
          <Map isMouseOver={isMouseOver} />
          {/* <MapHover /> */}
        </div>
      </div>
    </div>
  )
}

export default Product
