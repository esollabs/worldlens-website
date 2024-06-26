import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef } from 'react'

interface CardProps {
  item: StaticImageData
  id: number
  onIntersect: (id: number, message: string) => void
}

const Card: React.FC<CardProps> = ({ item, id, onIntersect }) => {
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const currentRef = boxRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect
          const viewportCenter = window.innerWidth / 2
          const isIntersectingCenter = rect.right >= viewportCenter && rect.left <= viewportCenter

          if (isIntersectingCenter) {
            onIntersect(id, '1')
          }
        })
      },
      {
        threshold: Array.from(Array(101).keys(), (x) => x / 100),
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [id, onIntersect])
  return (
    <div className='w-[600px] flex justify-start mr-[300px] relative'>
      <div ref={boxRef} className='w-[300px] h-[300px] md:relative '>
        <Image src={item} alt='img' className='size-[300px]' />
      </div>
    </div>
  )
}
export default Card
