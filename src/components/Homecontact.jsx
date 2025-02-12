// import React from "react"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
// import { MapPin, Phone, Mail } from "lucide-react"

// const ContactUs = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   }

//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl overflow-hidden">
//       <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
//       <div className="relative z-8 px-6 py-2 sm:px-8 sm:py-8">
//         <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
//           <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-gray-800 mb-8">
//             Contact Us
//           </motion.h2>
//           <motion.div variants={itemVariants} className="space-y-6 text-center mb-10">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center justify-center space-x-3 text-gray-700"
//             >
//               <MapPin className="w-6 h-6 text-blue-600" />
//               <p>Kanakai-03, Surunga, Jhapa</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center justify-center space-x-3 text-gray-700"
//             >
//               <Phone className="w-6 h-6 text-blue-600" />
//               <p>023-553097 | 9804964107</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center justify-center space-x-3 text-gray-700"
//             >
//               <Mail className="w-6 h-6 text-blue-600" />
//               <p>info@surungamedicine.com</p>
//             </motion.div>
//           </motion.div>
//           <motion.div variants={itemVariants} className="text-center">
//             <Link to="/contact-us">
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Book Appointment
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-200 to-transparent opacity-30"></div>
//     </section>
//   )
// }

// export default ContactUs


// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
// import { MapPin, Phone, Mail, Heart, Clock, Activity } from "lucide-react"

// const ContactUs = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   }

//   return (
//     <section className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-10 top-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute -right-10 bottom-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute left-1/4 top-1/3 w-20 h-20 bg-blue-100/30 rounded-full blur-2xl"></div>
//         <div className="absolute right-1/4 bottom-1/3 w-20 h-20 bg-indigo-100/30 rounded-full blur-2xl"></div>
//       </div>

//       {/* Medical Icons Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="grid grid-cols-6 gap-8 p-8">
//           {[...Array(24)].map((_, i) => (
//             <div key={i} className="flex items-center justify-center">
//               {i % 3 === 0 ? (
//                 <Heart className="w-8 h-8" />
//               ) : i % 3 === 1 ? (
//                 <Activity className="w-8 h-8" />
//               ) : (
//                 <Clock className="w-8 h-8" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto px-6">
//           <motion.div
//             variants={itemVariants}
//             className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12"
//           >
//             <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-gray-800 mb-8">
//               Contact Us
//             </motion.h2>

//             <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-12">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex flex-col items-center p-6 rounded-2xl bg-white/50 hover:bg-white/90 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                   <MapPin className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
//                 <p className="text-gray-600 text-center">Kanakai-03, Surunga, Jhapa</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex flex-col items-center p-6 rounded-2xl bg-white/50 hover:bg-white/90 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                   <Phone className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
//                 <p className="text-gray-600 text-center">023-553097</p>
//                 <p className="text-gray-600 text-center">9804964107</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex flex-col items-center p-6 rounded-2xl bg-white/50 hover:bg-white/90 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                   <Mail className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
//                 <p className="text-gray-600 text-center">info@surungamedicine.com</p>
//               </motion.div>
//             </motion.div>

//             <motion.div variants={itemVariants} className="text-center">
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
//                 >
//                   Book Appointment
//                 </motion.button>
//               </Link>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               variants={itemVariants}
//               className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600"
//             >
//               <div>
//                 <div className="font-semibold text-blue-600 mb-1">24/7</div>
//                 <div>Emergency Care</div>
//               </div>
//               <div>
//                 <div className="font-semibold text-blue-600 mb-1">15+</div>
//                 <div>Expert Doctors</div>
//               </div>
//               <div>
//                 <div className="font-semibold text-blue-600 mb-1">1000+</div>
//                 <div>Happy Patients</div>
//               </div>
//               <div>
//                 <div className="font-semibold text-blue-600 mb-1">10+</div>
//                 <div>Years Experience</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs


// import { Link } from "react-router-dom"
// import { MapPin, Phone, Mail, Star, Shield, Award, HeartPulse } from "lucide-react"

