'use client'

import appStore from '@/images/footer/appStore.png'
import chPlay from '@/images/footer/chPlay.png'
import Image from 'next/image'
import Link from 'next/link'

const MENU = [
  {
    id: 0,
    title: 'General',
    items: [
      {
        id: 0,
        title: 'Home',
        link: '/',
      },
      {
        id: 1,
        title: 'Donate',
        link: '',
      },
    ],
  },
  {
    id: 1,
    title: 'Company',
    items: [
      {
        id: 0,
        title: 'About Us',
        link: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Social',
    items: [
      {
        id: 0,
        title: 'Twitter/X',
        link: 'https://x.com/WorldLens_IO',
      },
      {
        id: 1,
        title: 'Telegram',
        link: '',
      },
    ],
  },
]

const Contact = () => {
  return (
    <div className='flex flex-col gap-8 justify-start'>
      <h5 className='text-[16px] leading-[19.2px] font-bold text-[rgba(251,254,255,1)] tracking-[-0.24px] whitespace-nowrap'>
        Subscribe to the Worldlens newsletter
      </h5>
      <form>
        <input
          type='email'
          className='w-full bg-transparent py-2 border-b border-[rgba(255,255,255,0.33)] text-sm font-normal leading-[16.8px] text-white  placeholder:text-[rgba(139,141,147,1)] outline-none focus:outline-none'
          placeholder='Enter your email'
        />
        <input type='submit' hidden />
      </form>
    </div>
  )
}

const CopyRight = () => {
  return (
    <div className='w-full py-0 lg:py-[23px]'>
      <p className='text-sm font-normal leading-[16.8px] text-[rgba(255,255,255,0.48)]'>
        ©️ 2023 Worldlens. All Rights Reserved.
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div id='footer' className='font-twk-everett w-full relative z-10 bg-black'>
      <div className='w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,#000000_100%)]'>
        <div className='w-full lg:max-w-[1440px] mx-auto lg:px-[100px] lg:pt-16 lg:pb-8 px-8 py-5 flex flex-col lg:flex-row gap-16 items-start justify-start'>
          <div className='flex flex-col gap-16 justify-start w-full lg:w-[800px]'>
            <div className='flex flex-row gap-4 items-center justify-start'>
              <Image src='/icons/logo.svg' width={40} height={40} alt='logo' />
              <p className='text-[24px] font-bold leading-[28.8px] text-white'>Worldlens</p>
            </div>
            <div className='block lg:hidden'>
              <Contact />
            </div>
            <div className='w-full justify-between flex flex-row lg:gap-[160px] items-start lg:justify-start'>
              {MENU.map((menu) => (
                <div key={`menu_${menu.id}`} className='flex flex-col gap-8 justify-start'>
                  <h5 className='text-base font-normal leading-[19.2px] text-[rgba(251,254,255,1)]'>{menu.title}</h5>
                  <div className='flex flex-col gap-4 justify-start'>
                    {menu.items.map((item) => (
                      <Link
                        key={`menu_${menu.id}_item_${item.id}`}
                        href={item.link}
                        target='_blank'
                        className='no-underline text-sm font-normal leading-[16.8px] text-[rgba(139,141,147,1)] hover:text-[rgba(251,254,255,1)]'
                        rel='noreferrer'
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='hidden lg:block'>
              <CopyRight />
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-16 justify-start'>
            <div className='hidden lg:block'>
              <Contact />
            </div>
            <div className='flex flex-col gap-4 justify-start'>
              <h5 className='text-[18px] leading-[21.6px] font-bold tracking-[-0.36px] text-white'>Get Worldlens</h5>
              <a
                href='https://install.appcenter.ms/users/vuhuy6471-gmail.com/apps/worldlens/distribution_groups/external%20tester'
                target='_blank'
                rel='noreferrer'
              >
                <Image src={chPlay} width={221.09} height={73.86} alt='app-store' />
              </a>
              <a href='https://testflight.apple.com/join/SwJGlwES' target='_blank' rel='noreferrer'>
                <Image src={appStore} width={221.09} height={65.17} alt='app-store' />
              </a>
            </div>
            <div className='block lg:hidden'>
              <CopyRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
