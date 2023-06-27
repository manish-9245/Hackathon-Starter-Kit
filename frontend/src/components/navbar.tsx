import { useState } from 'react'
import HackathonLogo from '../../public/Hackathon.png'
import Image from 'next/image'
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className="sticky top-0">
  <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
    <a href='https://github.com/manish-9245/Hackathon-Starter-Kit' className='flex items-center'>
      <Image
        src={HackathonLogo}
        width={80}
        height={80}
        quality={100}
        alt='Hackathon Logo'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        Hackathon Starter Kit
      </span>
    </a>
    <button
      data-collapse-toggle='navbar-default'
      type='button'
      className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      aria-controls='navbar-default'
      aria-expanded='false'
    >
      <span className='sr-only'>Open main menu</span>
      <svg
        className='w-6 h-6'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clip-rule='evenodd'
        ></path>
      </svg>
    </button>
    <div id='navbar-default' className="hidden md:block">
      <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-900'>
        <li>
          <a
            href='#'
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
            aria-current='page'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark: dark:hover:text-white md:dark:hover:bg-transparent'
          >
            Login/SignUp
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar