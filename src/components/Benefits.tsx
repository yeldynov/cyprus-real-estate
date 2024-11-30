import Heading from './Heading'

const Benefits = () => {
  return (
    <section className='hidden lg:block' id='benefits'>
      <Heading
        left='Key Benefits of Cyprus Residency'
        right='Why Choose Cyprus'
      />

      <div className='flex flex-col gap-4 mt-10 overflow-hidden lg:flex-row lg:gap-8'>
        <div className='flex flex-col gap-4 lg:gap-8'>
          <div className='relative h-[467px] overflow-hidden flex flex-col gap-4 p-8 bg-lightBlue rounded-3xl'>
            <h3 className='text-2xl font-semibold'>Quick Residency Approval</h3>
            <p className='text-xl'>
              Obtain Cyprus residency in as little as 6 to 8 months
            </p>
            <img
              className='absolute scale-125 opacity-50 -left-5 -bottom-16'
              src='/hand-clock.png'
              alt='Hand holds big clock'
            />
          </div>
          <div className='flex flex-col gap-4 p-8 text-white h-fit bg-[#4AB9F2] rounded-3xl'>
            <h3 className='text-2xl font-semibold'>
              Simple Application Process
            </h3>
            <p className='text-xl'>
              Complete most steps remotely, requiring only one visit for
              biometrics
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col gap-4 p-8 text-white h-fit rounded-3xl bg-mainBlue'>
            <h3 className='text-2xl font-semibold'>Secure Investment</h3>
            <p className='text-xl'>
              Invest in appreciating assets with potential rental income and
              long-term growth
            </p>
          </div>
          <div className='flex flex-col flex-1 gap-4 p-8 text-white h-fit sm:row-start-2 rounded-3xl bg-mainText'>
            <img
              className='w-20 mb-20 brightness-200'
              src='/controls.png'
              alt='Hand holds big clock'
            />
            <h3 className='text-2xl font-semibold'>
              Access to the EU Lifestyle
            </h3>
            <p className='text-xl'>
              Enjoy European standards of healthcare, education, and safety
            </p>
          </div>
        </div>
        <div className='flex flex-col text-right overflow-hidden relative bg-gradient-to-b from-[#B3D7F9] to-white lg:h-auto h-[500px]  gap-4 p-8 text-mainText sm:row-start-1 rounded-3xl'>
          <h3 className='text-2xl font-semibold'>
            High-Quality Real Estate Option
          </h3>
          <p className='text-xl'>
            Choose from premium properties including apartments, villas, and
            townhouses
          </p>
          <div className='absolute top-[220px] -left-[510px] '>
            <img
              className='object-cover w-[1000px] h-[600px]'
              src='/urban.png'
              alt='Urban Houses'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
