import ImgBG from '@/images/home/img-bg-key-services.svg'
import Image from 'next/image'

const Background = () => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      <Image
        src={ImgBG}
        alt='background'
        className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3 max-sm:max-w-[140%]'
      />
    </div>
  )
}

export default Background
