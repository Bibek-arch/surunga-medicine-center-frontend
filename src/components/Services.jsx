import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd, FaHospital, FaAmbulance, FaFlask, FaBabyCarriage, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const iconMap = {
  'General Medicine': FaUserMd,
  'Cardiology': FaHeartbeat,
  'Pharmacy': FaPills,
  'Emergency': FaAmbulance,
  'Laboratory': FaFlask,
  'Pediatrics': FaBabyCarriage,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-2xl w-full"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-900">{service.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-indigo-800">
            <li>State-of-the-art equipment</li>
            <li>Experienced medical professionals</li>
            <li>24/7 availability</li>
            <li>Personalized care plans</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, index, onLearnMore }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const Icon = iconMap[service.title] || FaStethoscope;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
    >
      <div className="relative">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center">
          <motion.div
            animate={pulseAnimation}
            className="bg-white p-3 rounded-full mr-4"
          >
            <Icon className="text-3xl text-indigo-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        <motion.button
          onClick={() => onLearnMore(service)}
          whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/services/`)
      .then((response) => setServices(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-extrabold text-center text-indigo-900 mt-0 mb-8"
        >
          Our Services
        </motion.h2>
        <p className='text-center text-xl font-bold mt-0 mb-6'>🩺 Caring Beyond Prescriptions </p>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onLearnMore={handleLearnMore} />
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="mt-16 flex justify-center"
      >
        <div className="bg-white p-8 rounded-full shadow-2xl">
          <FaHospital className="text-6xl text-indigo-600" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 text-center"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-2">Surunga Medicine Center</h3>
        <p className="text-xl text-indigo-700">Your Health, Our Priority</p>
      </motion.div>
      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;

