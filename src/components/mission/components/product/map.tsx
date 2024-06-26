const Map = ({ isMouseOver }: { isMouseOver: boolean }) => {
  return (
    <div
      className={`w-[calc(100%+11.26px)] ${isMouseOver ? 'h-[230px]' : 'h-[200px]'} relative overflow-x-clip transition-all duration-300 ease-in-out`}
    >
      <svg
        className='absolute top-0 right-0 transition-all duration-300 ease-in-out'
        xmlns='http://www.w3.org/2000/svg'
        width={407}
        height={isMouseOver ? 230 : 200}
        fill='none'
      >
        <path
          fill='url(#map-a)'
          d='M1 114.25s43.343 39.315 72.909 39.315c29.566 0 90.941-33.795 114.272-39.315 23.331-5.52 43.016 18.878 57.962 0 14.946-18.878 33.705-52.238 61.412-50.547 27.707 1.69 41.808-6.97 52.308-25.053C370.364 20.567 396 12.353 396 12.353V199.54H1v-85.29Z'
        />
        <path stroke='url(#map-b)' strokeDasharray='8 8' d='M396.103 12.853H1' />
        <path
          stroke='url(#map-c)'
          d='M1 114.25s43.343 39.315 72.909 39.315c29.566 0 90.941-33.795 114.272-39.315 23.331-5.52 43.016 18.878 57.962 0 14.946-18.878 33.705-52.238 61.412-50.547 27.707 1.69 41.808-6.97 52.308-25.053C370.364 20.567 396 12.353 396 12.353'
        />
        <path stroke='url(#map-d)' strokeWidth={4} d='M396.071 11.281c-9.091 6.099-29.581 13.904-36.584 28.865' />
        <circle
          cx={395.71}
          cy={11.259}
          r={11.259}
          fill='url(#map-e)'
          fillOpacity={0.5}
          style={{
            mixBlendMode: 'plus-lighter',
          }}
        />
        <circle
          cx={395.71}
          cy={11.259}
          r={6.554}
          fill='url(#map-f)'
          style={{
            mixBlendMode: 'plus-lighter',
          }}
        />
        <defs>
          <linearGradient id='map-a' x1={198.5} x2={198.5} y1={12.353} y2={199.54} gradientUnits='userSpaceOnUse'>
            <stop stopColor={`${isMouseOver ? '#FF5391' : '#538EFF'}`} />
            <stop offset={1} stopColor={`${isMouseOver ? '#3E1344' : '#131B44'}`} stopOpacity={0} />
          </linearGradient>
          <linearGradient id='map-b' x1={1} x2={396.103} y1={11.853} y2={11.853} gradientUnits='userSpaceOnUse'>
            <stop stopColor='#999' stopOpacity={0} />
            <stop offset={1} stopColor='#2C3D5F' />
          </linearGradient>
          <linearGradient id='map-c' x1={1} x2={374.606} y1={132.632} y2={-19.317} gradientUnits='userSpaceOnUse'>
            <stop stopColor={`${isMouseOver ? '#591F31' : '#1F2C59'}`} />
            <stop offset={1} stopColor={`${isMouseOver ? '#F6D' : '#41D1FF'}`} />
          </linearGradient>
          <linearGradient id='map-d' x1={365.472} x2={395.653} y1={40.814} y2={11.902} gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' stopOpacity={0} />
            <stop offset={1} stopColor='#fff' />
          </linearGradient>
          <radialGradient
            id='map-e'
            cx={0}
            cy={0}
            r={1}
            gradientTransform='rotate(90 192.225 203.485) scale(11.2595)'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff' />
            <stop offset={1} stopColor='#fff' stopOpacity={0} />
          </radialGradient>
          <radialGradient
            id='map-f'
            cx={0}
            cy={0}
            r={1}
            gradientTransform='rotate(90 192.225 203.485) scale(6.55444)'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff' />
            <stop offset={1} stopColor='#fff' stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Map
