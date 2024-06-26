import MissionInfo from './components/mission-info/page'
import Product from './components/product/page'
import ReadMore from './components/read-more/page'
import Support from './components/support/page'
import Vision from './components/vision/page'

const Mission = () => {
  return (
    <div className='w-full font-twk-everett'>
      <div className='w-full sm:max-w-[917px] xl:max-w-[1440px] mx-auto sm:px-16 px-5 py-[100px] flex flex-row flex-wrap gap-4 items-start justify-start'>
        <div className='flex xl:flex-row flex-nowrap flex-col gap-4'>
          <MissionInfo />
          <Support />
        </div>
        <div className='flex xl:flex-row flex-nowrap flex-col gap-4'>
          <div className='flex 2xl:flex flex-col sm:grid sm:grid-cols-2 2xl:flex-row gap-4'>
            <ReadMore />
            <Product />
          </div>
          <Vision />
        </div>
      </div>
    </div>
  )
}

export default Mission
