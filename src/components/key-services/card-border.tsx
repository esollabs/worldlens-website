'use client'
import { cn } from '@/utils/cn'
import React from 'react'
import MovingBorder from './moving-border'

type PropsBorderCard = Readonly<{
  borderRadius?: string
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}>

export default function CardBorder({
  borderRadius = '1.75rem',
  children,
  as: Component = 'div',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: PropsBorderCard) {
  return (
    <Component
      className={cn(
        'bg-[#D4D4D440] group relative text-xl sm:h-[400px] p-[1px] overflow-hidden max-sm:w-full',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div className='absolute inset-0' style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx='30%' ry='30%'>
          <div
            className={cn(
              'h-[600px] w-[600px] opacity-[0.8] bg-[radial-gradient(white,transparent_60%)] invisible group-hover:visible',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          'relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white text-sm antialiased w-full h-full',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
