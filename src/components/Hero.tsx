import { Button } from './ui/button'

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col gap-12 lg:flex-row'>
      <div className='flex flex-col justify-center flex-1 gap-6'>
        <h1 className='lg:text-5xl  text-3xl font-medium lg:leading-[60px]'>
          Secure Cyprus
          <br /> Citizenship with a Smart{' '}
          <span className='italic font-semibold text-skyblue'>
            Real Estate
          </span>{' '}
          Investment
        </h1>
        <p className='leading-8 lg:text-xl'>
          Invest in Cyprus real estate to gain EU citizenship, providing
          security and exceptional lifestyle benefits for you and your family.
        </p>
        <Button className='p-6 text-white bg-mainBlue w-fit rounded-xl'>
          Start Your Journey
        </Button>
      </div>

      <div className='relative lg:w-[480px]'>
        <img className='rounded-[48px]' src='hero.png' alt='Hero image' />
        <div className='absolute inset-0 bg-gradient-to-b opacity-75 from-transparent via-transparent to-[#9ad6f7] rounded-[48px]'></div>
        <img
          className='absolute w-28 h-28 top-4 right-6'
          src='logo.png'
          alt='Logo'
        />
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 flex items-center justify-between w-[90%] lg:w-[70%] max-w-md'>
          <div className='w-1/2 space-y-1 text-center'>
            <p className='text-sm text-secondaryBlue'>from</p>
            <h3 className='text-lg font-bold'>€250,000</h3>
            <p className='text-sm font-medium lg:text-normal'>
              Citizenship Pathway
            </p>
          </div>

          <div className='w-1/2 space-y-1 text-center'>
            <p className='text-sm text-secondaryBlue'>within</p>
            <h3 className='text-lg font-bold'>8 months</h3>
            <p className='text-sm font-medium lg:text-normal'>
              Citizenship Status
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
