import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vmedha-cbit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vmedha-cbit/?viewAsMember=true', label: 'LinkedIn' },
    { icon: Instagram , href: 'https://www.instagram.com/cbit.vmedha/', label: 'Instagram' },
  ]

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
     { label: 'Achievements', path: '/achievements' },
    { label: 'Contact', path: '/contact' },
    { label: 'Collaborations', path: '/collaborations' },
  ]

  return (
    <footer className="bg-gradient-to-r from-royal-900 to-royal-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-lg"><img src='/logo.jpg' alt='logo'></img></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">V Medha</h3>
                <p className="text-xs text-white/70">Tech for Social Good</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Innovating for social good through technology!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>vmedhaofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>+91 7981203465</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>CBIT, Hyderabad</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} V Medha Tech for Social Good. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