// const ContactUs = () => {
//   return (
//     <div className="w-full bg-gradient-to-b from-white to-blue-50/30">
//       {/* Stats Section */}
//       <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto py-12 px-4">
//         <div className="text-center">
//           <HeartPulse className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//           <h3 className="text-3xl font-bold text-gray-900 mb-1">15k+</h3>
//           <p className="text-sm text-gray-600">Happy Patients</p>
//         </div>
//         <div className="text-center">
//           <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//           <h3 className="text-3xl font-bold text-gray-900 mb-1">10+</h3>
//           <p className="text-sm text-gray-600">Years Experience</p>
//         </div>
//         <div className="text-center">
//           <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//           <h3 className="text-3xl font-bold text-gray-900 mb-1">4.9</h3>
//           <p className="text-sm text-gray-600">User Rating</p>
//         </div>
//         <div className="text-center">
//           <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//           <h3 className="text-3xl font-bold text-gray-900 mb-1">24/7</h3>
//           <p className="text-sm text-gray-600">Emergency Care</p>
//         </div>
//       </div>

//       {/* Main Contact Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-4">
//         {/* Contact Info */}
//         <div className="col-span-3 md:col-span-1">
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Opening Hours</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Monday - Friday</span>
//                 <span className="text-gray-900 font-medium">8:00 AM - 8:00 PM</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Saturday</span>
//                 <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Sunday</span>
//                 <span className="text-gray-900 font-medium">Emergency Only</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
//             <h3 className="text-lg font-semibold mb-2">Emergency? Call Us</h3>
//             <p className="text-2xl font-bold mb-2">023-553097</p>
//             <p className="text-sm opacity-90">Available 24/7 for emergencies</p>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="col-span-3 md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
//           <div className="grid gap-6">
//             <div className="flex items-center gap-4">
//               <MapPin className="w-5 h-5 text-blue-600" />
//               <p className="text-gray-700">Kanakai-03, Surunga, Jhapa</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Phone className="w-5 h-5 text-blue-600" />
//               <p className="text-gray-700">023-553097 | 9804964107</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Mail className="w-5 h-5 text-blue-600" />
//               <p className="text-gray-700">info@surungamedicine.com</p>
//             </div>

//             <Link to="/contact-us">
//               <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-6 py-3 mt-4 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
//                 Book Appointment
//               </button>
//             </Link>
//           </div>

//           {/* Certifications */}
//           <div className="mt-8 pt-6 border-t border-gray-100">
//             <h4 className="text-sm font-medium text-gray-600 mb-4">Certified By:</h4>
//             <div className="flex items-center justify-between">
//               <img
//                 src="/placeholder.svg?height=40&width=80"
//                 alt="Certification 1"
//                 className="h-10 opacity-70 hover:opacity-100 transition-opacity"
//               />
//               <img
//                 src="/placeholder.svg?height=40&width=80"
//                 alt="Certification 2"
//                 className="h-10 opacity-70 hover:opacity-100 transition-opacity"
//               />
//               <img
//                 src="/placeholder.svg?height=40&width=80"
//                 alt="Certification 3"
//                 className="h-10 opacity-70 hover:opacity-100 transition-opacity"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonial */}
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="bg-blue-50 rounded-2xl p-8 relative">
//           <div className="absolute top-4 right-4">
//             <Star className="w-8 h-8 text-yellow-400 fill-current" />
//           </div>
//           <p className="text-gray-600 italic mb-4">
//             "Outstanding medical care and professional staff. The doctors are highly skilled and caring. I highly
//             recommend this clinic for anyone seeking quality healthcare services."
//           </p>
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
//             <div>
//               <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
//               <p className="text-sm text-gray-600">Patient since 2022</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs

// import { motion } from "framer-motion"
// import { Lightbulb, Calendar, Microscope, Heart, Bone, Eye, Send } from "lucide-react"

// const ContactUs = () => {
//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   }

