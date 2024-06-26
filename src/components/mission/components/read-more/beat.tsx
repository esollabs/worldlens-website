import { useEffect, useState } from 'react'

const Beat = ({ isMouseOver }: { isMouseOver: boolean }) => {
  const [active, setActive] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  useEffect(() => {
    if (isMouseOver) {
      setActive(true)
      setIsActive(true)
      const interval = setInterval(() => {
        setActive((prev) => !prev)
      }, 300)
      return () => clearInterval(interval)
    } else {
      setIsActive(false)
      setActive(false)
    }
  }, [isMouseOver])
  useEffect(() => {
    // Function to update the state with the current window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial setting of the window width
    handleResize()

    // Add event listener to update width on resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={`w-[calc(100%+2px)] h-[102px] relative overflow-x-clip flex items-center justify-center`}>
      <svg
        className='flex items-center justify-center absolute top-0 transition-all duration-300 ease-in-out gap-1'
        xmlns='http://www.w3.org/2000/svg'
        width={windowWidth <= 1046 ? 310 : 366}
        height={102}
        fill='none'
      >
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={24.766}
          y={38.86}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={13.717}
          x={windowWidth <= 1046 ? 6.98 : 8.222}
          y={44.385}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={13.717}
          x={windowWidth <= 1046 ? 13.96 : 16.445}
          y={44.385}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={35.635}
          x={windowWidth <= 1046 ? 20.94 : 24.667}
          y={33.426}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={23.269}
          x={windowWidth <= 1046 ? 27.92 : 32.889}
          y={39.609}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 34.9 : 41.111}
          y={27.243}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={39.759}
          x={windowWidth <= 1046 ? 41.88 : 49.333}
          y={31.364}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[56.1px] translate-y-[-8.1705px]' : 'h-[39.759px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={21.609}
          x={windowWidth <= 1046 ? 48.86 : 57.556}
          y={40.439}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[30.49px] translate-y-[-4.4405px]' : 'h-[21.609px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 55.84 : 65.778}
          y={27.243}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[42.62px] translate-y-[2.69px]' : 'h-[48px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={39.96}
          x={windowWidth <= 1046 ? 62.82 : 74}
          y={31.263}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[29.56px] translate-y-[5.2px]' : 'h-[39.96px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={61.862}
          x={windowWidth <= 1046 ? 69.8 : 82.222}
          y={20.312}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[54.93px] translate-y-[3.466px]' : 'h-[61.862px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={39.96}
          x={windowWidth <= 1046 ? 76.78 : 90.445}
          y={31.263}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[29.56px] translate-y-[5.2px]' : 'h-[39.96px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={50.911}
          x={windowWidth <= 1046 ? 83.76 : 98.667}
          y={25.788}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={39.96}
          x={windowWidth <= 1046 ? 90.74 : 106.889}
          y={31.263}
          fill='#3A1352'
          rx={2.111}
          className={`${isActive ? 'h-[29.56px] translate-y-[5.2px]' : 'h-[39.96px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={39.96}
          x={windowWidth <= 1046 ? 97.72 : 115.111}
          y={31.263}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={26.802}
          x={windowWidth <= 1046 ? 104.7 : 123.333}
          y={37.842}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={26.802}
          x={windowWidth <= 1046 ? 111.68 : 131.556}
          y={37.842}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={41.817}
          x={windowWidth <= 1046 ? 118.66 : 139.778}
          y={30.335}
          fill='#3A1352'
          rx={2.111}
          className={`${active ? ' h-[41.82px]' : 'h-[14.05px] translate-y-[13.885px]'} transition-all duration-300 delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={41.817}
          x={windowWidth <= 1046 ? 125.64 : 148}
          y={30.335}
          fill='#3A1352'
          rx={2.111}
          className={`${active ? ' h-[41.82px]' : 'h-[14.05px] translate-y-[13.885px]'} transition-all duration-300 delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={26.346}
          x={windowWidth <= 1046 ? 132.62 : 156.222}
          y={38.071}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={13.717}
          x={windowWidth <= 1046 ? 139.6 : 164.444}
          y={44.385}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={39.508}
          x={windowWidth <= 1046 ? 146.58 : 172.667}
          y={31.489}
          fill='#3A1352'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 153.56 : 180.889}
          y={27.243}
          fill='#F2BEFF'
          rx={2.111}
          className={`${!active ? 'h-[48px]' : 'h-[84.37px] translate-y-[-18.185px]'} transition-all duration-300 delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={58.304}
          x={windowWidth <= 1046 ? 160.54 : 189.111}
          y={22.091}
          fill='#FFA7BC'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[58.3px]' : isMouseOver && active ? ' h-[101.6px] translate-y-[-21.65px]' : 'h-[38.17px] translate-y-[10.065px]'} transition-all duration-300 delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={27.203}
          x={windowWidth <= 1046 ? 167.52 : 197.333}
          y={37.642}
          fill='#FF70B5'
          rx={2.111}
          className={`${isActive ? 'h-[64.13px] translate-y-[-18.4635px]' : 'h-[27.203px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={27.203}
          x={windowWidth <= 1046 ? 174.5 : 205.556}
          y={37.642}
          fill='#FF3294'
          rx={2.111}
          className={`${isActive ? 'h-[39.14px] translate-y-[-5.9685px]' : 'h-[27.203px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 181.48 : 213.778}
          y={27.243}
          fill='#F845DB'
          rx={2.111}
          className={`${isActive ? 'h-[69.06px] translate-y-[-10.53px]' : 'h-[48px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={72.438}
          x={windowWidth <= 1046 ? 188.46 : 222}
          y={15.024}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[72.438px]' : isMouseOver && active ? ' h-[27.65px] translate-y-[22.394px]' : 'h-[19.07px] translate-y-[26.3915px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 195.44 : 230.222}
          y={27.243}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[48px]' : isMouseOver && active ? ' h-[48px]' : 'h-[33.1px] translate-y-[7.45px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={72.438}
          x={windowWidth <= 1046 ? 202.42 : 238.445}
          y={15.024}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[31.6px] translate-y-[20.419px]' : 'h-[72.438px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={61.565}
          x={windowWidth <= 1046 ? 209.4 : 246.667}
          y={20.461}
          fill='#CA59FF'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={83.764}
          x={windowWidth <= 1046 ? 216.38 : 254.889}
          y={9.361}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[36.54px] translate-y-[23.612px]' : 'h-[83.764px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 223.36 : 263.111}
          y={27.243}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[17.14px] translate-y-[15.43px]' : 'h-[48px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          className='max-xl:w-[2.98px] w-[4.222px]'
          width={4.222}
          height={19.15}
          x={windowWidth <= 1046 ? 230.34 : 271.333}
          y={41.668}
          fill='#CA59FF'
          rx={2.111}
        />
        <rect
          width={4.222}
          height={28.314}
          x={windowWidth <= 1046 ? 237.32 : 279.556}
          y={37.086}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[28.31px]' : isMouseOver && active ? 'h-[28.31px]' : 'h-[18.2px] translate-y-[5.055px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={28.314}
          x={windowWidth <= 1046 ? 244.3 : 287.778}
          y={37.086}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[28.314px]' : isMouseOver && active ? ' h-[22.76px] translate-y-[2.777px]' : 'h-[14.63px] translate-y-[6.842px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 251.28 : 296}
          y={27.243}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[48px]' : isMouseOver && active ? 'h-[48px]' : 'h-[30.86px] translate-y-[8.57px]'} transition-all duration-[300ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={101.282}
          x={windowWidth <= 1046 ? 258.26 : 304.222}
          y={0.602}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[39.29px] translate-y-[30.996px]' : 'h-[101.282px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={79.529}
          x={windowWidth <= 1046 ? 265.24 : 312.445}
          y={11.479}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[27.78px] translate-y-[25.875px]' : 'h-[79.529px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={48}
          x={windowWidth <= 1046 ? 272.22 : 320.667}
          y={27.243}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[48px]' : isMouseOver && active ? 'h-[10.96px] translate-y-[20px]' : 'h-[35.37px] translate-y-[6.315px]'} transition-all duration-[250ms] delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={35.635}
          x={windowWidth <= 1046 ? 279.2 : 328.889}
          y={33.426}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[35.63px]' : isMouseOver && active ? 'h-[10.96px] translate-y-[14.52px]' : 'h-[36.26px] translate-y-[-0.315px]'} transition-all duration-[250ms] delay-[50ms] ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={35.635}
          x={windowWidth <= 1046 ? 286.18 : 337.111}
          y={33.426}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[35.635px]' : isMouseOver && active ? 'h-[86.36px] translate-y-[-28.04px]' : 'h-[60.99px] translate-y-[-12.6775px]'} transition-all duration-500 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={26.019}
          x={windowWidth <= 1046 ? 293.16 : 345.333}
          y={38.234}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[26.019px]' : isMouseOver && active ? 'h-[67.23px] translate-y-[-20.6055px]' : 'h-[47.49px] translate-y-[-10.7355px]'} transition-all duration-500 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={26.019}
          x={windowWidth <= 1046 ? 300.14 : 353.556}
          y={38.234}
          fill='#CA59FF'
          rx={2.111}
          className={`${!isMouseOver ? 'h-[26.019px]' : isMouseOver && active ? 'h-[48.78px] translate-y-[-11.3805px]' : 'h-[34.46px] translate-y-[-4.2205px]'} transition-all duration-500 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <rect
          width={4.222}
          height={35.635}
          x={windowWidth <= 1046 ? 307.12 : 361.778}
          y={33.426}
          fill='#CA59FF'
          rx={2.111}
          className={`${isActive ? 'h-[25.86px] translate-y-[4.885px]' : 'h-[35.63px]'} transition-all duration-300 ease-in-out max-xl:w-[2.98px] w-[4.222px]`}
        />
        <defs>
          <filter
            id='a'
            width={36.222}
            height={80}
            x={164.889}
            y={11.243}
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity={0} result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
            <feOffset />
            <feGaussianBlur stdDeviation={8} />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0' />
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_2827_311' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_2827_311' result='shape' />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Beat
