import { DATA_KEY_FEATURE, LIST_PATH_IMAGES_KEY_FEATURE } from '@/constants'
import CardContent from './card-content'
import ImgContent from './img-content'

const KeyFeature = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
      <h2 className='label-section'>Key features</h2>

      <div className='relative sm:mt-[72px] flex max-sm:flex-col max-sm:gap-64px '>
        <div className='sticky top-[72px] sm:flex-1 h-[350px] z-10 flex justify-center'>
          {LIST_PATH_IMAGES_KEY_FEATURE.map((item, index) => {
            return <ImgContent key={item} path={item} index={index} />
          })}
          <div className='absolute left-0 -top-5 sm:hidden'>
            <div className='h-fit sticky top-0'>
              <div className='w-0.5 h-80 max-sm:h-60 bg-gradient-to-b from-black from-[30%] via-[#1882FE] via-[80%] to-[#53C1FF]'></div>
              <div
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, #325DF4 0%, rgba(255, 255, 255, 0.00) 100%)',
                }}
                className='absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full size-[22px] mix-blend-plus-lighter flex justify-center items-center max-sm:flex-col'
              >
                <div
                  style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #6DB9FF 0%, rgba(255, 255, 255, 0.00) 100%)',
                  }}
                  className='size-[10px] rounded-full mix-blend-plus-lighter'
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[rgb(30,35,43)] w-fit max-sm:hidden'>
          <div className='h-fit sticky top-0'>
            <div className='w-0.5 h-80 max-sm:h-60 bg-gradient-to-b from-black from-[30%] via-[#1882FE] via-[80%] to-[#53C1FF]'></div>
            <div
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #325DF4 0%, rgba(255, 255, 255, 0.00) 100%)',
              }}
              className='absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full size-[22px] mix-blend-plus-lighter flex justify-center items-center max-sm:flex-col'
            >
              <div
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, #6DB9FF 0%, rgba(255, 255, 255, 0.00) 100%)',
                }}
                className='size-[10px] rounded-full mix-blend-plus-lighter'
              ></div>
            </div>
          </div>
        </div>

        <div className='relative flex-1 flex flex-col gap-[350px] max-sm:gap-[120px] lg:pb-[60px] z-0'>
          {DATA_KEY_FEATURE.map((item, index) => {
            return (
              <CardContent
                index={index}
                key={item.title}
                pathImage={item.icon}
                title={item.title}
                description={item.content}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default KeyFeature
