import React, { useEffect, useState } from "react"
import axios from "axios"
import { FaClock, FaCalendarAlt, FaUserMd, FaStethoscope, FaHospital, FaHeartbeat } from "react-icons/fa"
import { motion } from "framer-motion"

function OurDoctors() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/doctors/`)
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-wide">
          Meet Our Exceptional Doctors
        </h2>
         <p className='text-center text-xl font-bold mt-0 mb-6'>  🩺 Compassionate Hearts, Expert Hands 🩺 </p>
        <p className="text-xl text-center text-blue-700 mb-12 max-w-3xl mx-auto">
          At Surunga Medicine Center, we pride ourselves on our team of highly skilled and compassionate medical
          professionals. Our doctors are dedicated to providing you with the highest quality of care and personalized
          treatment.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-80 overflow-hidden ">
              <img
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                // className="w-full h-full object-cover object-center transform transition duration-500 hover:scale-110"
                className="w-full h-full object-contain object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-70"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white mb-1">{doctor.name}</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg text-blue-600 font-semibold">{doctor.specialty}</p>
                <FaStethoscope className="text-blue-500 text-2xl" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-gray-700">
                  <FaCalendarAlt className="flex-shrink-0 mt-1 mr-3 text-green-500 text-xl" />
                  <span className="text-base font-medium text-gray-800">{doctor.days}</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <FaClock className="flex-shrink-0 mt-1 mr-3 text-yellow-500 text-xl" />
                  <span className="text-base font-medium text-gray-800">{doctor.time}</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <FaUserMd className="flex-shrink-0 mt-1 mr-3 text-red-500 text-xl" />
                  <span className="text-base font-medium text-gray-800">{doctor.details}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Surunga Medicine Center?</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaHospital className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-800 mb-2">State-of-the-Art Facilities</h4>
            <p className="text-gray-600">Experience healthcare in our modern, well-equipped medical center.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaHeartbeat className="text-4xl text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Patient-Centered Care</h4>
            <p className="text-gray-600">Your health and comfort are our top priorities. We're here for you.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaUserMd className="text-4xl text-green-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Expert Medical Team</h4>
            <p className="text-gray-600">
              Our doctors are leaders in their fields, ensuring you receive the best care.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default OurDoctors

