import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail } from "lucide-react"

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="relative z-8 px-6 py-2 sm:px-8 sm:py-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </motion.h2>
          <motion.div variants={itemVariants} className="space-y-6 text-center mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3 text-gray-700"
            >
              <MapPin className="w-6 h-6 text-blue-600" />
              <p>Kanakai-03, Surunga, Jhapa</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3 text-gray-700"
            >
              <Phone className="w-6 h-6 text-blue-600" />
              <p>023-553097 | 9804964107</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3 text-gray-700"
            >
              <Mail className="w-6 h-6 text-blue-600" />
              <p>info@surungamedicine.com</p>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Appointment
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-200 to-transparent opacity-30"></div>
    </section>
  )
}

export default ContactUs

