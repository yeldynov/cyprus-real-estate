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
      {/* Investment options */}
      <div className='mt-5 lg:mt-20'>
        <div className='flex flex-col w-full py-5 border-b lg:flex-row'>
          <h3 className='pr-10 mb-4 text-base font-semibold lg:text-2xl lg:w-1/3'>
            Investment in Residential Property
          </h3>
          <div className='flex flex-col gap-4 lg:w-2/3'>
            <h4 className='text-sm font-semibold lg:text-xl'>
              Secure Residency with a Home Purchase
            </h4>
            <p className='text-sm lg:text-base'>
              Purchase up to two new housing units (apartments or houses) in
              Cyprus, with a total value of at least €300,000 plus VAT. The
              properties must be purchased directly from the development
              company, and the funds must be transferred from abroad. If the
              property is sold, residency status is forfeited but can be
              retained by reinvesting in a property of equal or greater value
            </p>
          </div>
        </div>
        <div className='flex flex-col w-full py-5 border-b lg:flex-row'>
          <h3 className='pr-10 mb-4 text-base font-semibold lg:text-2xl lg:w-1/3'>
            Investment in Commercial Real Estate
          </h3>
          <div className='flex flex-col gap-4 lg:w-2/3'>
            <h4 className='text-sm font-semibold lg:text-xl'>
              Diverse Commercial Real Estate Options
            </h4>
            <p className='text-sm lg:text-base'>
              Invest in offices, shops, hotels, or a mix of commercial
              properties, with a total minimum investment of €300,000. Both new
              and resale commercial properties are eligible, providing
              flexibility in investment types
            </p>
          </div>
        </div>
        <div className='flex flex-col w-full py-5 border-b lg:flex-row'>
          <h3 className='pr-10 mb-4 text-base font-semibold lg:text-2xl lg:w-1/3'>
            Investment in a Cypriot Business
          </h3>
          <div className='flex flex-col gap-4 lg:w-2/3'>
            <h4 className='text-sm font-semibold lg:text-xl'>
              Ownership in Local Businesses
            </h4>
            <p className='text-sm lg:text-base'>
              Invest in the share capital of a Cypriot business with active
              operations and staff based in Cyprus. The business must employ at
              least five people and maintain a physical presence on the island,
              showcasing your commitment to the local economy
            </p>
          </div>
        </div>
        <div className='flex flex-col w-full py-5 border-b lg:flex-row'>
          <h3 className='pr-10 mb-4 text-base font-semibold lg:text-2xl lg:w-1/3'>
            Investment in Cypriot Collective Funds
          </h3>
          <div className='flex flex-col gap-4 lg:w-2/3'>
            <h4 className='text-sm font-semibold lg:text-xl'>
              Alternative Investment Opportunities
            </h4>
            <p className='text-sm lg:text-base'>
              Invest in shares of Cypriot Collective Investment Organizations
              (such as AIF, AIFLNP, RAIF) to meet residency requirements. This
              option allows for flexibility in asset management while
              contributing to Cyprus's economic landscape
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Path
