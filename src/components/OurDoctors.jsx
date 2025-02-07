// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { FaClock, FaCalendarAlt, FaUserMd, FaStethoscope, FaHospital, FaHeartbeat } from "react-icons/fa"
// import { motion } from "framer-motion"

// function OurDoctors() {
//   const [doctors, setDoctors] = useState([])

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <div className="py-16 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto"
//       >
//         <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-wide">
//           Meet Our Exceptional Doctors
//         </h2>
//          <p className='text-center text-xl font-bold mt-0 mb-6'>  🩺 Compassionate Hearts, Expert Hands 🩺 </p>
//       </motion.div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {doctors.map((doctor, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="relative w-full h-80 overflow-hidden ">
//               <img
//                 src={doctor.image || "/placeholder.svg"}
//                 alt={doctor.name}
//                 // className="w-full h-full object-cover object-center transform transition duration-500 hover:scale-110"
//                 className="w-full h-full object-contain object-center"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-70"></div>
//               <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white mb-1">{doctor.name}</h3>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <p className="text-lg text-blue-600 font-semibold">{doctor.specialty}</p>
//                 <FaStethoscope className="text-blue-500 text-2xl" />
//               </div>
//               <div className="space-y-3">
//                 <div className="flex items-start text-gray-700">
//                   <FaCalendarAlt className="flex-shrink-0 mt-1 mr-3 text-green-500 text-xl" />
//                   <span className="text-base font-medium text-gray-800">{doctor.days}</span>
//                 </div>
//                 <div className="flex items-start text-gray-700">
//                   <FaClock className="flex-shrink-0 mt-1 mr-3 text-yellow-500 text-xl" />
//                   <span className="text-base font-medium text-gray-800">{doctor.time}</span>
//                 </div>
//                 <div className="flex items-start text-gray-700">
//                   <FaUserMd className="flex-shrink-0 mt-1 mr-3 text-red-500 text-xl" />
//                   <span className="text-base font-medium text-gray-800">{doctor.details}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="mt-16 text-center"
//       >
//         <h3 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Surunga Medicine Center?</h3>
//         <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <FaHospital className="text-4xl text-blue-500 mb-4 mx-auto" />
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">State-of-the-Art Facilities</h4>
//             <p className="text-gray-600">Experience healthcare in our modern, well-equipped medical center.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <FaHeartbeat className="text-4xl text-red-500 mb-4 mx-auto" />
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">Patient-Centered Care</h4>
//             <p className="text-gray-600">Your health and comfort are our top priorities. We're here for you.</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <FaUserMd className="text-4xl text-green-500 mb-4 mx-auto" />
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">Expert Medical Team</h4>
//             <p className="text-gray-600">
//               Our doctors are leaders in their fields, ensuring you receive the best care.
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default OurDoctors


// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { FaClock, FaCalendarAlt, FaUserMd, FaStethoscope, FaHospital, FaHeartbeat, FaArrowRight } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// function OurDoctors() {
//   const [doctors, setDoctors] = useState([])
//   const [selectedDoctor, setSelectedDoctor] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto"
//       >
//         <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-wide">
//           Meet Our Exceptional Doctors
//         </h2>
//         <p className="text-center text-2xl font-bold mt-0 mb-6 text-blue-700">
//           🩺 Compassionate Hearts, Expert Hands 🩺
//         </p>
//       </motion.div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {doctors.map((doctor, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="relative w-full h-96 overflow-hidden">
//               <img
//                 src={doctor.image || "/placeholder.svg"}
//                 alt={doctor.name}
//                 className="w-full h-full object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent"></div>
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
//                 <p className="text-lg font-semibold text-blue-200">{doctor.specialty}</p>
//               </div>
//             </div>
//             <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100">
//               <div className="space-y-3 mb-4">
//                 <div className="flex items-center text-gray-700">
//                   <FaCalendarAlt className="flex-shrink-0 mr-3 text-blue-500 text-xl" />
//                   <span className="text-base font-medium">{doctor.days}</span>
//                 </div>
//                 <div className="flex items-center text-gray-700">
//                   <FaClock className="flex-shrink-0 mr-3 text-blue-500 text-xl" />
//                   <span className="text-base font-medium">{doctor.time}</span>
//                 </div>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center"
//                 onClick={() => setSelectedDoctor(doctor)}
//               >
//                 Learn More <FaArrowRight className="ml-2" />
//               </motion.button>
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center"
//                 >
//                   Request Appointment
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="mt-16 text-center"
//       >
//         <h3 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Surunga Medicine Center?</h3>
//         <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
//           {[
//             {
//               icon: FaHospital,
//               title: "State-of-the-Art Facilities",
//               description: "Experience healthcare in our modern, well-equipped medical center.",
//             },
//             {
//               icon: FaHeartbeat,
//               title: "Patient-Centered Care",
//               description: "Your health and comfort are our top priorities. We're here for you.",
//             },
//             {
//               icon: FaUserMd,
//               title: "Expert Medical Team",
//               description: "Our doctors are leaders in their fields, ensuring you receive the best care.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-xl shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               <item.icon className="text-5xl text-blue-500 mb-4 mx-auto" />
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h4>
//               <p className="text-gray-600">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {selectedDoctor && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={() => setSelectedDoctor(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 50 }}
//             className="bg-white rounded-lg p-8 max-w-2xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center mb-6">
//               <img
//                 src={selectedDoctor.image || "/placeholder.svg"}
//                 alt={selectedDoctor.name}
//                 className="w-32 h-32 rounded-full object-cover mr-6"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-blue-900">{selectedDoctor.name}</h3>
//                 <p className="text-lg text-blue-600 font-semibold">{selectedDoctor.specialty}</p>
//               </div>
//             </div>
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">Services Provided:</h4>
//             <ul className="list-disc list-inside text-gray-700 mb-4">
//               {selectedDoctor.services &&
//                 selectedDoctor.services.map((service, index) => <li key={index}>{service}</li>)}
//             </ul>
//             <div className="flex justify-end">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
//                 onClick={() => setSelectedDoctor(null)}
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default OurDoctors






// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { FaClock, FaCalendarAlt, FaUserMd, FaGraduationCap, FaBriefcase, FaStethoscope } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// function OurDoctors() {
//   const [doctors, setDoctors] = useState([])
//   const [selectedDoctor, setSelectedDoctor] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])

//   const cardColors = [
//     "from-blue-100 to-purple-100",
//     "from-green-100 to-teal-100",
//     "from-pink-100 to-red-100",
//     "from-yellow-100 to-orange-100",
//   ]

//   return (
//     <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto"
//       >
//         <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-wide">
//           Meet Our Exceptional Doctors
//         </h2>
//         <p className="text-center text-2xl font-bold mt-0 mb-6 text-blue-700">
//           🩺 Compassionate Hearts, Expert Hands 🩺
//         </p>
//       </motion.div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {doctors.map((doctor, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className={`bg-gradient-to-br ${cardColors[index % cardColors.length]} shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
//           >
//             <div className="relative w-full h-96 overflow-hidden">
//               <img
//                 src={doctor.image || "/placeholder.svg"}
//                 alt={doctor.name}
//                 className="w-full h-full object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
//                 <p className="text-lg font-semibold text-blue-200">{doctor.specialty}</p>
//                 <p className="text-sm text-gray-300">{doctor.qualification}</p>
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="space-y-3 mb-4">
//                 <div className="flex items-center text-gray-700">
//                   <FaCalendarAlt className="flex-shrink-0 mr-3 text-blue-600 text-xl" />
//                   <span className="text-base font-medium">{doctor.days}</span>
//                 </div>
//                 <div className="flex items-center text-gray-700">
//                   <FaClock className="flex-shrink-0 mr-3 text-blue-600 text-xl" />
//                   <span className="text-base font-medium">{doctor.time}</span>
//                 </div>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center mb-2"
//                 onClick={() => setSelectedDoctor(doctor)}
//               >
//                 Learn More <FaUserMd className="ml-2" />
//               </motion.button>
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center"
//                 >
//                   Request Appointment <FaCalendarAlt className="ml-2" />
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {selectedDoctor && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={() => setSelectedDoctor(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 50 }}
//             className="bg-white rounded-lg p-8 max-w-3xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col md:flex-row items-center mb-6">
//               <img
//                 src={selectedDoctor.image || "/placeholder.svg"}
//                 alt={selectedDoctor.name}
//                 className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
//               />
//               <div className="text-center md:text-left">
//                 <h3 className="text-3xl font-bold text-blue-900 mb-2">{selectedDoctor.name}</h3>
//                 <p className="text-xl text-blue-600 font-semibold mb-1">{selectedDoctor.specialty}</p>
//                 <p className="text-lg text-gray-600 mb-2">{selectedDoctor.qualification}</p>
//                 <div className="flex items-center justify-center md:justify-start text-gray-600">
//                   <FaBriefcase className="mr-2" />
//                   <span>{selectedDoctor.experience} Years of Experience</span>
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
//                   <FaStethoscope className="mr-2" /> Services Provided
//                 </h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                   {selectedDoctor.services &&
//                     selectedDoctor.services.split(",").map((service, index) => (
//                       <li key={index} className="mb-1">
//                         {service.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
//                   <FaGraduationCap className="mr-2" /> Education & Training
//                 </h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                   {selectedDoctor.education &&
//                     selectedDoctor.education.split(",").map((edu, index) => (
//                       <li key={index} className="mb-1">
//                         {edu.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="text-gray-700 mb-6">
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">About Dr. {selectedDoctor.name}</h4>
//               <p>{selectedDoctor.about}</p>
//             </div>

//             <div className="flex justify-between">
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center"
//                 >
//                   Request Appointment <FaCalendarAlt className="ml-2" />
//                 </motion.button>
//               </Link>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
//                 onClick={() => setSelectedDoctor(null)}
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default OurDoctors





// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { FaClock, FaCalendarAlt, FaUserMd, FaGraduationCap, FaBriefcase, FaStethoscope } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// function OurDoctors() {
//   const [doctors, setDoctors] = useState([])
//   const [selectedDoctor, setSelectedDoctor] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])

//   const cardColors = [
//     "from-blue-100 to-indigo-200",
//     "from-green-100 to-emerald-200",
//     "from-pink-100 to-rose-200",
//     "from-yellow-100 to-amber-200",
//   ]

//   return (
//     <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto"
//       >
//         <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-wide">
//           Meet Our Exceptional Doctors
//         </h2>
//         <p className="text-center text-2xl font-bold mt-0 mb-6 text-blue-700">
//           🩺 Compassionate Hearts, Expert Hands 🩺
//         </p>
//       </motion.div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {doctors.map((doctor, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className={`bg-gradient-to-br ${cardColors[index % cardColors.length]} shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
//           >
//             <div className="relative w-full h-80 overflow-hidden">
//               <img
//                 src={doctor.image || "/placeholder.svg"}
//                 alt={doctor.name}
//                 className="w-full h-full object-cover object-center"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
//                 <h3 className="text-2xl font-bold text-blue-900 mb-1">{doctor.name}</h3>
//                 <p className="text-lg font-semibold text-blue-700">{doctor.specialty}</p>
//                 <p className="text-sm text-gray-600">{doctor.qualification}</p>
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="space-y-3 mb-4">
//                 <div className="flex items-center text-gray-700">
//                   <FaCalendarAlt className="flex-shrink-0 mr-3 text-blue-600 text-xl" />
//                   <span className="text-base font-medium">{doctor.days}</span>
//                 </div>
//                 <div className="flex items-center text-gray-700">
//                   <FaClock className="flex-shrink-0 mr-3 text-blue-600 text-xl" />
//                   <span className="text-base font-medium">{doctor.time}</span>
//                 </div>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center mb-2"
//                 onClick={() => setSelectedDoctor(doctor)}
//               >
//                 Learn More <FaUserMd className="ml-2" />
//               </motion.button>
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center"
//                 >
//                   Request Appointment <FaCalendarAlt className="ml-2" />
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {selectedDoctor && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={() => setSelectedDoctor(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 50 }}
//             className="bg-white rounded-lg p-8 max-w-3xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col md:flex-row items-center mb-6">
//               <img
//                 src={selectedDoctor.image || "/placeholder.svg"}
//                 alt={selectedDoctor.name}
//                 className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
//               />
//               <div className="text-center md:text-left">
//                 <h3 className="text-3xl font-bold text-blue-900 mb-2">{selectedDoctor.name}</h3>
//                 <p className="text-xl text-blue-600 font-semibold mb-1">{selectedDoctor.specialty}</p>
//                 <p className="text-lg text-gray-600 mb-2">{selectedDoctor.qualification}</p>
//                 <div className="flex items-center justify-center md:justify-start text-gray-600">
//                   <FaBriefcase className="mr-2" />
//                   <span>{selectedDoctor.experience} Years of Experience</span>
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
//                   <FaStethoscope className="mr-2" /> Services Provided
//                 </h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                   {selectedDoctor.services &&
//                     selectedDoctor.services.split(",").map((service, index) => (
//                       <li key={index} className="mb-1">
//                         {service.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
//                   <FaGraduationCap className="mr-2" /> Education & Training
//                 </h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                   {selectedDoctor.education &&
//                     selectedDoctor.education.split(",").map((edu, index) => (
//                       <li key={index} className="mb-1">
//                         {edu.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="text-gray-700 mb-6">
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">About Dr. {selectedDoctor.name}</h4>
//               <p>{selectedDoctor.about}</p>
//             </div>

//             <div className="flex justify-between">
//               <Link to="/contact-us">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center"
//                 >
//                   Request Appointment <FaCalendarAlt className="ml-2" />
//                 </motion.button>
//               </Link>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
//                 onClick={() => setSelectedDoctor(null)}
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default OurDoctors




// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { FaClock, FaCalendarAlt, FaUserMd, FaGraduationCap, FaStethoscope, FaHospital } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// function OurDoctors() {
//   const [doctors, setDoctors] = useState([])
//   const [selectedDoctor, setSelectedDoctor] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto text-center mb-12"
//       >
//         <h2 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-wide">Meet Our Exceptional Doctors</h2>
//         <p className="text-2xl font-bold text-blue-700 flex items-center justify-center gap-2">
//           <FaStethoscope className="text-blue-600" />
//           Compassionate Hearts, Expert Hands
//           <FaStethoscope className="text-blue-600" />
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
//       >
//         {doctors.map((doctor, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
//           >
//             <div className="relative">
//               <img
//                 src={doctor.image || "/placeholder.svg"}
//                 alt={doctor.name}
//                 className="w-full h-[400px] object-cover object-center"
//               />
//             </div>

//             <div className="p-6 bg-gradient-to-br from-white to-blue-50">
//               <div className="text-center mb-4">
//                 <h3 className="text-2xl font-bold text-blue-900 mb-2">{doctor.name}</h3>
//                 <p className="text-lg font-semibold text-blue-700 mb-2">{doctor.specialty}</p>
//                 <div className="flex items-center justify-center gap-2 text-gray-600">
//                   <FaGraduationCap className="text-blue-600 text-xl" />
//                   <span className="font-medium">{doctor.qualification}</span>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center justify-center text-gray-700 gap-2">
//                   <FaCalendarAlt className="text-blue-600" />
//                   <span className="font-medium">{doctor.days}</span>
//                 </div>
//                 <div className="flex items-center justify-center text-gray-700 gap-2">
//                   <FaClock className="text-blue-600" />
//                   <span className="font-medium">{doctor.time}</span>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
//                   onClick={() => setSelectedDoctor(doctor)}
//                 >
//                   <FaUserMd />
//                   Learn More
//                 </motion.button>
//                 <Link to="/contact-us" className="block">
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//                   >
//                     <FaCalendarAlt />
//                     Request Appointment
//                   </motion.button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {selectedDoctor && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//           onClick={() => setSelectedDoctor(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 20 }}
//             className="bg-white rounded-2xl p-8 max-w-3xl w-full shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col md:flex-row gap-8 mb-8">
//               <img
//                 src={selectedDoctor.image || "/placeholder.svg"}
//                 alt={selectedDoctor.name}
//                 className="w-48 h-48 rounded-2xl object-cover shadow-lg"
//               />
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-900 mb-2">{selectedDoctor.name}</h3>
//                 <p className="text-xl text-blue-700 font-semibold mb-2">{selectedDoctor.specialty}</p>
//                 <div className="flex items-center gap-2 text-gray-600 mb-4">
//                   <FaGraduationCap className="text-blue-600" />
//                   <span className="font-medium">{selectedDoctor.qualification}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <FaHospital className="text-blue-600" />
//                   <span>{selectedDoctor.experience} Years of Experience</span>
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                   <FaStethoscope className="text-blue-600" />
//                   Services Provided
//                 </h4>
//                 <ul className="space-y-2">
//                   {selectedDoctor.services &&
//                     selectedDoctor.services.split(",").map((service, index) => (
//                       <li key={index} className="flex items-center gap-2 text-gray-700">
//                         <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                         {service.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                   <FaGraduationCap className="text-blue-600" />
//                   Education & Training
//                 </h4>
//                 <ul className="space-y-2">
//                   {selectedDoctor.education &&
//                     selectedDoctor.education.split(",").map((edu, index) => (
//                       <li key={index} className="flex items-center gap-2 text-gray-700">
//                         <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                         {edu.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-between gap-4">
//               <Link to="/contact-us" className="flex-1">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//                 >
//                   <FaCalendarAlt />
//                   Book Your Seat Now with Dr. {selectedDoctor.name}
//                 </motion.button>
//               </Link>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-6 py-3 rounded-xl font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
//                 onClick={() => setSelectedDoctor(null)}
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default OurDoctors




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
            <div className="relative h-[280px]">
              <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} priority="true" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
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
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">{selectedDoctor.name}</h3>
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

