import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import favicon from '../assets/favicon.png'
import { FaPhoneAlt, FaBars,FaEnvelope, FaTimes } from 'react-icons/fa'

import {Phone, Mail, MapPin, Clock } from "lucide-react"

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
            {/* <div className="flex space-x-4">
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
              </motion.a> */}
              <div className="flex space-x-4">
      <motion.a
        href="https://www.facebook.com/surungamedicine"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      </motion.a>
      <motion.a
        href="https://www.instagram.com/surungamedicine"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
        </svg>
      </motion.a>
      <motion.a
        href="https://www.youtube.com/surungamedicine"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </motion.a>
      <motion.a
        href="https://twitter.com/surungamedicine"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </motion.a>
      <motion.a
        href="https://wa.me/9779804964107"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
      {/* <motion.a
        href="tel:023-553097"
        className="text-blue-200 hover:text-white transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </motion.a> */}
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