//   return (
//     <div className="w-full bg-gradient-to-b from-white to-blue-50/30 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Health Tip of the Day */}
//         <motion.div {...fadeIn} className="bg-blue-50 rounded-2xl p-6 mb-8 shadow-lg">
//           <div className="flex items-start gap-4">
//             <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Tip of the Day</h3>
//               <p className="text-gray-600">
//                 Stay hydrated! Drinking adequate water helps maintain the balance of body fluids, energizes muscles, and
//                 keeps your skin looking healthy.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Upcoming Health Events */}
//         <motion.div {...fadeIn} className="mb-8">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Health Events</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white rounded-xl p-4 shadow">
//               <div className="flex items-center gap-3 mb-2">
//                 <Calendar className="w-5 h-5 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-600">March 15, 2025</span>
//               </div>
//               <h4 className="font-medium text-gray-900 mb-1">Diabetes Awareness Workshop</h4>
//               <p className="text-sm text-gray-600">Learn about prevention and management of diabetes.</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 shadow">
//               <div className="flex items-center gap-3 mb-2">
//                 <Calendar className="w-5 h-5 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-600">April 2, 2025</span>
//               </div>
//               <h4 className="font-medium text-gray-900 mb-1">Heart Health Seminar</h4>
//               <p className="text-sm text-gray-600">Expert talks on maintaining a healthy heart.</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Advanced Medical Equipment */}
//         <motion.div {...fadeIn} className="mb-8">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Advanced Medical Equipment</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { name: "MRI Scanner", icon: Microscope },
//               { name: "Digital X-Ray", icon: Bone },
//               { name: "ECG Machine", icon: Heart },
//               { name: "Ophthalmoscope", icon: Eye },
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 shadow text-center">
//                 <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                 <h4 className="font-medium text-gray-900">{item.name}</h4>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Quick Links to Services */}
//         <motion.div {...fadeIn} className="mb-8">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               "General Check-up",
//               "Pediatrics",
//               "Cardiology",
//               "Orthopedics",
//               "Neurology",
//               "Dermatology",
//               "Ophthalmology",
//               "Dentistry",
//             ].map((service, index) => (
//               <a
//                 key={index}
//                 href="/"
//                 className="bg-white rounded-xl p-3 shadow text-center hover:bg-blue-50 transition-colors duration-300"
//               >
//                 <span className="text-sm font-medium text-gray-700">{service}</span>
//               </a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Newsletter Signup */}
//         <motion.div
//           {...fadeIn}
//           className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg"
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <Send className="w-6 h-6" />
//             <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
//           </div>
//           <p className="mb-4">Get the latest health tips and clinic updates delivered to your inbox.</p>
//           <form className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             />
//             <button
//               type="submit"
//               className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
//             >
//               Subscribe
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs

// import { motion } from "framer-motion"
// import { MapPin, Phone, Mail, Clock, Calendar, AlertTriangle } from "lucide-react"
// import { Link } from "react-router-dom"

// const ContactUs = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   }

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
//       <div className="container mx-auto px-4">
//         <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Get in Touch
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div {...fadeInUp} className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <MapPin className="w-6 h-6 text-blue-600" />
//               <div>
//                 <h3 className="font-semibold text-gray-800">Our Location</h3>
//                 <p className="text-gray-600">Kanakai-03, Surunga, Jhapa</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Phone className="w-6 h-6 text-blue-600" />
//               <div>
//                 <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
//                 <p className="text-gray-600">023-553097 | 9804964107</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Mail className="w-6 h-6 text-blue-600" />
//               <div>
//                 <h3 className="font-semibold text-gray-800">Email Us</h3>
//                 <p className="text-gray-600">surungamedicineclinic@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Clock className="w-6 h-6 text-blue-600" />
//               <div>
//                 <h3 className="font-semibold text-gray-800">Working Hours</h3>
//                 <p className="text-gray-600">Always Open: 6:00 AM - 8:00 PM</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
//             <div className="space-y-4">
//               <Link to="/book-appointment" className="block">
//                 <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
//                   <Calendar className="w-5 h-5 mr-2" />
//                   Book an Appointment
//                 </button>
//               </Link>
//               <Link to="/services" className="block">
//                 <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
//                   <AlertTriangle className="w-5 h-5 mr-2" />
//                   Emergency Services
//                 </button>
//               </Link>
//             </div>
//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">Need immediate assistance? Call our emergency hotline:</p>
//               <p className="text-lg font-semibold text-red-600 mt-2">023-553097</p>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div {...fadeInUp} className="mt-12 text-center">
//           <p className="text-gray-600 mb-4">We're committed to providing you with the best healthcare experience.</p>
//           <Link to="/contact-us">
//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-6 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
//               Contact Us for More Information
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs

// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { MapPin, Phone, Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
// import { Link } from "react-router-dom"

// const ContactUs = () => {
//   const [currentTip, setCurrentTip] = useState(0)

