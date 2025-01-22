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

// Most Beautiful with every details and booking details in side

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import axios from "axios"
import { FaUserMd, FaHospital, FaPhoneAlt, FaStethoscope, FaHeartbeat, FaAmbulance, FaFlask } from "react-icons/fa"
import teamImage from "../assets/team.png"
import compImage from "../assets/comprehensive.png"
import techImage from "../assets/technology.png"
import diagnosticImage from "../assets/diagnostic.jpg"
import primeImage from "../assets/primcare.webp"
import specImage from "../assets/specialcare.png"
import urgentImage from "../assets/urgentcare.jpg"
import patientImage from "../assets/patientcare.webp"

const Home = () => {
  const [banners, setBanners] = useState([])
  const [showPopup, setShowPopup] = useState(true)
  const [selectedService, setSelectedService] = useState(null)

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
        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
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
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
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
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Surunga Medicine & Clinic</h1>
              <p className="text-xl text-gray-600 mb-6">Your Health, Our Priority</p>
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 text-lg font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Book an Appointment
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <FeatureCard
                icon={<FaUserMd className="text-3xl text-indigo-500 mb-2" />}
                title="Expert Doctors"
                description="Experienced and qualified doctors providing the best care."
              />
              <FeatureCard
                icon={<FaHospital className="text-3xl text-indigo-500 mb-2" />}
                title="Modern Facilities"
                description="State-of-the-art equipment for all your healthcare needs."
              />
              <FeatureCard
                icon={<FaPhoneAlt className="text-3xl text-indigo-500 mb-2" />}
                title="24/7 Support"
                description="Round-the-clock medical support when you need it most."
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img src={patientImage || "/placeholder.svg"} alt="Patient Care" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Patient-Centered Experience</h2>
              <p className="text-sm mb-4">
                We believe in treating patients like family, ensuring your comfort and well-being throughout your visit.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FaStethoscope className="text-2xl mb-1" />
                  <p className="text-sm">Primary Care</p>
                </div>
                <div>
                  <FaHeartbeat className="text-2xl mb-1" />
                  <p className="text-sm">Specialized Care</p>
                </div>
                <div>
                  <FaAmbulance className="text-2xl mb-1" />
                  <p className="text-sm">Urgent Care</p>
                </div>
                <div>
                  <FaFlask className="text-2xl mb-1" />
                  <p className="text-sm">Diagnostics</p>
                </div>
              </div>
            </div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
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

        {/* Why Choose Us Section
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-12 pt-12"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 p-8">
            <FeatureCard
              image={teamImage}
              title="Experienced Team"
              description="Our skilled and compassionate healthcare professionals are here to meet your unique needs."
            />
            <FeatureCard
              image={compImage}
              title="Comprehensive Services"
              description="From preventive care to advanced medical treatments, we've got you covered."
            />
            <FeatureCard
              image={techImage}
              title="State-of-the-Art Facilities"
              description="We combine modern technology with a patient-first approach to make your visits comfortable and effective."
            />
          </div>
        </section> */}
        
        <section className="py-12 px-6 bg-white rounded-lg shadow-md">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-semibold text-center text-gray-800 mb-8"
          >
            Why Choose Us?
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              { image: teamImage, title: "Experienced Team", description: "Our skilled and compassionate healthcare professionals are here to meet your unique needs." },
              { image: compImage, title: "Comprehensive Services", description: "From preventive care to advanced medical treatments, we've got you covered." },
              { image: techImage, title: "State-of-the-Art Facilities", description: "We combine modern technology with a patient-first approach to make your visits comfortable and effective." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="max-w-xs text-center shadow-lg p-6 bg-blue-50 rounded-lg hover:shadow-2xl transition-all"
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
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-12 pt-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            <ServiceCard
              icon={<FaStethoscope className="text-4xl text-blue-500 mb-4" />}
              image={primeImage}
              title="Primary Care"
              description="Routine checkups, wellness exams, and preventive healthcare to keep you at your best."
            />
            <ServiceCard
              icon={<FaHeartbeat className="text-4xl text-blue-500 mb-4" />}
              image={specImage}
              title="Specialized Care"
              description="Expert treatment for chronic conditions, women's health, pediatrics, and more."
            />
            <ServiceCard
              icon={<FaAmbulance className="text-4xl text-blue-500 mb-4" />}
              image={urgentImage}
              title="Urgent Care"
              description="Quick and reliable treatment for non-life-threatening emergencies."
            />
            <ServiceCard
              icon={<FaFlask className="text-4xl text-blue-500 mb-4" />}
              image={diagnosticImage}
              title="Diagnostics"
              description="On-site lab testing, imaging, and diagnostics for accurate and timely results."
            />
          </div>
        </section>

        {/* Patient-Centered Experience Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-2xl overflow-hidden p-8">
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
              We believe in treating patients like family. Our warm, welcoming environment and attentive team make sure
              your experience is as comfortable and stress-free as possible. We're here to listen, guide, and care for
              you every step of the way.
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
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
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
        </section>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default Home

