const MissionInfo = () => {
  return (
    <div className='bg-[radial-gradient(62.93%_420.2%_at_29.79%_52.21%,rgba(213,213,213,0.25)_0%,rgba(234,234,234,0.15)_100%)] p-[1px] rounded-[32px]'>
      <div className='w-full xl:w-[428px] rounded-[32px] p-8 xl:p-12 flex flex-col gap-8 justify-start bg-[linear-gradient(180deg,#FF729C_0%,#FF3773_17.4%,#B4085A_100%)] hover:bg-[linear-gradient(180deg,#FF7AA2_0%,#FF6392_17.4%,#DA1F6E_100%)] transition-all duration-1000 shadow-[0px_-2px_2px_0px_rgba(255,255,255,0.25)_inset,0px_8px_12px_0px_rgba(255,247,60,0.5)_inset] hover:shadow-[0px_-2px_2px_0px_rgba(255,255,255,0.25)_inset,0px_8px_12px_0px_rgba(255,255,120,0.5)_inset]'>
        <h3 className='text-[32px] leading-[39.07px] sm:text-[40px] sm:leading-[48.84px] font-medium tracking-[-2px] text-white'>
          Mission
        </h3>
        <p className='text-[16px] leading-[20.8px] sm:text-[18px] sm:leading-[23.4px] font-normal text-[rgba(255,255,255,0.75)]'>
          Our mission at Worldlens is to bring the world’s information to blockchain and make the process universally
          accessible and decentralized.
        </p>
      </div>
    </div>
  )
}

export default MissionInfo
