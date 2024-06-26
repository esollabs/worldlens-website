import { DATA_KEY_SERVICES } from '@/constants'
import Background from './background'
import Card from './card'

const KeyServices = () => {
  return (
    <div
      style={{
        background: 'radial-gradient(100% 100% at 50% 0%, #000 0%, #11161B 100%)',
        width: '100%',
      }}
    >
      <section className='relative flex flex-col gap-16 container items-center py-[100px] max-sm:py-[64px] mx-auto'>
        <Background />

        <h2 className='relative label-section'>Key services</h2>

        <div className='relative w-full flex flex-wrap gap-6 max-sm:flex-col'>
          {DATA_KEY_SERVICES.map((item) => (
            <Card key={item.title} path={item.path} title={item.title} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default KeyServices
