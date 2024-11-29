import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className='relative bg-no-repeat -mx-24 h-[400px] bg-center lg:h-[563px] bg-[url("cta1.png")]'>
      <div className='pt-[56px] px-24'>
        <h2 className='lg:w-1/2 lg:text-5xl text-2xl pb-6 lg:leading-[58px] font-medium'>
          Start Your Journey to Cyprus Residency Today
        </h2>
        <Button className=' bg-mainText'>Apply Now</Button>
      </div>
    </div>
  )
}

export default CTA
