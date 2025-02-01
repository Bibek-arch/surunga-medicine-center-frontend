// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd, FaHospital, FaAmbulance, FaFlask, FaBabyCarriage, FaTimes } from 'react-icons/fa';
// import { useInView } from 'react-intersection-observer';
// import HomeServices from './HomeServices';
// const iconMap = {
//   'General Medicine': FaUserMd,
//   'Cardiology': FaHeartbeat,
//   'Pharmacy': FaPills,
//   'Emergency': FaAmbulance,
//   'Laboratory': FaFlask,
//   'Pediatrics': FaBabyCarriage,
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const pulseAnimation = {
//   scale: [1, 1.05, 1],
//   transition: {
//     duration: 2,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// };

// function ServiceModal({ service, onClose }) {
//   return (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         className="bg-white rounded-lg p-8 max-w-2xl w-full"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-indigo-900">{service.title}</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <FaTimes size={24} />
//           </button>
//         </div>
//         <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />
//         <p className="text-gray-600 mb-4">{service.description}</p>
//         <div className="bg-indigo-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold text-indigo-900 mb-2">Key Features:</h3>
//           <ul className="list-disc list-inside text-indigo-800">
//             <li>State-of-the-art equipment</li>
//             <li>Experienced medical professionals</li>
//             <li>24/7 availability</li>
//             <li>Personalized care plans</li>
//           </ul>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// function ServiceCard({ service, index, onLearnMore }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const Icon = iconMap[service.title] || FaStethoscope;

//   return (
//     <motion.div
//       ref={ref}
//       variants={fadeInUp}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
//     >
      
//       <div className="relative">
//         <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-64 object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
//         <div className="absolute bottom-4 left-4 right-4 flex items-center">
//           <motion.div
//             animate={pulseAnimation}
//             className="bg-white p-3 rounded-full mr-4"
//           >
//             <Icon className="text-3xl text-indigo-600" />
//           </motion.div>
//           <h3 className="text-2xl font-bold text-white">{service.title}</h3>
//         </div>
//       </div>
//       <div className="p-6">
//         <p className="text-gray-600 mb-4">{service.description}</p>
//         <motion.button
//           onClick={() => onLearnMore(service)}
//           whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
//         >
//           Learn More
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }

