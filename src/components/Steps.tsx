import Heading from './Heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Steps = () => {
  return (
    <div>
      <Heading
        left='Steps to Obtain Cyprus Residency'
        right='Your Path to Residency in 3 Steps'
      />

      <Accordion
        className='mt-20'
        type='multiple'
        defaultValue={['item-1', 'item-2', 'item-3']}
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <p className='flex items-center gap-3'>
              <span className='font-semibold text-mainBlue text-[40px]'>
                01
              </span>
              Initial Consultation
            </p>
          </AccordionTrigger>
          <AccordionContent className='flex-col items-center justify-between lg:flex-row'>
            <p className='lg:w-[80%]'>
              Our immigration experts assess your eligibility, provide
              personalized guidance, and help you gather necessary documents.
              We’ll support you in selecting investment options that align with
              the residency requirements
            </p>
            <h3 className='text-secondaryBlue text-[40px] hidden lg:block'>
              3-4 Days
            </h3>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            <p className='flex items-center gap-3'>
              <span className='font-semibold text-mainBlue text-[40px]'>
                02
              </span>
              Property Selection and Purchase
            </p>
          </AccordionTrigger>
          <AccordionContent className='flex-col items-center justify-between lg:flex-row'>
            <p className='lg:w-[80%]'>
              We present tailored property options for review, and you may visit
              Cyprus to inspect and finalize your choice. Our team ensures a
              seamless purchasing process to secure your investment efficiently
            </p>
            <h3 className='text-secondaryBlue text-[40px] hidden lg:block'>
              3-4 Days
            </h3>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            <p className='flex items-center gap-3'>
              <span className='font-semibold text-mainBlue text-[40px]'>
                03
              </span>
              Application Submission and Approval
            </p>
          </AccordionTrigger>
          <AccordionContent className='flex-col items-center justify-between lg:flex-row'>
            <p className='lg:w-[80%]'>
              Once your application and supporting documents are submitted, a
              decision will be made within six months. Upon approval, you and
              your family can complete biometric registration and receive your
              residency cards
            </p>
            <h3 className='text-secondaryBlue text-[40px] hidden lg:block'>
              6 Months
            </h3>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Steps
