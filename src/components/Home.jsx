// import React, { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
// import axios from "axios"
// import { FaUserMd, FaHospital, FaPhoneAlt, FaStethoscope, FaHeartbeat, FaAmbulance, FaFlask } from "react-icons/fa"
// import teamImage from "../assets/team.png"
// import compImage from "../assets/comprehensive.png"
// import techImage from "../assets/technology.png"
// import diagnosticImage from "../assets/diagnostic.jpg"
// import primeImage from "../assets/primcare.webp"
// import specImage from "../assets/specialcare.png"
// import urgentImage from "../assets/urgentcare.jpg"
// import patientImage from "../assets/patientcare.webp"

// const Home = () => {
//   const [banners, setBanners] = useState([])
//   const [showPopup, setShowPopup] = useState(true)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/banners/`)
//       .then((response) => setBanners(response.data))
//       .catch((error) => console.error("Error fetching banners:", error))
//   }, [])

//   const handleClosePopup = () => {
//     setShowPopup(false)
//   }

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className="font-sans bg-blue-50">
//       {showPopup && banners.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//         >
//           <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
//               onClick={handleClosePopup}
//             >
//               X
//             </button>
//             {banners.map((banner, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="mb-4"
//               >
//                 <img
//                   src={banner.image || "/placeholder.svg"}
//                   alt={banner.caption}
//                   className="w-full h-64 object-cover rounded mb-2"
//                 />
//                 <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <section className="text-center space-y-8 py-16">
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-5xl font-bold text-blue-900"
//           >
//             Welcome to Surunga Medicine Center
//           </motion.h1>
//           <motion.p
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//           >
//             Providing quality healthcare services with a focus on patient comfort and advanced medical technologies.
//           </motion.p>
//           <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
//             <Link
//               to="/contact-us"
//               className="inline-block px-8 py-3 text-white font-medium bg-green-500 rounded-full hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
//             >
//               Book an Appointment
//             </Link>
//           </motion.div>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaUserMd className="text-4xl text-blue-500 mb-4" />,
//               title: "Expert Doctors",
//               description: "Our team of experienced and qualified doctors are here to provide you with the best care.",
//             },
//             {
//               icon: <FaHospital className="text-4xl text-blue-500 mb-4" />,
//               title: "Modern Facilities",
//               description:
//                 "State-of-the-art medical equipment and comfortable facilities for all your healthcare needs.",
//             },
//             {
//               icon: <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />,
//               title: "24/7 Support",
//               description: "Round-the-clock medical support to ensure you receive care when you need it most.",
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               {feature.icon}
//               <h2 className="text-2xl font-semibold text-blue-800 mb-4">{feature.title}</h2>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               {
//                 image: teamImage,
//                 title: "Experienced Team",
//                 description:
//                   "Our skilled and compassionate healthcare professionals are here to meet your unique needs.",
//               },
//               {
//                 image: compImage,
//                 title: "Comprehensive Services",
//                 description: "From preventive care to advanced medical treatments, we've got you covered.",
//               },
//               {
//                 image: techImage,
//                 title: "State-of-the-Art Facilities",
//                 description:
//                   "We combine modern technology with a patient-first approach to make your visits comfortable and effective.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{item.title}</h3>
//                 <p className="mt-2 text-gray-700">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Our Services
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               {
//                 icon: <FaStethoscope className="text-4xl text-blue-500 mb-4" />,
//                 image: primeImage,
//                 title: "Primary Care",
//                 description: "Routine checkups, wellness exams, and preventive healthcare to keep you at your best.",
//               },
//               {
//                 icon: <FaHeartbeat className="text-4xl text-blue-500 mb-4" />,
//                 image: specImage,
//                 title: "Specialized Care",
//                 description: "Expert treatment for chronic conditions, women's health, pediatrics, and more.",
//               },
//               {
//                 icon: <FaAmbulance className="text-4xl text-blue-500 mb-4" />,
//                 image: urgentImage,
//                 title: "Urgent Care",
//                 description: "Quick and reliable treatment for non-life-threatening emergencies.",
//               },
//               {
//                 icon: <FaFlask className="text-4xl text-blue-500 mb-4" />,
//                 image: diagnosticImage,
//                 title: "Diagnostics",
//                 description: "On-site lab testing, imaging, and diagnostics for accurate and timely results.",
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 {service.icon}
//                 <img
//                   src={service.image || "/placeholder.svg"}
//                   alt={service.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{service.title}</h3>
//                 <p className="mt-2 text-gray-700">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Patient-Centered Experience
//           </motion.h2>
//           <div className="relative">
//             <img
//               src={patientImage || "/placeholder.svg"}
//               alt="Patient Experience"
//               className="w-full h-72 object-cover rounded-lg opacity-70"
//             />
//             <motion.p
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               className="absolute inset-0 flex items-center justify-center text-center text-white max-w-2xl mx-auto z-10 bg-black bg-opacity-50 p-6 rounded-lg"
//             >
//               We believe in treating patients like family. Our warm, welcoming environment and attentive team make sure
//               your experience is as comfortable and stress-free as possible. We're here to listen, guide, and care for
//               you every step of the way.
//             </motion.p>
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Contact Us
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-center"
//           >
//             <p className="text-gray-700">Location: Kanakai-03, Surunga, Jhapa</p>
//             <p className="text-gray-700">Phone: 023-553097 | 9804964107</p>
//             <p className="text-gray-700">Email: surungamedicineclinic@gmail.com</p>
//             <Link to="/contact-us">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
//               >
//                 Book Appointment
//               </motion.button>
//             </Link>
//           </motion.div>
//         </section>
        
//       </div>
//     </div>
//   )
// }

// export default Home




// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "react-router-dom"
// import axios from "axios"
// import { FaUserMd, FaHospital, FaPhoneAlt, FaStethoscope, FaHeartbeat, FaAmbulance, FaFlask } from "react-icons/fa"
// import teamImage from "../assets/team.png"
// import compImage from "../assets/comprehensive.png"
// import techImage from "../assets/technology.png"
// import diagnosticImage from "../assets/diagnostic.jpg"
// import primeImage from "../assets/primcare.webp"
// import specImage from "../assets/specialcare.png"
// import urgentImage from "../assets/urgentcare.jpg"
// import patientImage from "../assets/patientcare.webp"

// const Home = () => {
//   const [banners, setBanners] = useState([])
//   const [showPopup, setShowPopup] = useState(true)
//   const [selectedService, setSelectedService] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/banners/`)
//       .then((response) => setBanners(response.data))
//       .catch((error) => console.error("Error fetching banners:", error))
//   }, [])

//   const handleClosePopup = () => {
//     setShowPopup(false)
//   }

//   const closeModal = () => setSelectedService(null)
//   const ServiceModal = () => setSelectedService(null)

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className="font-sans mt-0 bg-blue-20">
//       <motion.div
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
//         className="mt-1 flex justify-center"
//       >
//         <div className="bg-white  p-3 rounded-full shadow-2xl">
//           <FaHospital className="text-6xl text-indigo-600" />
//         </div>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="mt-8 text-center"
//       >
//         <h3 className="text-3xl font-bold text-indigo-900 mb-2">Surunga Medicine Center</h3>
//         <p className="text-xl text-indigo-700">Your Health, Our Priority</p>
//       </motion.div>
//       {showPopup && banners.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//         >
//           <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
//               onClick={handleClosePopup}
//             >
//               X
//             </button>
//             {banners.map((banner, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="mb-4"
//               >
//                 <img
//                   src={banner.image || "/placeholder.svg"}
//                   alt={banner.caption}
//                   className="w-full h-64 object-cover rounded mb-2"
//                 />
//                 <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <section className="text-center space-y-8 py-5">
//           {/* <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-2xl font-bold text-blue-900"
//           >
//             Welcome to Surunga Medicine Center &
//           </motion.h1> */}
//           <motion.p
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//           >
//             Providing quality healthcare services with a focus on patient comfort and advanced medical technologies.
//           </motion.p>
//           <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
//             <Link
//               to="/request-call"
//               className="inline-block px-8 py-3 text-white font-medium bg-green-500 rounded-full hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
//             >
//               Book an Appointment
//             </Link>
//           </motion.div>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaUserMd className="text-4xl text-blue-500 mb-4" />,
//               title: "Expert Doctors",
//               description: "Our team of experienced and qualified doctors are here to provide you with the best care.",
//             },
//             {
//               icon: <FaHospital className="text-4xl text-blue-500 mb-4" />,
//               title: "Modern Facilities",
//               description:
//                 "State-of-the-art medical equipment and comfortable facilities for all your healthcare needs.",
//             },
//             {
//               icon: <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />,
//               title: "24/7 Support",
//               description: "Round-the-clock medical support to ensure you receive care when you need it most.",
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               {feature.icon}
//               <h2 className="text-2xl font-semibold text-blue-800 mb-4">{feature.title}</h2>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               {
//                 image: teamImage,
//                 title: "Experienced Team",
//                 description:
//                   "Our skilled and compassionate healthcare professionals are here to meet your unique needs.",
//               },
//               {
//                 image: compImage,
//                 title: "Comprehensive Services",
//                 description: "From preventive care to advanced medical treatments, we've got you covered.",
//               },
//               {
//                 image: techImage,
//                 title: "State-of-the-Art Facilities",
//                 description:
//                   "We combine modern technology with a patient-first approach to make your visits comfortable and effective.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{item.title}</h3>
//                 <p className="mt-2 text-gray-700">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Our Services
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               {
//                 icon: <FaStethoscope className="text-4xl text-blue-500 mb-4" />,
//                 image: primeImage,
//                 title: "Primary Care",
//                 description: "Routine checkups, wellness exams, and preventive healthcare to keep you at your best.",
//               },
//               {
//                 icon: <FaHeartbeat className="text-4xl text-blue-500 mb-4" />,
//                 image: specImage,
//                 title: "Specialized Care",
//                 description: "Expert treatment for chronic conditions, women's health, pediatrics, and more.",
//               },
//               {
//                 icon: <FaAmbulance className="text-4xl text-blue-500 mb-4" />,
//                 image: urgentImage,
//                 title: "Urgent Care",
//                 description: "Quick and reliable treatment for non-life-threatening emergencies.",
//               },
//               {
//                 icon: <FaFlask className="text-4xl text-blue-500 mb-4" />,
//                 image: diagnosticImage,
//                 title: "Diagnostics",
//                 description: "On-site lab testing, imaging, and diagnostics for accurate and timely results.",
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 {service.icon}
//                 <img
//                   src={service.image || "/placeholder.svg"}
//                   alt={service.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{service.title}</h3>
//                 <p className="mt-2 text-gray-700">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Patient-Centered Experience
//           </motion.h2>
//           <div className="relative">
//             <img
//               src={patientImage || "/placeholder.svg"}
//               alt="Patient Experience"
//               className="w-full h-72 object-cover rounded-lg opacity-70"
//             />
//             <motion.p
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               className="absolute inset-0 flex items-center justify-center text-center text-white max-w-2xl mx-auto z-10 bg-black bg-opacity-50 p-6 rounded-lg"
//             >
//               We believe in treating patients like family. Our warm, welcoming environment and attentive team make sure
//               your experience is as comfortable and stress-free as possible. We're here to listen, guide, and care for
//               you every step of the way.
//             </motion.p>
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Contact Us
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-center"
//           >
//             <p className="text-gray-700">Location: Kanakai-03, Surunga, Jhapa</p>
//             <p className="text-gray-700">Phone: 023-553097 | 9804964107</p>
//             <p className="text-gray-700">Email: surungamedicineclinic@gmail.com</p>
//             <Link to="/request-call">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
//               >
//                 Book Appointment
//               </motion.button>
//             </Link>
//           </motion.div>
//         </section>
//       </div>
//       <AnimatePresence>
//         {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Home

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { FaUserMd, FaHospital, FaPhoneAlt, FaStethoscope, FaHeartbeat, FaAmbulance, FaFlask } from "react-icons/fa";
// import teamImage from "../assets/team.png";
// import compImage from "../assets/comprehensive.png";
// import techImage from "../assets/technology.png";
// import diagnosticImage from "../assets/diagnostic.jpg";
// import primeImage from "../assets/primcare.webp";
// import specImage from "../assets/specialcare.png";
// import urgentImage from "../assets/urgentcare.jpg";
// import patientImage from "../assets/patientcare.webp";

// const Home = () => {
//   const [banners, setBanners] = useState([]);
//   const [showPopup, setShowPopup] = useState(true);
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/banners/`)
//       .then((response) => setBanners(response.data))
//       .catch((error) => console.error("Error fetching banners:", error));
//   }, []);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const closeModal = () => setSelectedService(null);
//   const ServiceModal = () => setSelectedService(null);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="font-sans mt-0 bg-blue-20">
//      <div className="mt-10 flex justify-center">
//   <motion.div
//     initial={{ scale: 0, rotate: -180 }}
//     animate={{ scale: 1, rotate: 0 }}
//     transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
//     className="flex justify-center"
//   >
//     <div className="bg-white p-3 rounded-full shadow-2xl">
//       <FaHospital className="text-6xl text-indigo-600" />
//     </div>
//   </motion.div>
// </div>

// <div className="mt-8 text-center">
//   <motion.h3
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1, delay: 1 }}
//     className="text-3xl font-bold text-indigo-900 mb-2"
//   >
//     Surunga Medicine Center
//   </motion.h3>
//   <p className="text-xl text-indigo-700">Your Health, Our Priority</p>
// </div>

//       {showPopup && banners.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//         >
//           <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
//               onClick={handleClosePopup}
//             >
//               X
//             </button>
//             {banners.map((banner, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="mb-4"
//               >
//                 <img
//                   src={banner.image || "/placeholder.svg"}
//                   alt={banner.caption}
//                   className="w-full h-64 object-cover rounded mb-2"
//                 />
//                 <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <section className="text-center space-y-8 py-5">
//           <motion.p
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//           >
//             Providing quality healthcare services with a focus on patient comfort and advanced medical technologies.
//           </motion.p>
//           <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
//             <Link
//               to="/request-call"
//               className="inline-block px-8 py-3 text-white font-medium bg-green-500 rounded-full hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
//             >
//               Book an Appointment
//             </Link>
//           </motion.div>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[ 
//             { icon: <FaUserMd className="text-4xl text-blue-500 mb-4" />, title: "Expert Doctors", description: "Our team of experienced and qualified doctors are here to provide you with the best care." },
//             { icon: <FaHospital className="text-4xl text-blue-500 mb-4" />, title: "Modern Facilities", description: "State-of-the-art medical equipment and comfortable facilities for all your healthcare needs." },
//             { icon: <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />, title: "24/7 Support", description: "Round-the-clock medical support to ensure you receive care when you need it most." },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               {feature.icon}
//               <h2 className="text-2xl font-semibold text-blue-800 mb-4">{feature.title}</h2>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[ 
//               { image: teamImage, title: "Experienced Team", description: "Our skilled and compassionate healthcare professionals are here to meet your unique needs." },
//               { image: compImage, title: "Comprehensive Services", description: "From preventive care to advanced medical treatments, we've got you covered." },
//               { image: techImage, title: "State-of-the-Art Facilities", description: "We combine modern technology with a patient-first approach to make your visits comfortable and effective." },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{item.title}</h3>
//                 <p className="mt-2 text-gray-700">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Our Services
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[ 
//               { icon: <FaStethoscope className="text-4xl text-blue-500 mb-4" />, image: primeImage, title: "Primary Care", description: "Routine checkups, wellness exams, and preventive healthcare to keep you at your best." },
//               { icon: <FaHeartbeat className="text-4xl text-blue-500 mb-4" />, image: specImage, title: "Specialized Care", description: "Expert treatment for chronic conditions, women's health, pediatrics, and more." },
//               { icon: <FaAmbulance className="text-4xl text-blue-500 mb-4" />, image: urgentImage, title: "Urgent Care", description: "Quick and reliable treatment for non-life-threatening emergencies." },
//               { icon: <FaFlask className="text-4xl text-blue-500 mb-4" />, image: diagnosticImage, title: "Diagnostics", description: "On-site lab testing, imaging, and diagnostics for accurate and timely results." },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 {service.icon}
//                 <img
//                   src={service.image || "/placeholder.svg"}
//                   alt={service.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{service.title}</h3>
//                 <p className="mt-2 text-gray-700">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Patient-Centered Experience
//           </motion.h2>
//           <div className="relative">
//             <img
//               src={patientImage || "/placeholder.svg"}
//               alt="Patient Experience"
//               className="w-full h-72 object-cover rounded-lg opacity-70"
//             />
//             <motion.p
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               className="absolute inset-0 flex items-center justify-center text-center text-white max-w-2xl mx-auto z-10 bg-black bg-opacity-50 p-6 rounded-lg"
//             >
//               We believe in treating patients like family. Our warm, welcoming environment and attentive team make sure
//               your experience is as comfortable and stress-free as possible. We're here to listen, guide, and care for
//               you every step of the way.
//             </motion.p>
//           </div>
//         </section>

//         <section className="py-12 px-6 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-8"
//           >
//             Contact Us
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-center"
//           >
//             <p className="text-gray-700">Location: Kanakai-03, Surunga, Jhapa</p>
//             <p className="text-gray-700">Phone: 023-553097 | 9804964107</p>
//             <p className="text-gray-700">Email: surungamedicineclinic@gmail.com</p>
//             <Link to="/request-call">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
//               >
//                 Book Appointment
//               </motion.button>
//             </Link>
//           </motion.div>
//         </section>
//       </div>

//       <AnimatePresence>
//         {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Home;

// // Most Beautiful with every details and booking details in side

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import axios from "axios"
import { FaUserMd, FaHospital, FaPhoneAlt, FaStethoscope,FaClock,FaMapMarkerAlt, FaHeartbeat, FaAmbulance, FaFlask } from "react-icons/fa"
import teamImage from "../assets/team.png"
import compImage from "../assets/comprehensive.png"
import techImage from "../assets/technology.png"
import diagnosticImage from "../assets/diagnostic.jpg"
import primeImage from "../assets/primcare.webp"
import specImage from "../assets/specialcare.png"
import urgentImage from "../assets/urgentcare.jpg"
import GroupImage from "../assets/GroupImage.jpg"
import GroupNoBg from "../assets/GroupNoBg.png"
import patientImage from "../assets/patientcare.webp"
import radiograph from '../assets/checkup/radiograph.jpeg'
import micros1 from '../assets/checkup/micros1.jpeg'
import xray from '../assets/checkup/xray.jpeg'
import general from '../assets/checkup/general.jpeg'
import special from '../assets/checkup/ecg.jpeg'
import urgent from '../assets/checkup/couns.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorSlider from "./Doctorsliding.jsx"
import HomeServices from "./HomeServices.jsx"
import c1 from '../assets/c1.jpg'
import c3 from '../assets/c3.jpg'
import c7 from '../assets/c7.jpg'
import loc from '../assets/checkup/loc.jpg'
import serv from '../assets/checkup/serv.jpg'
import HealthcareHero from "./happypatients.jsx"
import ContactUs from "./Homecontact.jsx"
const images = [
  c1, // Placeholder image
  c3,
  c7,
  loc,
  serv
];
const Home = () => {
  const [banners, setBanners] = useState([])
  const [showPopup, setShowPopup] = useState(true)
  const [selectedService, setSelectedService] = useState(null)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#0B3C7F",
          opacity: "0.5",
        }}
      />
    ),
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/banners/`)
      .then((response) => setBanners(response.data))
      .catch((error) => console.error("Error fetching banners:", error))
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const closeModal = () => setSelectedService(null)
  const ServiceModal = () => setSelectedService(null)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const FeatureCard = ({ icon, title, description }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
      >
        {icon}
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
    )
  }

  const ServiceCard = ({ icon, image, title, description }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-6  rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      >
        {icon}
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    )
  }

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="font-sans bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="p-8 space-y-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-indigo-100 p-3 rounded-full">
                <FaHospital className="text-5xl text-indigo-600" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-1xl lg:text-3xl font-bold text-gray-800 mb-2">Surunga Medicine Center & Clinic</h1>
              <p className="text-1xl lg:text-2xl text-gray-600 mb-6">Your Health, Our Priority</p>
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 text-lg font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Book an Appointment
              </Link>
            </motion.div>

             
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-5 rounded-lg shadow-lg mt-6">
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-0"> 
 
     <FeatureCard 
      clas
      icon={<FaMapMarkerAlt className="text-4xl text-indigo-500 mb-2" />}
      title="Our Location"
      description="📍 Surunga, Jhapa, Nepal"
    />
    <FeatureCard
      icon={<FaPhoneAlt className="text-4xl text-indigo-500 mb-2" />}
      title="Contact Us"
      description={
        <>
          📞 9804964107 |
             023-553097
        </>
      }
    />
    <FeatureCard
      icon={<FaClock className="text-4xl text-indigo-500 mb-2" />}
      title="Working Hours"
      description={
        <>
          🕒 Always Open: 6:00 AM - 8:00 PM <br />
          {/* 🕒 8:00 PM - 6:00 AM : Emergency Services Only */}
        </>
      }
    /> 
 </div>
