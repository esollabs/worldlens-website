import Image from 'next/image'

const Support = () => {
  return (
    <div className='mission_support group p-[1px] rounded-[32px] bg-[radial-gradient(62.93%_420.2%_at_29.79%_52.21%,rgba(212,212,212,0.25)_0%,rgba(234,234,234,0.15)_100%)] h-full relative overflow-hidden'>
      <div className='w-full h-[640px] 2xl:w-[864px] sm:w-fit sm:h-[268px] rounded-[32px] bg-[rgba(16,25,48,0.5)]'>
        <div className='z-10 absolute inset-0 w-full bg-[linear-gradient(180deg,#000000_0%,rgba(71,86,109,0)_100%)] flex flex-col gap-3 px-12 pt-8 h-[150.07px]'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[rgba(255,255,255,0.7)]'></div>
            <p className='text-base sm:text-[20px] sm:leading-[30px] font-normal tracking-[-1px] text-[rgba(255,255,255,0.7)] uppercase'>
              Supported Countries
            </p>
          </div>
          <p className='text-[32px] leading-[39.07px] sm:text-[40px] font-medium sm:leading-[60px] tracking-[-2px] text-white'>
            Available in 160 countries{' '}
          </p>
        </div>
        <div className='z-10 absolute top-[291.07px] right-[59px] sm:top-[120px] sm:right-[70px] xl:top-[97.07px] lg:right-[35px] xl:right-[136.99px] px-4 py-[6px] bg-[rgba(40,43,52,0.75)] rounded-2xl'>
          <p className='text-[14px] font-normal leading-[21px] text-[rgba(96,93,105,1)] tracking-[-1px]'>Headquarter</p>
          <h4 className='text-base font-bold leading-6 text-white tracking-[-1px]'>Vietnam</h4>
        </div>
        <div className='hidden lg:block w-full 2xl:w-[788px] h-[268px] mx-auto'>
          <Image
            src='/images/mission/map.png'
            alt='map'
            width={788}
            height={268}
            className='w-full h-full block sm:group-hover:hidden object-contain'
          />
          <Image
            src='/images/mission/map-hover.png'
            alt='map'
            width={788}
            height={268}
            className='w-full h-full hidden sm:group-hover:block object-contain'
          />
          <div className='hidden absolute top-[196px] right-[123px] lg:top-[188.5px] sm:flex items-center justify-center lg:right-[91px] xl:right-[190px] dot rounded-full translate-x-1/2 -translate-y-1/2'></div>
        </div>
        <div className='sm:hidden translate-y-[106px] flex justify-end w-[calc(100%+35.31px)] h-[480px]'>
          <Image
            src='/images/mission/map-mb.png'
            alt='map'
            width={788}
            height={480}
            className='w-full h-full object-cover object-right block sm:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Support
