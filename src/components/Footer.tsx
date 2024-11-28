import Logo from '/logo.png'

const Footer = () => {
  return (
    <footer className='pt-10 pb-20 border-t border-gray-700'>
      {/* top */}
      <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
        {/* Logo */}
        <a href='/' className='flex mx-[19px] items-center'>
          <img src={Logo} className='h-[60px]' alt='Flowbite Logo' />
        </a>
        <div className='flex gap-5'>
          <a href='#about' className='text-lg hover:underline'>
            About Us
          </a>
          <a href='#benefits' className='text-lg hover:underline'>
            Benefits
          </a>
          <a href='#path' className='text-lg hover:underline'>
            Path
          </a>
          <a href='#requirements' className='text-lg hover:underline'>
            Requirements
          </a>
        </div>
      </div>
      {/* bottom */}
      <div className='flex flex-col items-center justify-center gap-5 pt-16 opacity-50 lg:flex-row'>
        <a
          href='https://yeldynov.tech/'
          target='_blank'
          className='text-lg hover:underline'
        >
          © Copyright Nikita Yeldynov
        </a>
        <span>|</span>
        <a href='/' className='text-lg hover:underline'>
          Terms & Conditions
        </a>
        <span>|</span>
        <a href='#faq' className='text-lg hover:underline'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
