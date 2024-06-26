const Scan = () => {
  return (
    <div className='w-full max-w-[1440px] bg-[url("/images/scan/light-scan.png")] max-sm:bg-[url("/images/scan/mobile-light.png")] bg-contain bg-no-repeat gap-8  border-scan max-sm:px-[20px] xl:items-center max-sm:pt-[32px] max-sm:pb-[48px] py-[32px] px-[60px] 2xl:px-[120px] flex flex-row max-lg:flex-col sm:justify-between'>
      <div className='font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 flex-1'>
        <span className='text-indigo-500 inline-flex flex-col h-[calc(36px*theme(lineHeight.tight))] sm:h-[calc(72px*theme(lineHeight.tight))] overflow-hidden'>
          <ul className='block font-sohne animate-text-slide-4 text-left leading-tight [&_li]:block'>
            <li
              className={`font-semibold  bg-gradient-to-r from-[#E8FCFF] via-[#8ACDFE] to-[#529DF4] text-transparent bg-clip-text text-[100px] max-sm:text-[50px] leading-[85px] max-sm:leading-[40px] `}
            >
              Discover.
            </li>
            <li
              className={`font-semibold bg-gradient-to-r from-[#E8FCFF] via-[#8ACDFE] to-[#529DF4] inline-block text-transparent bg-clip-text text-[100px] max-sm:text-[50px] leading-[85px] max-sm:leading-[60px] `}
            >
              Reward.
            </li>
            <li
              className={`font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#B4B4B4] inline-block text-transparent bg-clip-text text-[100px] max-sm:text-[50px] leading-[85px] max-sm:leading-[60px] `}
            >
              Learn.
            </li>

            <li
              aria-hidden='true'
              className={`font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#B4B4B4] inline-block text-transparent bg-clip-text text-[100px] max-sm:text-[50px] leading-[85px] max-sm:leading-[60px] `}
            >
              Scan.
            </li>
          </ul>
        </span>
      </div>
      <p className='flex-1 text-[#9AADB4] text-[16px] leading-6 font-twk-everett'>
        Unlock Trust, Earn Rewards: Scan, authenticate, and earn tokens effortlessly. Transparency meets innovation.
        Join us on the journey!
      </p>
    </div>
  )
}

export default Scan
