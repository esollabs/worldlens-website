import Image from 'next/image'

const ImgContent = ({ path, index }: { path: string; index: number }) => {
  return (
    <div
      // Set an ID for each image element to handle the animation event scroll.
      id={`image${index}`}
      style={{
        opacity: 0,
      }}
      className='absolute top-0 bg-black size-[350px] max-sm:h-[300px]'
    >
      <Image src={path} alt='img' fill className='max-sm:h-[300px]' />
    </div>
  )
}

export default ImgContent
