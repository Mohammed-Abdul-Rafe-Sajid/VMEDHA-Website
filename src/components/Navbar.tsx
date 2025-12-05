import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'


interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Collaborations', path: '/collaborations' },
  { label: 'Contact', path: '/contact' },
]

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-xl'
          : 'bg-gradient-to-b from-white/30 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-royal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg"><img src="/logo.jpg" alt="logo" /></span>
              </div>
              <span className="hidden sm:inline font-bold gradient-text text-xl">
                V Medha 
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.button
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative ${
                    location.pathname === item.path
                      ? 'text-royal-600'
                      : 'text-royal-900 hover:text-royal-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent"
                      layoutId="underline"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(74, 116, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-royal-900" />
            ) : (
              <Menu className="w-6 h-6 text-royal-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-royal text-white'
                      : 'text-royal-900 hover:bg-royal-100'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              </Link>
            ))}
            <Link to="/contact" className="block">
              <motion.button
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Involved
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
