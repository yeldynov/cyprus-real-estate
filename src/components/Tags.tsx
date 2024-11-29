const Tags = () => {
  return (
    <div className='space-y-6 lg:space-y-12'>
      <h2 className='text-xl font-semibold text-center lg:text-4xl'>
        Key Tax Benefits for Expats
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-3 lg:gap-6'>
        <span className='p-2 text-xs font-medium rounded-full lg:text-xl lg:p-6 bg-lightBlue'>
          Tax-Free Gifts
        </span>
        <span className='p-2 text-xs font-medium text-white rounded-full lg:text-xl lg:p-6 bg-secondaryBlue'>
          No Luxury Tax
        </span>
        <span className='p-2 text-xs font-medium text-white rounded-full lg:text-xl lg:p-6 bg-mainText'>
          Inheritance Tax Exemption
        </span>
        <span className='p-2 text-xs font-medium text-black rounded-full lg:text-xl lg:p-6 bg-mainBlue'>
          Dividend Income Exemption
        </span>
        <span className='p-2 text-xs font-medium text-black bg-white rounded-full lg:text-xl lg:p-6'>
          No Capital Gains Tax
        </span>
        <span className='p-2 text-xs font-medium rounded-full lg:text-xl lg:p-6 bg-lightBlue'>
          Securities Profit Exemption
        </span>
        <span className='p-2 text-xs font-medium text-white rounded-full lg:text-xl lg:p-6 bg-secondaryBlue'>
          Defense Tax Relief
        </span>
      </div>
    </div>
  )
}

export default Tags
