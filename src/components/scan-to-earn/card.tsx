import IcArrowRight from '@/icons/home/icon-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center p-12 w-full max-w-[744px] gap-10 bg-gradient-scan-to rounded-[48px] border border-[#3B3A4FC8] bg-gradient-to-b from-transparent via-[#3B3A4FC8] via-[79%] to-[#212533]'>
      <div className='flex flex-col gap-3.5 items-center'>
        <Image src={'/images/home/img-common-feature.png'} width={126} height={14} alt='line' />
        <h2 className='label-section leading-[40px] max-sm:leading-[30px]'>Scan to earn</h2>
      </div>
      <p className='text-center font-twk-everett text-[#B3BCBF] font-normal'>{`Discover a revolutionary way to earn by engaging with products using Worldlens’s Scan feature. By scanning barcodes and using AI to detect information, you are not only able to authenticate items but also gain points and earn tokens.`}</p>
      <Link
        href='https://drive.google.com/file/d/1OGWg-HWotkUl1YKI3IYAKXQZ-XuantwA/view'
        target='_blank'
        type='button'
        className='bg-white text-sm text-black flex gap-1 py-2 px-4 items-center justify-center rounded-full hover:bg-white/75 transition-all'
      >
        <span>Read More</span>
        <Image src={IcArrowRight} alt='icon' />
      </Link>
    </div>
  )
}
export default Card
