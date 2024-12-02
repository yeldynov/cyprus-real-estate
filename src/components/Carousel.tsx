import Heading from './Heading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const CarouselCustom = () => {
  return (
    <section id='about' className=''>
      <Heading
        left='Why Cyprus is the Right Choice for Investors'
        right='Our relevance'
      />

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {' '}
            <div className='flex flex-col mt-12 lg:gap-8 lg:flex-row'>
              <div className='flex flex-col items-center justify-center flex-1 p-12 space-y-6 bg-mainBlue rounded-[48px] rounded-br-none'>
                <h2 className='text-xl font-medium lg:text-5xl'>
                  Stable and Secure Environment
                </h2>
                <p className='text-xl'>
                  Cyprus offers a safe lifestyle with financial stability,
                  affordable living, and top-tier healthcare and education. Its
                  welcoming community and Mediterranean climate make it ideal
                  for long-term residence.
                </p>
              </div>
              <div className='w-[480px] hidden lg:block h-[603px] bg-no-repeat relative bg-[url("/carousel-1.png")]'>
                <p className='absolute px-6 py-4 w-[80%] text-center text-xl transform -translate-x-1/2 bg-white rounded-3xl bottom-10 left-1/2'>
                  Financial Stability and Quality Living
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            {' '}
            <div className='flex flex-col mt-12 lg:gap-8 lg:flex-row'>
              <div className='flex flex-col items-center justify-center flex-1 p-12 space-y-6 bg-mainBlue rounded-[48px] rounded-br-none'>
                <h2 className='text-xl font-medium lg:text-5xl'>
                  Tax Advantages for Investors
                </h2>
                <p className='text-xl'>
                  Cyprus provides a business-friendly tax system, featuring one
                  of Europe’s lowest corporate tax rates at 12.5% and exemptions
                  for non-residents, making it a prime location for
                  international entrepreneurs
                </p>
              </div>
              <div className='w-[480px] hidden lg:block h-[603px] bg-no-repeat relative bg-[url("/carousel-2.png")]'>
                <p className='absolute px-6 py-4 w-[80%] text-center text-xl transform -translate-x-1/2 bg-white rounded-3xl bottom-10 left-1/2'>
                  Low Corporate Taxes
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            {' '}
            <div className='flex flex-col mt-12 lg:gap-8 lg:flex-row'>
              <div className='flex flex-col items-center justify-center flex-1 p-12 space-y-6 bg-mainBlue rounded-[48px] rounded-br-none'>
                <h2 className='text-xl font-medium lg:text-5xl'>
                  High Safety Standards and Developed Infrastructure
                </h2>
                <p className='text-xl'>
                  With low crime rates, quality infrastructure, and English as a
                  common language, Cyprus offers a comfortable and accessible
                  living environment, ideal for both families and business
                  professionals
                </p>
              </div>
              <div className='w-[480px] hidden lg:block h-[603px] bg-no-repeat relative bg-[url("/carousel-3.png")]'>
                <p className='absolute px-6 py-4 w-[80%] text-center text-xl transform -translate-x-1/2 bg-white rounded-3xl bottom-10 left-1/2'>
                  Safe and Comfortable Living
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default CarouselCustom