// function Services() {
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/services/`)
//       .then((response) => setServices(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const handleLearnMore = (service) => {
//     setSelectedService(service);
//   };

//   const closeModal = () => {
//     setSelectedService(null);
//   };
 
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-extrabold text-center text-indigo-900 mt-0 mb-8"
//         >
//           Our Services
          
//         </motion.h2>
//         <HomeServices />
//         <p className='text-center text-xl font-bold mt-0 mb-6'>🩺 Caring Beyond Prescriptions </p>
//         <motion.div
//           ref={ref}
//           variants={staggerContainer}
//           initial="hidden"
//           animate={controls}
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {services.map((service, index) => (
//             <ServiceCard key={service.id} service={service} index={index} onLearnMore={handleLearnMore} />
//           ))}
//         </motion.div>
//       </div>
//       <motion.div
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
//         className="mt-16 flex justify-center"
//       >
//         <div className="bg-white p-8 rounded-full shadow-2xl">
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
//       <AnimatePresence>
//         {selectedService && (
//           <ServiceModal service={selectedService} onClose={closeModal} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Services;





"use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// const services = [
//   {
//     id: 1,
//     title: "Vaccination Services",
//     description: "Comprehensive vaccination for all age groups",
//     icon: "💉",
//     details: "Protect yourself and your loved ones with our wide range of vaccination services",
//     path: "/services/vaccination",
//   },
//   {
//     id: 2,
//     title: "Doctor Consultation",
//     description: "Expert medical consultation with specialized doctors",
//     icon: "👨‍⚕️",
//     details: "Get professional medical advice from our experienced team of doctors",
//     path: "/services/consultation",
//   },
//   {
//     id: 3,
//     title: "Whole Body Checkup",
//     description: "Comprehensive health screening packages",
//     icon: "🏥",
//     details: "Detect potential health issues early with our thorough checkup programs",
//     path: "/services/checkup",
//   },
//   {
//     id: 4,
//     title: "Imaging",
//     description: "Advanced medical imaging services",
//     icon: "🔬",
//     details: "State-of-the-art imaging technology for accurate diagnostics",
//     path: "/services/imaging",
//   },
//   {
//     id: 5,
//     title: "Minor Procedures",
//     description: "Outpatient procedures and minor surgeries",
//     icon: "🩺",
//     details: "Expert care for various minor medical procedures",
//     path: "/services/procedures",
//   },
//   {
//     id: 6,
//     title: "Pharmacy",
//     description: "In-house pharmacy services",
//     icon: "💊",
//     details: "Convenient access to prescribed medications and health products",
//     path: "/services/pharmacy",
//   },
//   {
//     id: 7,
//     title: "Healthcare Training",
//     description: "Educational programs for health awareness",
//     icon: "📚",
//     details: "Learn essential health skills and knowledge from our experts",
//     path: "/services/training",
//   },
//   {
//     id: 8,
//     title: "Home Services",
//     description: "Medical care in the comfort of your home",
//     icon: "🏠",
//     details: "Professional healthcare services delivered to your doorstep",
//     path: "/services/home",
//   },
//   {
//     id: 9,
//     title: "Endoscopy",
//     description: "Advanced endoscopic procedures",
//     icon: "🔍",
//     details: "Minimally invasive diagnostic and therapeutic endoscopy services",
//     path: "/services/endoscopy",
//   },
//   {
//     id: 10,
//     title: "Colonoscopy",
//     description: "Comprehensive colon health examinations",
//     icon: "🔬",
//     details: "Early detection and prevention of colorectal issues",
//     path: "/services/colonoscopy",
//   },
//   {
//     id: 11,
//     title: "Colposcopy",
//     description: "Specialized cervical examinations",
//     icon: "🔬",
//     details: "Advanced screening and diagnosis for cervical health",
//     path: "/services/colposcopy",
//   },
//   {
//     id: 12,
//     title: "Thermocoagulation",
//     description: "Innovative treatment for various conditions",
//     icon: "⚡",
//     details: "Cutting-edge thermocoagulation therapies for multiple medical issues",
//     path: "/services/thermocoagulation",
//   },
// ]

// export default function HomeServices() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//       transition: {
//         duration: 0.3,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
//           <p className="text-xl text-blue-700">Comprehensive healthcare solutions for your well-being</p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={cardVariants}
//               whileHover="hover"
//               onClick={() => (window.location.href = service.path)}
//               className="bg-white rounded-xl p-6 cursor-pointer transform transition-all duration-300"
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <p className="text-sm text-gray-500">{service.details}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }
// above is latest 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

// Static services (first 8 services)
const staticServices = [
  {
    id: 1,
    title: "Vaccination Services",
    description: "Comprehensive vaccination for all age groups",
    icon: "💉",
    details: "Protect yourself and your loved ones with our wide range of vaccination services",
    path: "/services/vaccination",
  },
  {
    id: 2,
    title: "Doctor Consultation",
    description: "Expert medical consultation with specialized doctors",
    icon: "👨‍⚕️",
    details: "Get professional medical advice from our experienced team of doctors",
    path: "/services/consultation",
  },
  {
    id: 3,
    title: "Whole Body Checkup",
    description: "Comprehensive health screening packages",
    icon: "🏥",
    details: "Detect potential health issues early with our thorough checkup programs",
    path: "/services/checkup",
  },
  {
    id: 4,
    title: "Imaging",
    description: "Advanced medical imaging services",
    icon: "🔬",
    details: "State-of-the-art imaging technology for accurate diagnostics",
    path: "/services/imaging",
  },
  {
    id: 5,
    title: "Minor Procedures",
    description: "Outpatient procedures and minor surgeries",
    icon: "🩺",
    details: "Expert care for various minor medical procedures",
    path: "/services/procedures",
  },
  {
    id: 6,
    title: "Pharmacy",
    description: "In-house pharmacy services",
    icon: "💊",
    details: "Convenient access to prescribed medications and health products",
    path: "/services/pharmacy",
  },
  {
    id: 7,
    title: "Healthcare Training",
    description: "Educational programs for health awareness",
    icon: "📚",
    details: "Learn essential health skills and knowledge from our experts",
    path: "/services/training",
  },
  {
    id: 8,
    title: "Home Services",
    description: "Medical care in the comfort of your home",
    icon: "🏠",
    details: "Professional healthcare services delivered to your doorstep",
    path: "/services/home",
  },
  {
    id: 9,
    title: "Endoscopy",
    description: "Advanced endoscopic procedures",
    icon: "🔍",
    details: "Minimally invasive diagnostic and therapeutic endoscopy services",
    path: "/services/endoscopy",
  },
  {
    id: 10,
    title: "Colonoscopy",
    description: "Comprehensive colon health examinations",
    icon: "🔬",
    details: "Early detection and prevention of colorectal issues",
    path: "/services/colonoscopy",
  },
  {
    id: 11,
    title: "Colposcopy",
    description: "Specialized cervical examinations",
    icon: "🔬",
    details: "Advanced screening and diagnosis for cervical health",
    path: "/services/colposcopy",
  },
  {
    id: 12,
    title: "Thermocoagulation",
    description: "Innovative treatment for various conditions",
    icon: "⚡",
    details: "Cutting-edge thermocoagulation therapies for multiple medical issues",
    path: "/services/thermocoagulation",
  }
];

export default function HomeServices() {
  const [dynamicServices, setDynamicServices] = useState([]);

  useEffect(() => {
    // Fetch dynamic services
    const fetchDynamicServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/services`); // Replace with your API endpoint
        setDynamicServices(response.data); // Assuming response.data contains an array of services
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchDynamicServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Combine static and dynamic services
  const combinedServices = [...staticServices, ...dynamicServices];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
          <p className="text-xl text-blue-700">Comprehensive healthcare solutions for your well-being</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {combinedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => (window.location.href = service.path)}
              className="bg-white rounded-xl p-6 cursor-pointer transform transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
