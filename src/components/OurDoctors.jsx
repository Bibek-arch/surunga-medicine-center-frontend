
import React, { useEffect, useState } from "react"
import axios from "axios"
import { FaClock, FaCalendarAlt, FaUserMd, FaGraduationCap, FaStethoscope } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function OurDoctors() {
  const [doctors, setDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/doctors/`)
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-3">Meet Our Exceptional Doctors</h2>
        <p className="text-xl font-semibold text-blue-700 flex items-center justify-center gap-2">
          <FaStethoscope className="text-blue-600" />
          Compassionate Hearts, Expert Hands
          <FaStethoscope className="text-blue-600" />
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[280px] max-sm:h-[220px]">
              <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} priority="true" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Dr. {doctor.name}</h3>
                  <p className="text-lg font-medium text-blue-100">{doctor.specialty}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-blue-600 text-lg" />
                  <span className="text-sm font-medium text-gray-700">{doctor.qualification}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600 text-lg" />
                  <span className="text-sm text-gray-700">{doctor.days}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-600 text-lg" />
                  <span className="text-sm text-gray-700">{doctor.time}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <FaUserMd className="text-lg" />
                  Learn More
                </motion.button>
                <Link to="/contact-us" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1"
                  >
                    <FaCalendarAlt className="text-lg" />
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedDoctor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedDoctor(null)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6 mb-6">
              <img
                src={selectedDoctor.image || "/placeholder.svg"}
                alt={selectedDoctor.name}
                className="w-32 h-25 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">Dr. {selectedDoctor.name}</h3>
                <p className="text-lg text-blue-700 font-medium mb-2">{selectedDoctor.specialty}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaGraduationCap className="text-blue-600" />
                  <span>{selectedDoctor.qualification}</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FaStethoscope className="text-blue-600" />
                  Services
                </h4>
                <ul className="space-y-1">
                  {selectedDoctor.services &&
                    selectedDoctor.services.split(",").map((service, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {service.trim()}
                      </li>
                    ))}
                </ul>
               
                
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FaGraduationCap className="text-blue-600" />
                  Professional Experiences
                </h4>
                <ul className="space-y-1">
                  {selectedDoctor.education &&
                    selectedDoctor.education.split(",").map((edu, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {edu.trim()}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Link to="/contact-us" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt />
                  Book with Dr. {selectedDoctor.name.split(" ")[0]}
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
                onClick={() => setSelectedDoctor(null)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default OurDoctors

