import React, { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { FaUser, FaPhone, FaEnvelope, FaClinicMedical, FaHeartbeat } from "react-icons/fa"

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    message: "",
    choice: "",
  })
  const [responseMessage, setResponseMessage] = useState("")
  const [choices, setChoices] = useState([])

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/contact-choices/`)
        const formattedChoices = response.data.map((choice) => ({
          value: choice.value,
          label: choice.label,
        }))
        setChoices(formattedChoices)
      } catch (error) {
        console.error("Error fetching choices:", error)
        setChoices([])
      }
    }

    fetchChoices()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/contact-submissions/`, formData)
      setResponseMessage("Form submitted successfully. We will contact you soon.")
      setFormData({ name: "", phone_number: "", message: "", choice: "" })
    } catch (error) {
      setResponseMessage("Error submitting the form. Please try again.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-8 text-white">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-extrabold mb-6"
            >
              Welcome to Surunga Medicine Center
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-4"
            >
              Your health is our priority. Our state-of-the-art facility offers:
            </motion.p>
            <motion.ul
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="list-none space-y-2"
            >
              <li className="flex items-center">
                <FaHeartbeat className="mr-2" /> Comprehensive health check-ups
              </li>
              <li className="flex items-center">
                <FaClinicMedical className="mr-2" /> Expert medical consultations
              </li>
              <li className="flex items-center">
                <FaUser className="mr-2" /> Personalized care plans
              </li>
            </motion.ul>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 text-lg"
            >
              Contact us today to schedule your appointment and take the first step towards better health!
            </motion.p>
          </div>
          <div className="p-8">
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Get in Touch
            </motion.h3>
            {responseMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-center mb-4 p-2 bg-green-100 text-green-700 rounded"
              >
                {responseMessage}
              </motion.p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                      setFormData({ ...formData, phone_number: value })
                    }}
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your 10-digit phone number"
                    maxLength={10}
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Please enter a valid 10-digit phone number.</p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Contact</label>
                <div className="relative">
                  <FaClinicMedical className="absolute top-3 left-3 text-gray-400" />
                  <select
                    name="choice"
                    value={formData.choice}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {choices.map((choice, index) => (
                      <option key={index} value={choice.value}>
                        {choice.label}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Write your message here"
                    rows="4"
                    required
                  />
                </div>
              </motion.div>
              <motion.div
                className="text-right"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-md shadow-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContactUsForm

