import { FaArrowRightLong } from 'react-icons/fa6'
import { Button } from './ui/button'

const CTA2 = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className=" h-[301px] lg:w-[480px] bg-center lg:h-[603px] rounded-t-3xl lg:rounded-l-3xl bg-no-repeat bg-[url('/cta2.png')]"></div>
      <div className='flex flex-col flex-1 px-5 py-5 space-y-6 bg-white lg:px-12 lg:py-20 rounded-b-3xl lg:rounded-r-3xl'>
        <h2 className='lg:text-[40px] text-xl lg:leading-[48px]'>
          Get Expert Consultation
        </h2>
        <p className='text-sm lg:text-xl'>
          Find out how Cyprus residency can secure a prosperous future for you
          and your family. Our team will guide you through the benefits,
          options, and processes tailored to meet your needs. Discover how an
          investment in Cyprus can offer stability, safety, and long-term value
        </p>
        <p className='flex items-center gap-2'>
          <FaArrowRightLong /> Access to EU Residency
        </p>
        <p className='flex items-center gap-2'>
          <FaArrowRightLong /> Safe Investment Opportunities
        </p>
        <p className='flex items-center gap-2'>
          <FaArrowRightLong />
          Quality Lifestyle and Services
        </p>
        <Button className='p-6 text-white bg-mainBlue w-fit rounded-xl'>
          Get a Consultation
        </Button>
      </div>
    </div>
  )
}

export default CTA2
