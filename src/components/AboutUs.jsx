import React, { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { motion } from "framer-motion"
import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

// Custom marker icon for nearby locations
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
})

// Larger marker icon for the clinic
const clinicIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [60, 60],
})

const nearbyLocations = [
  {
    name: "Kankai Multiple Campus",
    lat: 26.641608217390548,
    lng: 87.88798391861059,
  },
  {
    name: "Surunga Chowk",
    lat: 26.64718992567833,
    lng: 87.89000810499623,
  },
]

function FlyToLocation({ lat, lng }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], 16, {
      duration: 2,
    })
  }, [lat, lng, map])
  return null
}

function AboutUs() {
  const clinicLocation = {
    lat: 26.641295672353664,
    lng: 87.89028896698203,
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen p-8">
       <style>
        {`
          .leaflet-control-attribution {
            display: none !important;
          }
        `}
      </style>
      {/* Header Section */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Welcome to Surunga Medicine & Clinic</h1>
        <p className="text-xl text-gray-600 mt-2">Caring for the community with compassion and excellence</p>
      </motion.header>

      {/* About Us Section */}
      <motion.section className="bg-white shadow-lg rounded-lg p-8 mb-12" {...fadeInUp}>
        <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
          <FaStethoscope className="mr-2" /> About Us
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Surunga Medicine Center & clinic is more than just a healthcare facility; we're a beacon of hope and healing in our
          community. Our state-of-the-art medical center is staffed by compassionate professionals dedicated to your
          well-being. We combine cutting-edge technology with a warm, patient-first approach to ensure you receive the
          best care possible.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          From routine check-ups to specialized treatments, we're here to support you on your journey to optimal health.
          At Surunga Medicine Center, you're not just a patient – you're part of our family.
        </p>
      </motion.section>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
          {...fadeInUp}
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
            <FaUserMd className="mr-2" /> Our Mission
          </h3>
          <p className="text-gray-600 text-lg">
            To offer affordable and comprehensive healthcare services with compassion and excellence, ensuring every
            individual receives the care they deserve. We strive to be the cornerstone of health in our community,
            providing accessible and high-quality medical care to all.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
            <FaHospital className="mr-2" /> Our Vision
          </h3>
          <p className="text-gray-600 text-lg">
            To become the most trusted healthcare provider in the region, setting the standard for exceptional medical
            care and innovation. We envision a future where every member of our community has access to world-class
            healthcare, right here at home.
          </p>
        </motion.div>
      </div>

      {/* Geolocation and Contact Details Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* Map */}
        <motion.div className="h-96 w-full rounded-lg overflow-hidden shadow-lg relative" {...fadeInUp}>
          <MapContainer center={[clinicLocation.lat, clinicLocation.lng]}  zoom={16} className="h-full w-full">
            
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <FlyToLocation lat={clinicLocation.lat} lng={clinicLocation.lng} />

            {/* Clinic Marker with larger icon */}
            <Marker position={[clinicLocation.lat, clinicLocation.lng]} icon={clinicIcon}>
              <Popup>
                <strong>Surunga Medicine & Clinic</strong>
                <br />
                Your trusted healthcare partner.
              </Popup>
            </Marker>

            {/* Nearby Locations Markers */}
            {nearbyLocations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Contact Details */}
        <motion.div className="bg-white shadow-lg rounded-lg p-6" {...fadeInUp} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <FaPhoneAlt className="mr-2" /> Contact Us 
          </h3>
          <ul className="text-gray-600 space-y-4 text-lg">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-600" />
              <span>
                <strong>Address:</strong> Surunga, Jhapa, Nepal
              </span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-600" />
              <span>
                <strong>Phone:</strong> 023-553097 | 9804964107
              </span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" />
              <span>
                <strong>Email:</strong> surungamedicineclinic@gmail.com
              </span>
            </li>
            <li className="flex items-center">
              <FaClock className="mr-2 text-blue-600" />
              <span>
                <strong>Hours:</strong> Always Open  6 AM - 8 PM
              </span>
            </li>
          </ul>
          {/* <motion.a
            href="https://www.google.com/maps/dir/?api=1&destination=26.641295672353664,87.89028896698203"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.a> */}
            <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation if location is not set yet
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const origin = `${position.coords.latitude},${position.coords.longitude}`;
            const destination = "26.641295672353664,87.89028896698203";
            const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
            window.open(mapUrl, "_blank");
          },
          (error) => {
            alert("Could not determine your location. Please enable location services.");
          }
        );
      }}
      rel="noopener noreferrer"
      className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get Directions
    </motion.a>


        </motion.div>
      </div>

      {/* Additional Features Section */}
      <motion.section className="bg-white shadow-lg rounded-lg p-8" {...fadeInUp}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-6 bg-blue-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            whileHover={{ y: -10 }}
          >
            <FaUserMd className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Experienced Staff</h4>
            <p className="text-gray-600">
              Our team comprises highly qualified doctors and healthcare professionals with years of experience in
              various medical fields.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-green-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            whileHover={{ y: -10 }}
          >
            <FaHospital className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Modern Facilities</h4>
            <p className="text-gray-600">
              We utilize the latest technology and equipment to deliver the best care, ensuring accurate diagnoses and
              effective treatments.
            </p>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-purple-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            whileHover={{ y: -10 }}
          >
            <FaAmbulance className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">24/7 Emergency Care</h4>
            <p className="text-gray-600">
              Our emergency department is always open, providing round-the-clock care for all medical emergencies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="mt-12 bg-white shadow-lg rounded-lg p-8" {...fadeInUp}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">What Our Patients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-blue-50 p-6 rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
            <p className="text-gray-600 italic mb-4">
              "The care I received at Surunga Medicine Center was exceptional. The staff was attentive, and the doctors
              were thorough and compassionate."
            </p>
            <p className="text-blue-700 font-semibold">- Ramesh Sharma</p>
          </motion.div>
          <motion.div className="bg-green-50 p-6 rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
            <p className="text-gray-600 italic mb-4">
              "I'm impressed by the modern facilities and the friendly atmosphere. It's comforting to know we have such
              a great medical center in our community."
            </p>
            <p className="text-green-700 font-semibold">- Sita Gurung</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutUs

