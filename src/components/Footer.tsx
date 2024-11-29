import Logo from '/logo.png'

const Footer = () => {
  return (
    <footer className='pt-10 pb-10 border-t border-gray-700'>
      {/* top */}
      <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
        {/* Logo */}
        <a href='/' className='flex mx-[19px] items-center'>
          <img src={Logo} className='h-[60px]' alt='Flowbite Logo' />
        </a>
        <div className='flex gap-5'>
          <a href='#about' className=' hover:underline'>
            About Us
          </a>
          <a href='#benefits' className=' hover:underline'>
            Benefits
          </a>
          <a href='#path' className=' hover:underline'>
            Path
          </a>
          <a href='#requirements' className=' hover:underline'>
            Requirements
          </a>
        </div>
      </div>
      {/* bottom */}
      <div className='flex flex-col items-center justify-center gap-3 pt-16 opacity-50 lg:flex-row'>
        <a
          href='https://yeldynov.tech/'
          target='_blank'
          className=' hover:underline'
        >
          © Copyright Nikita Yeldynov
        </a>
        <span className='hidden lg:block'>|</span>
        <div className='flex gap-3'>
          <a href='/' className=' hover:underline'>
            Terms & Conditions
          </a>
          <span>|</span>
          <a href='#faq' className=' hover:underline'>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
