import Banner from '@/components/banner/page'
import Footer from '@/components/footer/page'
import Header from '@/components/header/page'
import KeyFeature from '@/components/key-features'
import KeyServices from '@/components/key-services'
import Mission from '@/components/mission/page'
import Scan from '@/components/scan'
import ScanToEarn from '@/components/scan-to-earn'
import SpecificallyInWoldLens from '@/components/specifically-in-worldLens'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[#000000]'>
      <Header />
      <Banner />
      <Scan />
      <SpecificallyInWoldLens />
      <KeyServices />
      <ScanToEarn />
      <Mission />
      <KeyFeature />
      <Footer />
    </main>
  )
}
