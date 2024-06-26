'use client'
import useScreen from '@/hooks/useScreen'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useRef } from 'react'

const CardContent = ({
  pathImage,
  title,
  description,
  index,
}: {
  pathImage: string
  title: string
  description: string
  index: number
}) => {
  const ref = useRef(null)
  const screen = useScreen()

  const isMobile = useCallback(() => {
    return screen && screen.width < 760
  }, [screen])()

  const configMobile: ScrollOffset = ['center end', 'end end']
  const configDesktop: ScrollOffset = ['end end', 'center center']

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? configMobile : configDesktop,
  })

  // Updating the scrollYProgress value makes re-rendering smoother
  const opacity = useSpring(scrollYProgress)

  useMotionValueEvent(opacity, 'change', (latest) => {
    const elementImage = document.getElementById(`image${index}`)

    // Update the opacity of the image element if it exists
    if (elementImage) {
      elementImage.style.opacity = latest
    }
  })

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity,
      }}
      className='flex-1 flex flex-col p-8 gap-4 min-h-[349px] justify-center'
    >
      <Image alt='path Image' width={36} height={36} src={`/assets/icons/key-features/${pathImage}.png`} />

      <h3 className=' text-white text-2xl max-sm:text-xl font-medium font-twk-everett'>{title}</h3>

      <p className=' text-[#B3BCBF] text-sm font-normal font-twk-everett leading-[21px]'>{description}</p>
    </motion.div>
  )
}

export default CardContent
