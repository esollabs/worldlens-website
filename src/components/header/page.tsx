'use client'
import closeIcon from '@/images/header/closeIcon.png'
import earth from '@/images/header/globe.svg'
import hamburger from '@/images/header/hamburger.png'
import logo from '@/images/header/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify'

const Header = () => {
  const data = [
    {
      id: 1,
      title: 'Home',
      href: '/',
      target: '_self',
    },
    {
      id: 2,
      title: 'Docs',
      href: 'https://drive.google.com/file/d/1OGWg-HWotkUl1YKI3IYAKXQZ-XuantwA/view',
      target: '_blank',
    },
    {
      id: 3,
      title: 'Developers',
      // href: '#',
    },
    {
      id: 4,
      title: 'Blogs',
      // href: '#',
    },
  ]
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const handleClick = () => {
    setModal(false)
    // router.push(href)
  }
  return (
    <div
      className={`w-full flex justify-center items-center sticky left-0 top-0 bg-[#0000004D] z-[100] font-twk-everett ${!modal && ' headerBlur'}`}
    >
      {!modal && (
        <div className='w-full max-w-[1440px] lg:px-[100px] md:px-[60px] py-[12px] px-[20px] md:py-[16px] flex items-center justify-between'>
          <div role='button' onClick={() => router.push('/')} className='flex items-center gap-[16px] cursor-pointer'>
            <div className='w-[40px] h-[40px]'>
              <Image src={logo} alt='logo' className='object-cover' width={40} height={40} />
            </div>
            <div className='font-bold md:leading-[28px] md:text-[24px] text-[20px] leading-[24px] text-[#fff] font-twk-everett'>
              Worldlens
            </div>
          </div>
          <div className='hidden md:flex items-center gap-[10px]'>
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className='text-[14px] font-normal leading-[17px] text-[#FFFFFFB2] py-[4px] px-[16px] hover:text-[#fff]'
                >
                  {item.href ? (
                    <Link href={item.href} target={item.target} onClick={handleClick}>
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (!item.href) {
                          toast.info('Coming soon!', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                            transition: Bounce,
                          })
                        }
                      }}
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          <div className='hidden md:flex items-center gap-[16px]'>
            <div className='hidden items-center pl-[10px] pr-[14px] py-[6px] rounded-[32px] bg-[#FFFFFF26] backdrop-blur-[13px] gap-[6px]'>
              <div className='w-[24px] h-[24px]'>
                <Image src={earth} alt='earth icon' className='object-cover' />
              </div>
              <div className='text-[14px]  font-normal leading-[17px] text-[#fff]'>EN</div>
            </div>
            <Link
              href='#footer'
              onClick={handleClick}
              className='cursor-pointer py-[8px] text-center px-[24px] bg-[#fff] hover:bg-[#333] hover:text-[#fff] hover:border-[1px] hover:border-[#fff] hover:border-solid text-[16px] font-normal leading-[19px] rounded-full text-[#000] tracking-[-0.24px]'
            >
              Get WorldLens
            </Link>
          </div>
          {!modal && (
            <div role='button' onClick={() => setModal(true)} className='md:hidden w-[48px] h-[48px] cursor-pointer'>
              <Image src={hamburger} alt='hamburger icon' className='object-cover' />
            </div>
          )}
        </div>
      )}
      {modal && (
        <div className={`fixed inset-0 bg-[#00000080]  min-h-[100vh] ${modal && 'bgBlur'} `}>
          <div className='flex justify-between items-center py-[12px] px-[20px]'>
            <div role='button' onClick={() => router.push('/')} className='flex items-center gap-[16px]'>
              <div className='w-[40px] h-[40px]'>
                <Image src={logo} alt='logo' className='object-cover' width={40} height={40} />
              </div>
              <div className='font-bold leading-[24px] text-[20px] text-[#fff] font-twk-everett'>Worldlens</div>
            </div>
            <div
              onClick={() => setModal(false)}
              role='button'
              tabIndex={0}
              className='md:hidden w-[48px] h-[48px] cursor-pointer text-[#f16c6c] font-bold text-[24px] leading-[28px] flex items-center justify-center'
            >
              <Image src={closeIcon} alt='close icon' className='object-cover' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-between gap-[60px] h-[calc(100vh-72px)] pb-[20px]'>
            <div className='flex flex-col items-center gap-[4px] w-full'>
              {data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='text-[25px] w-full flex font-bold leading-[30px] md:text-[#fff] p-[16px]'
                  >
                    {item.href ? (
                      <Link href={item.href} target={item.target} onClick={handleClick}>
                        {item.title}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          if (!item.href) {
                            toast.info('Coming soon!', {
                              position: 'bottom-right',
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: 'light',
                              transition: Bounce,
                            })
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
            <div className='flex flex-col items-center gap-[16px] px-[16px] w-full'>
              <div className='hidden items-center pl-[10px] pr-[14px] py-[6px] rounded-[32px] bg-[#FFFFFF26] backdrop-blur-[13px] gap-[6px]'>
                <div className='w-[24px] h-[24px]'>
                  <Image src={earth} alt='earth icon' className='object-cover' />
                </div>
                <div className='text-[14px] font-normal leading-[17px] text-[#fff]'>EN</div>
              </div>
              <Link
                href='#footer'
                onClick={handleClick}
                className='py-[16px] text-center px-[24px] bg-[#fff] w-full text-[16px] font-bold leading-[19px] rounded-full text-[#000]'
              >
                Get WorldLens
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
