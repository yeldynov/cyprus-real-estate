const Offer = () => {
  return (
    <div className='flex flex-col gap-6 lg:gap-12 lg:flex-row'>
      <div className='flex flex-col gap-6 lg:gap-12 lg:flex-row'>
        <div className='lg:w-[273px] items-center justify-center flex flex-col gap-6'>
          <h4 className='w-full text-xl border-b lg:text-2xl border-secondaryBlue text-secondaryBlue'>
            Our Offer
          </h4>
          <h3 className='text-xl font-semibold lg:text-3xl'>
            Exclusive Benefits of Cyprus Residency
          </h3>
        </div>
        <div className='lg:w-[336px]'>
          <img src='/offer.png' alt='Happy couple walking down the street' />
        </div>
      </div>
      <div className='lg:w-[400px] flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4 pb-6 bg-[url("/controls.png")] bg-no-repeat'>
          <h4 className='text-sm font-semibold lg:text-xl'>
            01 Fast and Accessible Residency
          </h4>
          <p className='text-sm lg:text-base leading-[30px]'>
            Obtain legal residency in Cyprus through a streamlined investment
            process, with minimal requirements and fast approval
          </p>
        </div>
        <div className='flex flex-col gap-4 pb-6 bg-[url("/controls.png")] bg-no-repeat'>
          <h4 className='text-sm font-semibold lg:text-xl'>
            02 Family Inclusion Benefits
          </h4>
          <p className='text-sm lg:text-base leading-[30px]'>
            Extend residency benefits to your spouse and children under 25,
            ensuring a secure future for your entire family
          </p>
        </div>
        <div className='flex flex-col gap-4 pb-6 bg-[url("/controls.png")] bg-no-repeat'>
          <h4 className='text-sm font-semibold lg:text-xl'>
            03 Pathway to Citizenship
          </h4>
          <p className='text-sm lg:text-base leading-[30px]'>
            After 8 years of residency, you may apply for Cypriot citizenship,
            offering a stable and prosperous future in the EU
          </p>
        </div>
      </div>
    </div>
  )
}

export default Offer