//   const healthTips = [
//     "Stay hydrated! Aim for 8 glasses of water a day.",
//     "Regular exercise boosts both physical and mental health.",
//     "Don't skip breakfast - it's the most important meal of the day!",
//     "Manage stress through meditation or deep breathing exercises.",
//     "Get 7-9 hours of sleep for optimal health and productivity.",
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTip((prevTip) => (prevTip + 1) % healthTips.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [healthTips.length])

//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   }

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Your Health, Our Priority
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* Contact Information */}
//           <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">Kanakai-03, Surunga, Jhapa</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">023-553097 | 9804964107</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">surungamedicineclinic@gmail.com</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Health Tips Carousel */}
//           <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Health Tip of the Day</h3>
//             <div className="relative h-24 flex items-center justify-center">
//               <button
//                 onClick={() => setCurrentTip((prevTip) => (prevTip - 1 + healthTips.length) % healthTips.length)}
//                 className="absolute left-0 text-blue-600 hover:text-blue-800"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <motion.p
//                 key={currentTip}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-gray-600 text-center px-8"
//               >
//                 {healthTips[currentTip]}
//               </motion.p>
//               <button
//                 onClick={() => setCurrentTip((prevTip) => (prevTip + 1) % healthTips.length)}
//                 className="absolute right-0 text-blue-600 hover:text-blue-800"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Appointment Booking Section */}
//         <motion.div {...fadeInUp} className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Prioritize Your Health?</h3>
//           <p className="text-gray-600 mb-6">
//             Book an appointment with our expert healthcare professionals and take the first step towards a healthier
//             you.
//           </p>
//           <Link to="/book-appointment">
//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto">
//               <Calendar className="w-5 h-5 mr-2" />
//               Book Your Appointment
//             </button>
//           </Link>
//         </motion.div>

//         {/* Emergency Contact */}
//         <motion.div {...fadeInUp} className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             For emergencies, please call our 24/7 hotline:
//             <span className="font-semibold text-red-600 ml-2">023-553097</span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs


// 'use client';

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { MapPin, Phone, Mail, Calendar, Heart } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const ContactUs = () => {
//   const [currentTip, setCurrentTip] = useState(0)

//   const healthTips = [
//     "Stay hydrated! Aim for 8 glasses of water a day.",
//     "Regular exercise boosts both physical and mental health.",
//     "Don't skip breakfast - it's the most important meal of the day!",
//     "Manage stress through meditation or deep breathing exercises.",
//     "Get 7-9 hours of sleep for optimal health and productivity."
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTip((prevTip) => (prevTip + 1) % healthTips.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [healthTips.length])

//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
//   }

//   return (
//     <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//           <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//           <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
//         <motion.h2 
//           {...fadeInUp}
//           className="text-4xl font-bold text-center text-teal-800 mb-16"
//         >
//           Your Wellness Journey Starts Here
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Contact Information */}
//           <motion.div 
//             {...fadeInUp}
//             className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold text-teal-700 mb-6">Connect With Us</h3>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-teal-100 p-3 rounded-full">
//                   <MapPin className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <p className="text-gray-700">Kanakai-03, Surunga, Jhapa</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="bg-teal-100 p-3 rounded-full">
//                   <Phone className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <p className="text-gray-700">023-553097 | 9804964107</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="bg-teal-100 p-3 rounded-full">
//                   <Mail className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <p className="text-gray-700">surungamedicineclinic@gmail.com</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Health Tips Carousel */}
//           <motion.div 
//             {...fadeInUp}
//             className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold text-teal-700 mb-6">Daily Wellness Tip</h3>
//             <div className="relative h-32 flex items-center justify-center overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.p
//                   key={currentTip}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   className="text-gray-700 text-center text-lg px-8 absolute"
//                 >
//                   {healthTips[currentTip]}
//                 </motion.p>
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </div>

//         {/* Appointment Booking Section */}
//         <motion.div 
//           {...fadeInUp}
//           className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-xl p-10 text-center transform hover:scale-105 transition-transform duration-300"
//         >
//           <h3 className="text-3xl font-bold text-white mb-6">Ready to Prioritize Your Health?</h3>
//           <p className="text-white text-lg mb-8">
//             Take the first step towards a healthier you. Our expert healthcare professionals are here to guide your wellness journey.
//           </p>
//           <Link to="/book-appointment">
//             <button className="bg-white text-teal-600 py-4 px-10 rounded-full text-lg font-semibold hover:bg-teal-50 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto group">
//               <Calendar className="w-6 h-6 mr-3 group-hover:animate-bounce" />
//               Schedule Your Visit
//             </button>
//           </Link>
//         </motion.div>

