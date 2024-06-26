import icon_clock from '@/images/specifically/clock.svg'
import image_search from '@/images/specifically/fan.png'
import icon_tick from '@/images/specifically/tick.svg'
import Image from 'next/image'

const SearchProduct = () => {
  return (
    <div className='w-[310px] font-twk-everett h-[660px] text-white  border-[#FFFFFF26] border absolute  rounded-[18px] p-[6px] gap-3 flex flex-col top-[30px] right-[50px] max-lg:hidden'>
      <div className='w-full z-10 flex flex-row bg-[#131A2880] border-[#FFFFFF26] py-3 pr-3 pl-[18px] rounded-[12px] items-center'>
        <input
          type='text'
          className='flex-1 bg-transparent outline-none text-[#605D69] placeholder:text-[#605D69]'
          placeholder='Search products'
        />
        <div className='w-[18px] h-[18px] relative bg-[#26334B] rounded-full flex items-center justify-center'>
          <Image src={'/images/specifically/x-icon.svg'} alt='x' fill className='cursor-pointer object-cover' />
        </div>
      </div>

      <div className='flex flex-col gap-3 px-[6px] overflow-hidden'>
        <h3 className=' font-bold text-[12px] leading-[15px] '>Popular</h3>
        <div className='flex flex-row gap-[7.5px]'>
          <div className='border border-[#605D69] py-[3px] px-[9px] rounded-[6px] text-[12px] leading-[18px] text-[#FFFFFFB2] text-nowrap'>
            Bottle of Water
          </div>
          <div className='border border-[#605D69] py-[3px] px-[9px] rounded-[6px] text-[12px] leading-[18px] text-[#FFFFFFB2] text-nowrap'>
            Television
          </div>
          <div className='border border-[#605D69] py-[3px] px-[9px] rounded-[6px] text-[12px] leading-[18px] text-[#FFFFFFB2] text-nowrap'>
            Laptop
          </div>
          <div className='border border-[#605D69] py-[3px] px-[9px] rounded-[6px] text-[12px] leading-[18px] text-[#FFFFFFB2] text-nowrap'>
            Bottle of Water
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 py-3 px-[6px] w-full'>
        <h3 className=' font-bold text-[12px] leading-[15px] '>Recent Searches</h3>
        <div className='flex flex-col gap-3 w-full'>
          <div className='w-full flex flex-row items-center h-[36px]'>
            <div className='flex gap-3 flex-row items-center flex-1 h-full'>
              <div className='w-9 h-9'>
                <Image src={image_search} alt='search-item' className='object-cover' />
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-[3px] items-center text-[12px] font-bold leading-[15.6px] '>
                  Dreo Fans
                  <div className='w-[18px] h-[18px]'>
                    <Image src={icon_tick} alt='search-item' className='object-cover' />
                  </div>
                </div>

                <div className=' text-[#9F9EA4]  text-[10px] font-bold leading-[12.8px]'>Dreo • China</div>
              </div>
            </div>
            <div className='w-[18px] z-[10] h-[18px] relative cursor-pointer text-[#9F9EA4]'>
              <Image src={'/images/specifically/x-icon.svg'} fill alt='x' className=' object-cover' />
            </div>
          </div>

          <div className='w-full flex flex-row items-center h-[36px] '>
            <div className='flex gap-3 flex-row items-center flex-1 h-full'>
              <div className='w-9 h-9'>
                <Image src={image_search} alt='search-item' className='object-cover' />
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-[3px] items-center text-[12px] font-bold leading-[15.6px] text-white'>
                  Dreo Fans
                  <div className='w-[18px] h-[18px]'>
                    <Image src={icon_tick} alt='search-item' className='object-cover' />
                  </div>
                </div>

                <div className=' text-[#9F9EA4]  text-[10px] font-bold leading-[12.8px]'>Dreo • China</div>
              </div>
            </div>
            <div className='w-[18px] z-[10] h-[18px] relative cursor-pointer text-[#9F9EA4]'>
              <Image src={'/images/specifically/x-icon.svg'} fill alt='x' className=' object-cover' />
            </div>
          </div>
          <div className='flex flex-row items-center gap-[9px] font-normal text-[10.5px] leading-[13px]'>
            <div className='flex flex-row items-center gap-[9px] flex-1'>
              <div className='w-6 h-6'>
                <Image src={icon_clock} alt='clock' className='object-cover' />
              </div>
              korean spicy noodles
            </div>
            <div className='w-[18px] z-[10] h-[18px] relative cursor-pointer text-[#9F9EA4]'>
              <Image src={'/images/specifically/x-icon.svg'} fill alt='x' className=' object-cover' />
            </div>
          </div>

          <div className='flex flex-row items-center gap-[9px] font-normal text-[10.5px] leading-[13px]'>
            <div className='flex flex-row items-center gap-[9px] flex-1'>
              <div className='w-6 h-6'>
                <Image src={icon_clock} alt='clock' className='object-cover' />
              </div>
              korean spicy noodles
            </div>
            <div className='w-[18px] z-[10] h-[18px] relative cursor-pointer text-[#9F9EA4]'>
              <Image src={'/images/specifically/x-icon.svg'} fill alt='x' className=' object-cover' />
            </div>
          </div>

          <div className='flex flex-row items-center gap-[9px] font-normal text-[10.5px] leading-[13px]'>
            <div className='flex flex-row items-center gap-[9px] flex-1'>
              <div className='w-6 h-6'>
                <Image src={icon_clock} alt='clock' className='object-cover' />
              </div>
              korean spicy noodles
            </div>
            <div className='w-[18px] z-[10] h-[18px] relative cursor-pointer text-[#9F9EA4]'>
              <Image src={'/images/specifically/x-icon.svg'} alt='x' fill className=' object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchProduct
