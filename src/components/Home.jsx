

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
import ImageSlider from "./Imagesslidee.jsx"
import Testimonials from "./testimonials.jsx"
import learn from '../assets/learn1.jpg'
import learn2 from '../assets/learn2.jpg'
const images = [

  // Placeholder image
  c3,
  loc,
  c1,
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

  const HeloCard = ({ icon, title, description }) => {
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
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex flex-col items-center text-center"
      >
        <div className="text-5xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
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
        {/* {icon} */}
        <div className="flex justify-center">
  <div className="p-3 rounded-full bg-blue-50 text-blue-500 text-3xl">
    {icon}
  </div>
</div>



        <img src={image || "/placeholder.svg"} alt={title} priority="true" className="w-full h-40 object-cover rounded-md mb-4 p-1" />
        <h3 className="text-xl text-center font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    )
  }

  const CategoryCard = ({ icon, image, title, description }) => {
    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative h-50 w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
  
        <div className="p-1">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="text-blue-500 text-3xl">{icon}</div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
          <p className="text-gray-600 leading-relaxed p-3">{description}</p>
        </div>
      </motion.div>
    )
  }
  
  // Animation variants

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="font-sans bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center p-2">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
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
 
     <HeloCard 
      icon={<FaMapMarkerAlt className="text-4xl text-indigo-500 mb-2" />}
      priority="true"
      title="Our Location"
      description="📍 Surunga, Jhapa, Nepal"
    />
    <HeloCard
      icon={<FaPhoneAlt className="text-4xl text-indigo-500 mb-2" />}
      priority="true"
      title="Contact Us"
      description={
        <>
          📞 9804964107 |
             023-553097
        </>
      }
    />
    <HeloCard
      icon={<FaClock className="text-4xl text-indigo-500 mb-2" />}
      priority="true"
      title="Working Hours"
      description={
        <>
          🕒 Always Open: 6:00 AM - 8:00 PM <br />
        </>
      }
    /> 
 </div>
</div> 

          </div>
          <ImageSlider/>
        </div>
      
      </div>
      

      {/* {showPopup && banners.length > 0 && (
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
                  priority="true"
                  alt={banner.caption}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )} */}
    </div> 

      {showPopup && banners.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-4 max-w-md shadow-lg relative">
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
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
                  priority="true"
                  alt={banner.caption}
                  className="w-full h-46 object-contain rounded mb-2"
                />
                <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{banner.caption}</h2>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
 <div>
 <section className="py-20 bg-gray-50">
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
        to="/about-us"
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
                priority='true'
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
            icon={<FaUserMd className="text-5xl text-blue-500 mb-2" />}
            title={<span className="text-2xl font-semibold">Expert Doctors</span>}
            description="Our team of experienced and qualified doctors are here to provide you with the best care."
          />
          <FeatureCard
              icon={<FaHospital className="text-5xl text-blue-500 mb-2" />}
              title={<span className="text-2xl font-semibold">Modern Facilities</span>}
              description="State-of-the-art medical equipment and comfortable facilities for all your healthcare needs."
          />
        
          <FeatureCard
            icon={<FaPhoneAlt className="text-5xl text-blue-500 mb-2" />}
            title={<span className="text-2xl font-semibold">24/7 Support</span>}
            description="Round-the-clock medical support to ensure you receive care when you need it most."
          />
        </section>

        
        <section className="py-6 px-6  sm:px-0 sm:py-3  bg-blue-50 rounded-lg shadow-md">
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
                  priority ='true'
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
        
          <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          HealthCare Categories
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <FaStethoscope />,
              image:general,
              title: "Primary Care",
              description: "Routine checkups and services to keep you at your best.",
            },
            {
              icon: <FaHeartbeat />,
              image:special,
              title: "Specialized Care",
              description: "Expert treatment for chronic conditions, women's health.",
            },
            {
              icon: <FaAmbulance />,
              image:urgent,
              title: "Urgent Care",
              description: "Quick and reliable treatment for emergencies and urgencies.",
            },
            {
              icon: <FaFlask />,
              image:xray,
              title: "Diagnostics",
              description: "On-site lab testing, imaging, and diagnostics for accurate results.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CategoryCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center text-gray-800">
        Meet Our Doctors  </h1>
        <DoctorSlider />
        
      
        <HealthcareHero/>

        
         <Testimonials />
        <ContactUs/>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default Home

