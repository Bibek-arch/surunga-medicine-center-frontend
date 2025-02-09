import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import favicon from '../assets/favicon.png'
import { FaPhoneAlt, FaBars,FaEnvelope, FaTimes } from 'react-icons/fa'

import { Facebook, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/our-doctors', label: 'Our Doctors' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
]


const services = ["Pharmacy", "Imaging", "Vaccination", "Checkup"]
const quickLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "FAQs" },
]

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()


  useEffect(() => {
    setMenuOpen(false);
  }, [location])

  

   return(
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800">
      {/* <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 text-blue-900 shadow-lg z-50 backdrop-blur-md transition-all duration-300">
              <div className="bg-[#0B3C7F] text-white py-2 px-4">
                <div className="max-w-7xl  sm:gap-3 mx-auto flex flex-wrap justify-between items-center">
                  <div className="flex items-center space-x-6">
                    <a href="mailto:info@surungamedicineclinic.com" className="flex items-center space-x-2 text-sm">
                      <FaEnvelope className="text-xs" />
                      <span>surungamedicineclinic@gmail.com</span>
                    </a>
                    <div className="flex items-center space-x-2 text-sm">
                      <FaPhoneAlt className="text-xs" />
                      <span>023-553097</span>
                    </div>
                  </div>
                </div>
              </div>
        <div className="container mx-auto flex justify-between items-center p-3">
          <Link to="/" className="text-1xl lg:text-2xl font-bold tracking-wide font-serif text-blue-800 hover:text-blue-600 transition-colors duration-300">
            <img src={favicon} alt="Surunga Medicine Center" className="w-10 h-10 inline-block mr-2" />
            Surunga Medicine & Clinic
          </Link>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <nav className="hidden lg:flex space-x-6">
            {navItems.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-blue-800 font-medium hover:text-blue-600 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="px-6 py-2 text-white font-medium bg-green-500 rounded-full hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </header>
  





      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 flex flex-col justify-start pt-20 px-6 space-y-4"
          >
            {navItems.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-2 text-blue-800 font-medium hover:text-blue-600 transition duration-300 ease-in-out border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="block px-4 py-2 text-white font-medium bg-green-500 rounded-md hover:bg-green-400 transition duration-300 ease-in-out text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.nav>
        )}
      </AnimatePresence> */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 text-blue-900 shadow-lg z-50 backdrop-blur-md transition-all duration-300">
        {/* Top Bar - Keeping original styling */}
        <div className="bg-[#0B3C7F] text-white py-2 px-4">
          <div className="max-w-7xl sm:gap-3 mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:info@surungamedicineclinic.com" className="flex items-center space-x-2 text-sm">
                <FaEnvelope className="text-xs" />
                <span>surungamedicineclinic@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <FaPhoneAlt className="text-xs" />
                <span>023-553097</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto flex justify-between items-center py-2 px-3 xl:p-3 gap-6">
          {/* Logo - Keeping original styling */}
          <Link
            to="/"
            className="flex flex-shrink-0 items-center min-w-0 text-blue-800 hover:text-blue-600 transition-colors duration-300"
          >
            <img
              src={favicon || "/placeholder.svg"}
              alt="Surunga Medicine Center"
              className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 inline-block mr-2 transition-all duration-300 hover:brightness-100 hover:saturate-[2] hover:hue-rotate-[330deg] hover:filter"
            />
            <span className="font-bold tracking-wide font-serif text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
              Surunga Medicine & Clinic
            </span>
          </Link>

          {/* Mobile Menu Button - Keeping original */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation - Updated styling */}
          {/* <nav className="hidden lg:flex items-center space-x-4 xl:space-x-4">
            <div className="flex items-center space-x-5 md:space-x-1 xl:space-x-8">
              {navItems.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 text-[16px] xl:text-[17px] font-bold hover:text-blue-600 transition-all duration-300 ease-in-out tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact-us"
                className="ml-2 xl:ml-4 px-4 xl:px-6 py-1.5 xl:py-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out text-[14px] xl:text-[15px] tracking-wide whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </div>
          </nav> */}
          {/* <nav className="hidden lg:flex items-center space-x-4 md:space-x-5 xl:space-x-8">
  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-7 overflow-hidden">
    {navItems.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px] font-bold hover:text-blue-600 transition-all duration-300 ease-in-out tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
      >
        {link.label}
      </Link>
    ))}
    <Link
      to="/contact-us"
      className="ml-2 xl:ml-4 px-2 sm:px-4 lg:px-6 py-1.5 lg:py-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out text-[12px] sm:text-[14px] md:text-[15px] xl:text-[16px] tracking-wide whitespace-nowrap"
    >
      Book Appointment
    </Link>
  </div>
</nav> */}

<nav className="hidden lg:flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-8">
  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-7 overflow-hidden">
    {navItems.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="text-gray-900 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] font-bold hover:text-blue-600 transition-all duration-300 ease-in-out tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
      >
        {link.label}
      </Link>
    ))}
    <Link
      to="/contact-us"
      className="ml-2 xl:ml-4 px-2 sm:px-3 md:px-4 lg:px-5 py-1 lg:py-1.5 xl:py-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] tracking-wide whitespace-nowrap"
    >
      Book Appointment
    </Link>
  </div>
</nav>


        </div>
      </header>

      {/* Mobile Menu - Keeping original functionality and styling */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 flex flex-col justify-start pt-20 px-6 space-y-4"
          >
            {navItems.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-2 text-blue-800 font-medium hover:text-blue-600 transition duration-300 ease-in-out border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="block px-4 py-2 text-white font-medium bg-green-500 rounded-md hover:bg-green-400 transition duration-300 ease-in-out text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full flex justify-center container mx-auto pt-24 pb-12 px-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-[1600px] w-full px-4"
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Surunga Medicine & Clinic</h3>
            <p className="text-blue-200">Providing quality healthcare services since 2000</p>
            <motion.div
              className="flex flex-col space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              <motion.a
                href="tel:023-553097"
                className="flex items-center text-blue-200 hover:text-white transition duration-300"
              >
                <Phone size={18} className="mr-2" /> 023-553097
              </motion.a>
              <motion.a
                href="mailto:info@surungamedicine.com"
                className="flex items-center text-blue-200 hover:text-white transition duration-300"
              >
                <Mail size={18} className="mr-2" /> surungamedicineclinic@gmail.com
              </motion.a>
              <motion.p className="flex items-center text-blue-200">
                <MapPin size={18} className="mr-2" /> Surunga, Jhapa, Nepal
              </motion.p>
              <motion.p className="flex items-center text-blue-200">
                <Clock size={18} className="mr-2" /> Open 24/7
              </motion.p>
            </motion.div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-white transition duration-300"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href={link.href} className="text-blue-200 hover:text-white transition duration-300">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mt-6">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/surungamedicine"
                className="text-blue-200 hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/9779804964107"
                className="text-blue-200 hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={24} />
              </motion.a>
              <motion.a
                href="tel:023-553097"
                className="text-blue-200 hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 pt-6 border-t border-blue-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Surunga Medicine Center. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
    </div>
  )
}
 export default Layout 
