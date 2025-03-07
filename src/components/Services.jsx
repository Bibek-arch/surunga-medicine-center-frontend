
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
    title: "Lab Services",
    description: "Comprehensive laboratory services",
    icon: "🧪",
    details: "Accurate and reliable lab tests for various health conditions",
    path: "/services/lab-services",
  },
  {
    id: 10,
    title: "Lab Testing",
    description: "Wide range of diagnostic tests",
    icon: "🔬",
    details: "Advanced testing solutions for accurate disease diagnosis",
    path: "/services/lab-testing",
  },
  {
    id: 11,
    title: "Family Planning Services",
    description: "Guidance and support for family planning",
    icon: "👨‍👩‍👧",
    details: "Professional counseling and services for reproductive health",
    path: "/services/family-planning",
  },
  {
    id: 12,
    title: "Cosmetic Products",
    description: "High-quality cosmetic products for clinics",
    icon: "🧴",
    details: "Safe and effective beauty products for skin and personal care",
    path: "/services/cosmetic-products",
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
              className="bg-white rounded-xl p-6 cursor-pointer transform transition-all duration-300 flex flex-col items-center text-center"
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
