import Heading from './Heading'

const Requirements = () => {
  return (
    <section className='space-y-12' id='requirements'>
      <Heading
        left='Program Requirements'
        right='Conditions for Cyprus Residency'
      />
      <div className='flex lg:h-[230px] flex-col lg:flex-row'>
        <div className="lg:w-[434px] bg-contain h-[230px] bg-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none bg-no-repeat bg-[url('/purchase.png')]"></div>
        <div className='flex flex-col flex-1 px-5 py-5 space-y-6 bg-white lg:px-12 lg:py-10 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl'>
          <h3 className='lg:text-xl text-base font-semibold lg:leading-[30px]'>
            Investment in Residential or Commercial Property
          </h3>
          <ul className='px-5 list-disc'>
            <li className='text-sm lg:text-base'>
              Minimum purchase of €300,000 plus VAT.
            </li>
            <li className='text-sm lg:text-base'>
              Only new properties from the developer are eligible.
            </li>
            <li className='text-sm lg:text-base'>
              Property options include one or more residential units or a mix of
              residential and commercial properties (e.g., apartment + shop)
            </li>
          </ul>
        </div>
      </div>
      <div className='flex lg:h-[230px] flex-col lg:flex-row'>
        <div className="lg:w-[434px] bg-contain h-[230px] bg-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none bg-no-repeat bg-[url('/eligibility.png')]"></div>
        <div className='flex flex-col flex-1 px-5 py-5 space-y-6 bg-white lg:px-12 lg:py-10 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl'>
          <h3 className='lg:text-xl text-base font-semibold lg:leading-[30px]'>
            Requirements for Residency Applicants
          </h3>
          <ul className='px-5 list-disc'>
            <li className='text-sm lg:text-base'>
              No criminal record in any country.
            </li>
            <li className='text-sm lg:text-base'>
              Restricted from employment in Cyprus but can own businesses.
            </li>
            <li className='text-sm lg:text-base'>
              Demonstration of personal annual income of €50,000, plus €15,000
              for a spouse and €10,000 for each dependent child
            </li>
          </ul>
        </div>
      </div>
      <div className='flex lg:h-[260px] flex-col lg:flex-row'>
        <div className="lg:w-[434px] bg-contain h-[260px] bg-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none bg-no-repeat bg-[url('/compliance.png')]"></div>
        <div className='flex flex-col flex-1 px-5 py-5 space-y-6 bg-white lg:px-12 lg:py-10 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl'>
          <h3 className='lg:text-xl text-base font-semibold lg:leading-[30px]'>
            Periodic Presence and Document Compliance
          </h3>
          <ul className='px-5 list-disc'>
            <li className='text-sm lg:text-base'>
              Applicants must visit Cyprus within a year of PR approval to
              complete biometrics.
            </li>
            <li className='text-sm lg:text-base'>
              Family members included in the application must visit Cyprus at
              least once every two years.
            </li>
            <li className='text-sm lg:text-base'>
              Applicants under EU sanctions or with misrepresented information
              are ineligible.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Requirements