//         {/* Emergency Contact */}
//         <motion.div 
//           {...fadeInUp}
//           className="mt-12 text-center"
//         >
//           <p className="text-lg text-teal-800">
//             For emergencies, please call our 24/7 hotline:
//             <span className="font-bold text-red-600 ml-2 text-2xl">023-553097</span>
//           </p>
//         </motion.div>

//         {/* Floating Hearts Animation */}
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(5)].map((_, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               initial={{ y: "100%", x: `${Math.random() * 100}%`, opacity: 0 }}
//               animate={{
//                 y: "-100%",
//                 opacity: [0, 1, 0],
//                 transition: {
//                   repeat: Infinity,
//                   duration: 10 + Math.random() * 10,
//                   delay: Math.random() * 10,
//                   ease: "linear"
//                 }
//               }}
//             >
//               <Heart className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} text-teal-${300 + Math.floor(Math.random() * 3) * 100}`} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Phone, Mail, Calendar, Heart, Clock, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

const ContactUs = () => {
  const [currentTip, setCurrentTip] = useState(0)

  const healthTips = [
    "Stay hydrated! Aim for 8 glasses of water a day.",
    "Regular exercise boosts both physical and mental health.",
    "Don't skip breakfast - it's the most important meal of the day!",
    "Manage stress through meditation or deep breathing exercises.",
    "Get 7-9 hours of sleep for optimal health and productivity.",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prevTip) => (prevTip + 1) % healthTips.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [healthTips.length])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center text-teal-800 mb-12">
          Your Health, Our Priority
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-6 flex items-center">
              <Mail className="w-8 h-8 mr-3 fill-yellow-300 text-teal-500" />
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 fill-white text-black" />
                <p className="text-gray-700">Kanakai-03, Surunga, Jhapa</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 fill-white text-black" />
                <p className="text-gray-700">023-553097 | 9804964107</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 fill-white text-black" />
                <p className="text-gray-700">surungamedicineclinic@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Health Tips */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 fill-red-500 text-teal-800" />
              Health Tip of the Day
            </h3>
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTip}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-700 text-lg"
                >
                  {healthTips[currentTip]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-6 flex items-center">
              <Clock className="w-8 h-8 mr-3 fill-slate-300 text-teal-500" />
              Working Hours
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">Monday - Friday: 6:00 AM - 8:00 PM</p>
              <p className="text-gray-700">Saturday: 7:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sunday: 8:00 AM - 2:00 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Appointment Booking */}
        <motion.div
          {...fadeInUp}
          className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Prioritize Your Health?</h3>
          <p className="text-white text-lg mb-8">
            Book an appointment with our expert healthcare professionals and take the first step towards a healthier
            you.
          </p>
          <Link to="/book-appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-50 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Schedule Your Visit
            </motion.button>
          </Link>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <div className="inline-flex items-center bg-red-100 rounded-full px-6 py-3">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
            <p className="text-lg text-red-800">
              For emergencies, call our 24/7 hotline:
              <span className="font-bold ml-2">023-553097</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs

// "use client"

// import { motion } from "framer-motion"
// import { MapPin, Phone, Mail } from "lucide-react"


// const ContactUs = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   }

//   return (
//     <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Contact Us
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">Kanakai-03, Surunga, Jhapa</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">023-553097 | 9804964107</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-blue-600" />
//                 <p className="text-gray-600">surungamedicineclinic@gmail.com</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Working Hours</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Monday - Friday</span>
//                 <span className="text-gray-800">6:00 AM - 8:00 PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Saturday</span>
//                 <span className="text-gray-800">7:00 AM - 6:00 PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Sunday</span>
//                 <span className="text-gray-800">8:00 AM - 2:00 PM</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div {...fadeInUp} className="mt-12 text-center">
//           <a href="/book-appointment">
//             <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
//               Book an Appointment
//             </button>
//           </a>
//         </motion.div>

//         <motion.div {...fadeInUp} className="mt-8 text-center">
//           <p className="text-gray-600">
//             For emergencies, please call our 24/7 hotline:
//             <span className="font-semibold text-red-600 ml-2">023-553097</span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs

