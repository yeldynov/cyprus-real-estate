import Benefits from './components/Benefits'
import Carousel from './components/Carousel'
import CTA from './components/CTA'
import CTA2 from './components/CTA2'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Path from './components/Path'
import Requirements from './components/Requirements'
import Steps from './components/Steps'
import Tags from './components/Tags'

function App() {
  return (
    <div className='min-h-screen bg-[#EBF5FB] font-lato text-mainText'>
      <main className='p-5 mx-auto lg:p-24 max-w-7xl space-y-[60px] lg:space-y-[160px]'>
        <Hero />
        <Carousel />
        <Offer />
        <Benefits />
        <Tags />
        <CTA />
        <Path />
        <Requirements />
        <Steps />
        <CTA2 />
        <Footer />
      </main>
    </div>
  )
}

export default App