</div> 

          </div>
          <div className="relative">
            <img src={GroupImage || "/placeholder.svg"} alt="Patient Care" className="w-full h-full object-cover" />

          </div>
        </div>
      
      </div>
      

      {showPopup && banners.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
              onClick={handleClosePopup}
            >
              X
            </button>
            {banners.map((banner, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-4"
              >
                <img
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.caption}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>

      {showPopup && banners.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
              onClick={handleClosePopup}
            >
              X
            </button>
            {banners.map((banner, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-4"
              >
                <img
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.caption}
                  className="w-full h-64 object-cover rounded mb-2"
                />
                <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
 <div>
 <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold text-[#0B3C7F] mb-6">Who we are</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        We are Surunga's Leading Preventative Clinic committed to providing the highest quality patient care. 
        We treat patients of all ages emphasizing preventive medicine and wellness. Our state-of-the-art facility 
        engages skillful medical professionals who use the latest equipment to provide quality patient care in the clinic 
        or in the comfort of your home.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        We believe attaining top performance happens only through proper care, exercise, nutrition, and education. 
        We will provide quality care to our patients to prevent the onset and progression of diseases.
      </p>
      <Link
        to="/about"
        className="inline-block bg-[#0B3C7F] text-white px-6 py-2 rounded-full hover:bg-[#092C5C] transition duration-300"
      >
        Learn More About Us
      </Link>
    </div>

    {/* Slider Section */}
    <div className="lg:w-1/2  w-full">
      <div className="relative w-full h-56 lg:h-1/2 sm:h-72 md:h-96">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          fade={true}
          arrows={true}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full h-full lg:h-[500px] relative overflow-hidden  object-cover rounded-lg shadow-lg">
              <img
                src={img || "/placeholder.svg"}
                alt={`Slider ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
</section>

      <style jsx>
        {`
          .slick-prev,
          .slick-next {
            z-index: 1;
            width: 40px;
            height: 40px;
          }
          .slick-prev {
            left: 20px;
          }
          .slick-next {
            right: 20px;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 40px;
            color: #0b3c7f;
            opacity: 0.75;
          }
        `}
      </style>
    </div>
  
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-8 py-12 space-y-24">
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserMd className="text-4xl text-blue-500 mb-4" />}
            title="Expert Doctors"
            description="Our team of experienced and qualified doctors are here to provide you with the best care."
          />
          <FeatureCard
            icon={<FaHospital className="text-4xl text-blue-500 mb-4" />}
            title="Modern Facilities"
            description="State-of-the-art medical equipment and comfortable facilities for all your healthcare needs."
          />
          <FeatureCard
            icon={<FaPhoneAlt className="text-4xl text-blue-500 mb-4" />}
            title="24/7 Support"
            description="Round-the-clock medical support to ensure you receive care when you need it most."
          />
        </section>

        
        <section className="py-6 px-6  sm:px-0 sm:py-3 bg-white rounded-lg shadow-md">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-semibold text-center text-gray-800 mb-5"
          >
            Why Choose Us?
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              { image: teamImage, title: "Experienced Team", description: "Our skilled and compassionate healthcare professionals are here to meet your unique needs." },
              { image: radiograph, title: "Comprehensive Services", description: "From preventive care to advanced medical treatments, we've got you covered." },
              { image: micros1, title: "State-of-the-Art Facilities", description: "We combine modern technology with a patient-first approach to make your visits comfortable and effective." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="max-w-xs text-center shadow-lg p-6 sm:px-0 sm:py-2 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold text-blue-600 mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
          </section>

        {/* Our Services Section */}
        <HomeServices/>
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-2 pt-4"
          >
            HealthCare Categories
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            <ServiceCard
              icon={<FaStethoscope className="text-4xl text-blue-500 mb-4" />}
              image={general}
              title="Primary Care"
              description="Routine checkups, wellness exams, and preventive healthcare to keep you at your best."
            />
            <ServiceCard
              icon={<FaHeartbeat className="text-4xl text-blue-500 mb-4" />}
              image={special}
              title="Specialized Care"
              description="Expert treatment for chronic conditions, women's health, pediatrics, and more."
            />
            <ServiceCard
              icon={<FaAmbulance className="text-4xl text-blue-500 mb-4" />}
              image={urgent}
              title="Urgent Care"
              description="Quick and reliable treatment for non-life-threatening emergencies."
            />
            <ServiceCard
              icon={<FaFlask className="text-4xl text-blue-500 mb-4" />}
              image={xray}
              title="Diagnostics"
              description="On-site lab testing, imaging, and diagnostics for accurate and timely results."
            />
          </div>
        </section>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center text-gray-800">
        Meet Our Doctors  </h1>
        <DoctorSlider />
        
        {/* <div className="parent-container pt-0">
  <div className="doctor-slider p-0 mt-2">
    <h2 className="text-center font-bold text-xl mb-4">
      Meet Our Exceptional Doctors
    </h2>
  <div className="slider-content p-0">
       <DoctorSlider/>
    </div>
  </div>
</div> */}
   
       {/* <div className="flex min-h-screen mt-0  flex-col items-center justify-center p-1 sm:p-8 md:p-12 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center text-gray-800">
        Meet Our Exceptional Doctors
      </h1>
      <DoctorSlider />
    </div> */}
    {/* <div className="flex min-h-screen flex-col items-center justify-start p-1 sm:py-12 sm:p-6 md:p-8 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
        Meet Our Exceptional Doctors
      </h1>
      <DoctorSlider />
    </div> */}
    {/* Patient-Centered Experience Section */}
        {/* <section className="grid md:grid-cols-2 mx-auto mt-0 gap-8 items-center bg-white rounded-xl shadow-2xl overflow-hidden p-0">
          <div>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Patient-Centered Experience
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              We believe in treating patients like family.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={patientImage || "/placeholder.svg"}
              alt="Patient Experience"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </section> */}
        <HealthcareHero/>

        {/* Contact Section */}
        {/* <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8 pt-12"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center pb-12"
          >
            <p className="text-gray-700 mb-2">Location: Kanakai-03, Surunga, Jhapa</p>
            <p className="text-gray-700 mb-2">Phone: 023-553097 | 9804964107</p>
            <p className="text-gray-700 mb-6">Email: surungamedicineclinic@gmail.com</p>
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              >
                Book Appointment
              </motion.button>
            </Link>
          </motion.div>
        </section> */}
        <ContactUs/>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default Home

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "react-router-dom"
// import axios from "axios"
// import {
//   FaUserMd,
//   FaHospital,
//   FaPhoneAlt,
//   FaStethoscope,
//   FaClock,
//   FaMapMarkerAlt,
//   FaHeartbeat,
//   FaAmbulance,
//   FaFlask,
//   FaEnvelope,
//   FaSearch,
// } from "react-icons/fa"
// import teamImage from "../assets/team.png"
// import compImage from "../assets/comprehensive.png"
// import techImage from "../assets/technology.png"
// import diagnosticImage from "../assets/diagnostic.jpg"
// import primeImage from "../assets/primcare.webp"
// import specImage from "../assets/specialcare.png"
// import urgentImage from "../assets/urgentcare.jpg"
// import patientImage from "../assets/patientcare.webp"

// const Home = () => {
//   const [banners, setBanners] = useState([])
//   const [showPopup, setShowPopup] = useState(true)
//   const [selectedService, setSelectedService] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/banners/`)
//       .then((response) => setBanners(response.data))
//       .catch((error) => console.error("Error fetching banners:", error))
//   }, [])

//   const handleClosePopup = () => setShowPopup(false)
//   const closeModal = () => setSelectedService(null)
//   const ServiceModal = () => setSelectedService(null)
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   const FeatureCard = ({ icon, title, description }) => {
//     return (
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
//       >
//         {icon}
//         <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </motion.div>
//     )
//   }

//   const ServiceCard = ({ icon, image, title, description }) => {
//     return (
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-white p-6  rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//       >
//         {icon}
//         <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Top Bar */}
//       <div className="bg-[#0B3C7F] text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
//           <div className="flex items-center space-x-6">
//             <a href="mailto:info@surungamedicineclinic.com" className="flex items-center space-x-2 text-sm">
//               <FaEnvelope className="text-xs" />
//               <span>info@surungamedicineclinic.com</span>
//             </a>
//             <div className="flex items-center space-x-2 text-sm">
//               <FaPhoneAlt className="text-xs" />
//               <span>01-5400400 / 9863933360</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center">
//               <span className="text-sm">Appointment Hotline Number: 9861986614</span>
//             </div
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-[#0B3C7F]">
//             Surunga Medicine Center
//           </Link>
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#0B3C7F]"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//             <Link to="/services" className="text-gray-700 hover:text-[#0B3C7F]">
//               Our Services
//             </Link>
//             <Link to="/doctors" className="text-gray-700 hover:text-[#0B3C7F]">
//               Our Doctors
//             </Link>
//             <Link to="/blog" className="text-gray-700 hover:text-[#0B3C7F]">
//               Blog
//             </Link>
//             <Link to="/vaccines" className="text-gray-700 hover:text-[#0B3C7F]">
//               All About Vaccines
//             </Link>
//             <Link to="/contact" className="text-gray-700 hover:text-[#0B3C7F]">
//               Contact us
//             </Link>
//             <button className="bg-[#28A745] text-white px-6 py-2 rounded-full hover:bg-[#218838] transition duration-300">
//               Make a Payment
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-20">
//           <div className="text-center max-w-3xl mx-auto">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl font-bold text-[#0B3C7F] mb-4"
//             >
//               We take care of your health first
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl text-gray-600 mb-8"
//             >
//               We're Just a Click Away – Schedule Your Appointment with us
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <Link
//                 to="/appointment"
//                 className="bg-[#0B3C7F] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#092C5C] transition duration-300"
//               >
//                 Make Appointment
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Who We Are Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-[#0B3C7F] mb-6">Who we are</h2>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               We are Surunga's Leading Preventative Clinic committed to providing the highest quality patient care. We
//               treat patients of all ages emphasizing preventive medicine and wellness. Our state of art facility engages
//               skillful medical professionals who use latest equipment to provide quality patient care in the clinic or
//               in the comfort of your home.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-8">
//               We believe attaining top performance happens only through proper care, exercise, nutrition, and education.
//               We will provide quality care to our patients to prevent the onset and progression of diseases.
//             </p>
//             <Link
//               to="/about"
//               className="inline-block bg-[#0B3C7F] text-white px-6 py-2 rounded-full hover:bg-[#092C5C] transition duration-300"
//             >
//               Learn More About Us
//             </Link>
//           </div>
//           <div className="relative">
//             <img
//               src="https://sjc.microlink.io/zaZxC4JNYcG1SllI0QdGLr2-YcZlVBejlswTDZMXEem2pGqYMZXX_1UItfKmIZ41MWkfiu8yHB1EAgCUDrSJ2g.jpeg"
//               alt="Medical Procedure"
//               className="rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Hero Section */}
//       {/* <div className="font-sans bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Column */}
//       {/* <div className="p-8 space-y-6">
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20 }}
//               className="flex justify-center mb-4"
//             >
//               <div className="bg-indigo-100 p-3 rounded-full">
//                 <FaHospital className="text-5xl text-indigo-600" />
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-center"
//             >
//               <h1 className="text-4xl font-bold text-gray-800 mb-2">Surunga Medicine Center & Clinic</h1>
//               <p className="text-xl text-gray-600 mb-6">Your Health, Our Priority</p>
//               <Link
//                 to="/contact-us"
//                 className="inline-block px-6 py-3 text-lg font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
//               >
//                 Book an Appointment
//               </Link>
//             </motion.div>

            
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-2 rounded-lg shadow-lg mt-2">
  
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-0"> 
 
//      <FeatureCard 
//       clas
//       icon={<FaMapMarkerAlt className="text-4xl text-indigo-500 mb-2" />}
//       title="Our Location"
//       description="📍 Surunga, Jhapa, Nepal"
//     />
//     <FeatureCard
//       icon={<FaPhoneAlt className="text-4xl text-indigo-500 mb-2" />}
//       title="Contact Us"
//       description={
//         <>
//           📞 9804964107 <br />
//           ✉️ surungamedicineclinic@gmail.com
//         </>
//       }
//     />
//     <FeatureCard
//       icon={<FaClock className="text-4xl text-indigo-500 mb-2" />}
//       title="Working Hours"
//       description={
//         <>
//           🕒 Always Open: 6:00 AM - 8:00 PM <br />
//           🕒 8PM - 10PM: Emergency Services Only
//         </>
//       }
//     /> 
//  </div>
// </div> 

//           </div>

//           {/* Right Column */}
//       {/* <div className="relative">
//             <img src={patientImage || "/placeholder.svg"} alt="Patient Care" className="w-full h-full object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 p-8 text-black">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <FaStethoscope className="text-2xl mb-1" />
//                   <p className="text-sm">Primary Care</p>
//                 </div>
//                 <div>
//                   <FaHeartbeat className="text-2xl mb-1" />
//                   <p className="text-sm">Specialized Care</p>
//                 </div>
//                 <div>
//                   <FaAmbulance className="text-2xl mb-1" />
//                   <p className="text-sm">Urgent Care</p>
//                 </div>
//                 <div>
//                   <FaFlask className="text-2xl mb-1" />
//                   <p className="text-sm">Diagnostics</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {showPopup && banners.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//         >
//           <div className="bg-white rounded-lg p-6 max-w-md shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
//               onClick={handleClosePopup}
//             >
//               X
//             </button>
//             {banners.map((banner, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="mb-4"
//               >
//                 <img
//                   src={banner.image || "/placeholder.svg"}
//                   alt={banner.caption}
//                   className="w-full h-64 object-cover rounded mb-2"
//                 />
//                 <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
//         {/* Features Section */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FeatureCard
//             icon={<FaUserMd className="text-4xl text-blue-500 mb-4" />}
//             title="Expert Doctors"
//             description="Our team of experienced and qualified doctors are here to provide you with the best care."
//           />
//           <FeatureCard
//             icon={<FaHospital className="text-4xl text-blue-500 mb-4" />}
//             title="Modern Facilities"
//             description="State-of-the-art medical equipment and comfortable facilities for all your healthcare needs."
//           />
//           <FeatureCard
//             icon={<FaPhoneAlt className="text-4xl text-blue-500 mb-4" />}
//             title="24/7 Support"
//             description="Round-the-clock medical support to ensure you receive care when you need it most."
//           />
//         </section>

//         <section className="py-6 px-6 sm:px-0 sm:py-3 bg-white rounded-lg shadow-md">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-semibold text-center text-gray-800 mb-5"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               {
//                 image: teamImage,
//                 title: "Experienced Team",
//                 description:
//                   "Our skilled and compassionate healthcare professionals are here to meet your unique needs.",
//               },
//               {
//                 image: compImage,
//                 title: "Comprehensive Services",
//                 description: "From preventive care to advanced medical treatments, we've got you covered.",
//               },
//               {
//                 image: techImage,
//                 title: "State-of-the-Art Facilities",
//                 description:
//                   "We combine modern technology with a patient-first approach to make your visits comfortable and effective.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className="max-w-xs text-center shadow-lg p-6 sm:px-0 sm:py-2 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
//               >
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600 mt-4">{item.title}</h3>
//                 <p className="mt-2 text-gray-700">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Our Services Section */}
//         <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-3xl font-bold text-center text-gray-800 mb-2 pt-4"
//           >
//             Our Services
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
//             <ServiceCard
//               icon={<FaStethoscope className="text-4xl text-blue-500 mb-4" />}
//               image={primeImage}
//               title="Primary Care"
//               description="Routine checkups, wellness exams, and preventive healthcare to keep you at your best."
//             />
//             <ServiceCard
//               icon={<FaHeartbeat className="text-4xl text-blue-500 mb-4" />}
//               image={specImage}
//               title="Specialized Care"
//               description="Expert treatment for chronic conditions, women's health, pediatrics, and more."
//             />
//             <ServiceCard
//               icon={<FaAmbulance className="text-4xl text-blue-500 mb-4" />}
//               image={urgentImage}
//               title="Urgent Care"
//               description="Quick and reliable treatment for non-life-threatening emergencies."
//             />
//             <ServiceCard
//               icon={<FaFlask className="text-4xl text-blue-500 mb-4" />}
//               image={diagnosticImage}
//               title="Diagnostics"
//               description="On-site lab testing, imaging, and diagnostics for accurate and timely results."
//             />
//           </div>
//         </section>

//         {/* Patient-Centered Experience Section */}
//         <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-2xl overflow-hidden p-8">
//           <div>
//             <motion.h2
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               className="text-3xl font-bold text-gray-800 mb-6"
//             >
//               Patient-Centered Experience
//             </motion.h2>
//             <motion.p
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               transition={{ delay: 0.2 }}
//               className="text-gray-600 leading-relaxed"
//             >
//               We believe in treating patients like family.
//             </motion.p>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img
//               src={patientImage || "/placeholder.svg"}
//               alt="Patient Experience"
//               className="w-full h-auto object-cover rounded-lg shadow-md"
//             />
//           </motion.div>
//         </section>

//         {/* Contact Section */}
//         <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold text-center text-gray-800 mb-8 pt-12"
//           >
//             Contact Us
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-center pb-12"
//           >
//             <p className="text-gray-700 mb-2">Location: Kanakai-03, Surunga, Jhapa</p>
//             <p className="text-gray-700 mb-2">Phone: 023-553097 | 9804964107</p>
//             <p className="text-gray-700 mb-6">Email: surungamedicineclinic@gmail.com</p>
//             <Link to="/contact-us">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
//               >
//                 Book Appointment
//               </motion.button>
//             </Link>
//           </motion.div>
//         </section>
//       </div>

//       <AnimatePresence>
//         {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Home

