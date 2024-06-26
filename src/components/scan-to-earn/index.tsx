import ImgLine1 from '@/images/home/img-line-scan-to-1.svg'
import ImgLine from '@/images/home/img-line-scan-to.svg'
import ImgScanTo1 from '@/images/home/img-scan-to-1.svg'
import ImgScanTo2 from '@/images/home/img-scan-to-2.svg'
import ImgScanTo from '@/images/home/img-scan-to.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC } from 'react'
import Card from './card'
import Video from './video'

const Background = () => {
  return (
    <>
      <Image src={ImgLine} alt='line' />

      <div className='mx-auto w-[608px] h-[292px] relative bg-gradient-to-b from-[#43B0FF] via-[#403DDBC8] to-[#00000000] overflow-hidden'>
        <Video />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent translate-y-2 mt-1'></div>
      </div>

      <Image src={ImgLine1} alt='line' className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 ' />

      <div
        style={{
          borderRadius: 'var(--Number-0, 517.447px)',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.75) 24%, rgba(46, 95, 153, 0.75) 100%)',
          mixBlendMode: 'plus-lighter',
          filter: 'blur(32px)',
        }}
        className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[80px] bg-white/opacity-75 rounded-full blur-3xl'
      />
    </>
  )
}

const Model: FC<{ path: string | StaticImport }> = ({ path }) => {
  return (
    <>
      <div className='bg-gradient-to-b w-16 from-black to-transparent h-[300px] absolute top-[64px] left-1/2 -translate-x-1/2'></div>
      <Image src={path} alt='img' className='relative' />
    </>
  )
}

const ScanToEarn = () => {
  return (
    <section className='container flex flex-col items-center justify-center py-[100px] overflow-hidden'>
      <Card />
      <div className='relative'>
        <Background />

        <div className='absolute top-0 inset-x-0 flex justify-center items-center pt-20'>
          <div className='relative translate-y-1/4'>
            <Model path={ImgScanTo1} />
          </div>
          <div className='relative -translate-y-1/2'>
            <Model path={ImgScanTo} />
          </div>
          <div className='relative'>
            <Model path={ImgScanTo2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScanToEarn
