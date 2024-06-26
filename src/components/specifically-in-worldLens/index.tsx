'use client'
import { useRouter } from 'next/navigation'
import SearchProduct from './search-product'
//Images
import explore from '@/images/specifically/Explore.png'
import bg_scan from '@/images/specifically/bg-scan.png'
import bg from '@/images/specifically/bg.png'
import img_chart from '@/images/specifically/chart.png'
import img_scan from '@/images/specifically/image-scan.png'
import title from '@/images/specifically/specifically.png'
import Image from 'next/image'
const SpecificallyInWoldLens = () => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-[48px] md:gap-[80px] py-[64px] px-[20px] md:py-[120px] md:px-[100px] max-w-[1440px] overflow-hidden'>
      <div className='flex flex-col text-center gap-[40px] w-full items-center '>
        <div className='flex flex-col gap-3.5 w-full '>
          <div className='flex items-center justify-center w-full'>
            <Image src={title} alt='header' width={104} className='object-cover' />
            {/* <div className='textGradient'>Specifically in</div> */}
          </div>
          <h2 className='label-section leading-[40px] max-sm:leading-[30px]'>WorldLens</h2>
        </div>
        <p className='max-sm:w-full md:w-[721.41px] text-[#B3BCBF] text-[16px] leading-6 font-twk-everett'>
          Step into the future where real-world assets meet the new digital era. By leveraging the power of DePIN, AI,
          and blockchain technology, Worldlens unlocks possibilities for people to interact with blockchain by scanning
          real-life products.
        </p>
      </div>

      <div className='relative w-full '>
        <div className='border border-[#FFFFFF14] w-full gap-[10px] p-3 bg-[#FFFFFF0D] rounded-[48px] relative'>
          <div className='border border-[#FFFFFF1A] bg-[#5587B50D] rounded-[40px] h-[540px] max-sm:h-[512px] relative sm:overflow-hidden'>
            {/* Scan animation */}
            <div className='h-full w-full absolute inset-0 overflow-hidden rounded-[40px] z-0'>
              <Image src={bg} alt='bg-scan' fill className='object-cover' />
            </div>
            <div className='md:w-[419px] w-full h-[333px] max-sm:w-full max-sm:h-[334px] bg-cover relative mt-[77px] mx-auto md:block flex justify-center'>
              <div className='absolute inset-0 w-full h-full overflow-hidden'>
                <Image src={bg_scan} alt='bg-scan' fill sizes='auto' className='z-0 object-fill' />
              </div>
              <div className='w-[481px] h-[451px] absolute md:-left-[50px] -bottom-1 max-sm:bottom-8'>
                <Image src={img_scan} alt='scan' className='rotate-[3.45deg] shadow scale-[1.25] object-cover' />
              </div>
              <div className='absolute w-full h-full top-0 left-0 overflow-hidden'>
                <div className='absolute w-full h-[150px] bg-[linear-gradient(180deg,#73C4FF_0%,rgba(42,127,255,0.90)_10%,rgba(36,26,143,0.00)_100%)] border-t-[2px] border-[#21FFFF] mix-blend-lighten opacity-25 animate-scan'></div>
              </div>
            </div>
            {/* Search */}
            <SearchProduct />
          </div>
        </div>

        <div className='flex flex-col -top-[15px] absolute left-[65px] max-lg:hidden gap-10'>
          <div className='w-[309px] h-[210px] overflow-auto rounded-[16px]'>
            <Image src={img_chart} alt='chart' className='object-cover' />
          </div>

          <div className='overflow-auto rounded-[16px] w-[310px] h-[365px]'>
            <Image src={explore} alt='chart' className='object-cover' />
          </div>
        </div>
        {/* Background */}
        <div className='absolute w-full h-full inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]' />

        {/* Buttom */}
        <div className='absolute bottom-0 items-center justify-center flex w-full font-twk-everett '>
          <div className='bg-gradient-to-br from-[#5481B540] to-[#1D2D6940] border border-[#454E5A26] flex flex-col p-4 gap-3 rounded-[16px] w-[312px] text-center'>
            <p className='text-[12px] leading-[18px] text-[#9AADB4]'>Scan any product and earn rewards!</p>
            <button
              onClick={() => router.push('#footer')}
              className=' bg-[#2183F6] p-3 h-10 text-[13.5px] leading-4 rounded-full font-medium text-white hover:opacity-75 transition-opacity'
            >
              Get Worldlens
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificallyInWoldLens
