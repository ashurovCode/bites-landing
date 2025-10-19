import { useState } from 'react'
import Logo from '../assets/logo.png'
import SearchIcon from '../assets/search.png'
import AccountIcon from '../assets/account.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Recipe', href: '#recipe' },
    { name: 'Community', href: '#community' },
    { name: 'About Us', href: '#about' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="bg-white static top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex-shrink-0 flex gap-2 items-center font-bold text-green-700 text-lg"
          >
            <img src={Logo} alt="Bites Logo" className="h-8 w-auto" />
            <span>Bites</span>
          </a>

          <ul className="hidden md:flex gap-14 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-[#000000] hover:text-[#F39D1A] text-[18px] font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex gap-4 items-center">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <img src={SearchIcon} alt="Search" className="h-5 w-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <img src={AccountIcon} alt="Account" className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-400 hover:bg-gray-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Search"
              >
                <img src={SearchIcon} alt="Search" className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Account"
              >
                <img src={AccountIcon} alt="Account" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
