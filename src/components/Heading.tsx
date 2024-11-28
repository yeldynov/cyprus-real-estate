type HeadingProps = {
  left: string
  right: string
}

const Heading = ({ left, right }: HeadingProps) => {
  return (
    <div className='flex flex-col justify-between w-full lg:gap-10 lg:flex-row'>
      <h2 className='lg:text-[32px] text-center lg:text-left text-xl font-bold'>
        {left}
      </h2>
      <p className='flex-1 hidden mt-3 text-2xl text-right border-b lg:block text-secondaryBlue border-secondaryBlue '>
        {right}
      </p>
    </div>
  )
}

export default Heading
