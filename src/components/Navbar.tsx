import { useState, useEffect } from 'react'
import Logo from '/logo.png'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`${
        isScrolled ? 'bg-lightBlue' : 'bg-transparent'
      }  fixed top-0 left-0 right-0 w-full mx-auto z-50 transition-all duration-300`}
    >
      <div className='flex items-center justify-between p-4 mx-auto lg:px-10'>
        {/* Logo */}
        <a href='#' className='flex items-center'>
          <img src={Logo} className='h-12 lg:h-[70px]' alt='Logo' />
        </a>

        {/* Mobile Burger Menu Button */}
        <button
          type='button'
          className='lg:hidden hover:scale-110 focus:outline-none'
          onClick={toggleMenu}
        >
          <Menu size={40} />
        </button>

        {/* Desktop Links */}
        <div className='justify-end flex-1 hidden lg:flex'>
          <ul className='flex space-x-8 text-2xl font-bold'>
            <li>
              <a href='#about' className='text-2xl hover:text-secondaryBlue'>
                About Us
              </a>
            </li>
            <li>
              <a href='#benefits' className='text-2xl hover:text-secondaryBlue'>
                Benefits
              </a>
            </li>
            <li>
              <a href='#path' className='text-2xl hover:text-secondaryBlue'>
                Path
              </a>
            </li>
            <li>
              <a
                href='#requirements'
                className='text-2xl hover:text-secondaryBlue'
              >
                Requirements
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'fixed' : 'hidden'
        } top-0 left-0 w-full h-full bg-lightBlue bg-opacity-95 flex flex-col items-center justify-center lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          type='button'
          className='absolute text-6xl top-2 right-4 focus:outline-none'
          onClick={toggleMenu}
        >
          &times;
        </button>

        <ul className='text-xl font-bold text-center'>
          <li className='mb-4'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#about'
              className='block px-4 py-2 hover:text-gray-400'
            >
              About Us
            </a>
          </li>
          <li className='mb-4'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#benefits'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#path'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Path
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#requirements'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Requirements
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
