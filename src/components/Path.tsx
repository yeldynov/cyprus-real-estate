import Heading from './Heading'

const Path = () => {
  return (
    <section id='path'>
      <Heading
        left='We guarantee a secure path to residency'
        right='Your Security Matters'
      />
      <div className='flex flex-col gap-4 pt-12 pb-20 lg:pb-40 lg:gap-8 lg:flex-row'>
        <div className='p-6 text-white bg-mainText rounded-2xl'>
          <img className='pb-6' src='clock.svg' alt='Clock Icon' />
          <h3 className='text-xl lg:text-2xl'>Decades of Experience</h3>
          <p className='pt-4 text-sm lg:text-xl'>
            With over 30 years in investment immigration, we have assisted
            thousands of clients worldwide, making us a trusted choice in the
            field
          </p>
        </div>
        <div className='p-6 text-white bg-mainText rounded-2xl'>
          <img className='pb-6' src='globe.svg' alt='Globe Icon' />
          <h3 className='text-xl lg:text-2xl'>Global Reach</h3>
          <p className='pt-4 text-sm lg:text-xl'>
            Our international presence allows us to provide local support to
            clients in multiple countries, ensuring personalized and accessible
            service
          </p>
        </div>
        <div className='p-6 text-white bg-mainText rounded-2xl'>
          <img className='pb-6' src='star.svg' alt='Star Icon' />
          <h3 className='text-xl lg:text-2xl'>Top-Ranked in the Industry</h3>
          <p className='pt-4 text-sm lg:text-xl'>
            Recognized as a leader in investment immigration, our company is
            ranked among the top firms worldwide for quality and reliability
          </p>
        </div>
      </div>
      <Heading
        left='Investment Options for Cyprus Residency'
        right='Choose Your Investment Path'
      />
    </section>
  )
}

export default Path
