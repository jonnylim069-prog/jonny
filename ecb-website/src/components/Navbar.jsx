import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/monetary-policy', label: 'Monetary Policy' },
    { path: '/economic-data', label: 'Economic Data' },
    { path: '/news', label: 'News' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-ecb-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">€</span>
            </div>
            <span className="text-ecb-darkblue font-bold text-xl hidden sm:inline">ECB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-ecb-blue text-white'
                    : 'text-ecb-darkblue hover:bg-ecb-lightgray'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-ecb-lightgray rounded-lg transition-colors">
              <Globe size={20} className="text-ecb-blue" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-ecb-lightgray rounded-lg"
            >
              {isOpen ? (
                <X size={24} className="text-ecb-blue" />
              ) : (
                <Menu size={24} className="text-ecb-blue" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-ecb-blue text-white'
                    : 'text-ecb-darkblue hover:bg-ecb-lightgray'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
