import { URL_VIDEOS_BG_SCAN } from '@/constants'

export default function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload='auto'
      className='mix-blend-plus-lighter origin-center rotate-90 h-[608px] w-full object-fill mx-auto'
    >
      <source src={URL_VIDEOS_BG_SCAN} type='video/mp4' />
    </video>
  )
}
