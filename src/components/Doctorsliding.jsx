// import React, { useState, useEffect, useCallback, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// import doc1 from "../assets/drlata.png"
// import doc2 from "../assets/dipayanpanday.png"
// import doc3 from "../assets/rabindrasimkhada.png"
// import doc4 from "../assets/sashankrajpokhrel.png"
// import doc6 from "../assets/doc6.png"
// import doc7 from "../assets/sonubharati.png"
// import doc8 from "../assets/doc8.png"
// import doc9 from "../assets/ramkrishnagiri.png"

// // const doctors = [
// //   { id: 1, name: "Dr. Lata Shrestha", specialization: "Gynecologist (Obstetrics and Gynecology Specialist)", image: doc1 },
// //   { id: 2, name: "Dr. Dipayan Pandey", specialization: "Dermatologist and Sexual Health Specialist", image: doc2 },
// //   { id: 3, name: "Dr. Rabindra Simkhada", specialization: "Pediatrician", image: doc3 },
// //   { id: 4, name: "Dr. Shashank Raj Pokhrel", specialization: "Psychiatrist (Mental Health and Neurological Specialist)", image: doc4 },
// //   { id: 6, name: "Dr. Babita Sharma", specialization: "Consultant Neuropsychiatrist", image: doc6 },
// //   { id: 7, name: "Dr. Sonu Bharati", specialization: "OBST & Gynecology", image: doc7 },
// //   { id: 8, name: "Dr. Sandip Chandra Shrestha", specialization: "Diabetes and Thyroid specialist", image: doc8 },
// //   {id: 9, name:"Dr. Ram Krishna Giri", specialization:"Cardiologist", image:doc9}
// // ]

// const DoctorCard = ({ doctor, index, direction }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg shadow-lg group w-full h-full"
//     initial={{ opacity: 0, x: direction * 50 }}
//     animate={{ opacity: 1, x: 0 }}
//     exit={{ opacity: 0, x: -direction * 50 }}
//     transition={{
//       x: { type: "spring", stiffness: 300, damping: 30 },
//       opacity: { duration: 0.2 },
//     }}
//   >
//     <div className="aspect-[3/4] overflow-hidden">
//       <motion.img
//         src={doctor.image}
//         alt={doctor.name}
//         className="w-full h-full object-cover"
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
//       />
//     </div>
//     <motion.div
//       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: 0.2 }}
//     >
//       <h3 className="text-white text-xl font-semibold">{doctor.name}</h3>
//       <p className="text-gray-300">{doctor.specialization}</p>
//     </motion.div>
//   </motion.div>
// )

// const EnhancedDoctorSlider = () => {
//     const [doctors, setDoctors] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [visibleDoctors, setVisibleDoctors] = useState(1)
//   const [direction, setDirection] = useState(1)
//   const sliderRef = useRef(null)
  
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then((response) => setDoctors(response.data))
//       .catch((error) => console.error(error))
//   }, [])


//   const updateVisibleDoctors = useCallback(() => {
//     if (window.innerWidth >= 1280) {
//       setVisibleDoctors(4)
//     } else if (window.innerWidth >= 1024) {
//       setVisibleDoctors(3)
//     } else if (window.innerWidth >= 768) {
//       setVisibleDoctors(2)
//     } else {
//       setVisibleDoctors(1)
//     }
//   }, [])

//   useEffect(() => {
//     updateVisibleDoctors()
//     window.addEventListener("resize", updateVisibleDoctors)
//     return () => window.removeEventListener("resize", updateVisibleDoctors)
//   }, [updateVisibleDoctors])

//   const nextSlide = useCallback(() => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length)
//   }, [])

//   const prevSlide = useCallback(() => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length)
//   }, [])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide()
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [nextSlide])

//   // Preload images
//   useEffect(() => {
//     doctors.forEach((doctor) => {
//       const img = new Image()
//       img.src = doctor.image
//     })
//   }, [])

//   const visibleDoctorsArray = [...Array(visibleDoctors)].map((_, index) => {
//     const doctorIndex = (currentIndex + index) % doctors.length
//     return doctors[doctorIndex]
//   })

//   return (
//     <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-4" ref={sliderRef}>
//       <AnimatePresence initial={false} mode="popLayout" custom={direction}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {visibleDoctorsArray.map((doctor, index) => (
//             <DoctorCard key={`${doctor.id}-${index}`} doctor={doctor} index={index} direction={direction} />
//           ))}
//         </div>
//       </AnimatePresence>

//       <motion.button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
//         onClick={prevSlide}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-800" />
//       </motion.button>

//       <motion.button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
//         onClick={nextSlide}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ChevronRight className="w-6 h-6 text-gray-800" />
//       </motion.button>
//     </div>
//   )
// }

// export default EnhancedDoctorSlider

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import axios from "axios";

// const DoctorCard = ({ doctor, direction }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg shadow-lg group w-full h-full"
//     initial={{ opacity: 0, x: direction * 50 }}
//     animate={{ opacity: 1, x: 0 }}
//     exit={{ opacity: 0, x: -direction * 50 }}
//     transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
//   >
//     <div className="aspect-[3/4] overflow-hidden">
//       <motion.img
//         src={doctor.image}
//         alt={doctor.name}
//         className="w-full h-full object-cover"
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
//       />
//     </div>
//     <motion.div
//       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: 0.2 }}
//     >
//       <h3 className="text-white text-xl font-semibold">{doctor.name}</h3>
//       <p className="text-gray-300">{doctor.specialization}</p>
//     </motion.div>
//   </motion.div>
// );

// const EnhancedDoctorSlider = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleDoctors, setVisibleDoctors] = useState(1);
//   const [direction, setDirection] = useState(1);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/doctors/`)
//       .then(response => setDoctors(response.data))
//       .catch(error => console.error("Error fetching doctors:", error));
//   }, []);

//   const updateVisibleDoctors = useCallback(() => {
//     const width = window.innerWidth;
//     setVisibleDoctors(width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1);
//   }, []);

//   useEffect(() => {
//     updateVisibleDoctors();
//     window.addEventListener("resize", updateVisibleDoctors);
//     return () => window.removeEventListener("resize", updateVisibleDoctors);
//   }, [updateVisibleDoctors]);

//   const nextSlide = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
//   }, [doctors.length]);

//   const prevSlide = useCallback(() => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
//   }, [doctors.length]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [nextSlide]);

//   useEffect(() => {
//     doctors.forEach((doctor) => {
//       const img = new Image();
//       img.src = doctor.image;
//     });
//   }, [doctors]);

//   const visibleDoctorsArray = doctors.length
//     ? Array.from({ length: visibleDoctors }, (_, index) => doctors[(currentIndex + index) % doctors.length])
//     : [];

//   return (
//     <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-4" ref={sliderRef}>
//       <AnimatePresence initial={false} mode="popLayout" custom={direction}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {visibleDoctorsArray.map((doctor, index) => (
//             <DoctorCard key={`${doctor.id}-${index}`} doctor={doctor} direction={direction} />
//           ))}
//         </div>
//       </AnimatePresence>

//       {doctors.length > visibleDoctors && (
//         <>
//           <motion.button
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
//             onClick={prevSlide}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-800" />
//           </motion.button>

//           <motion.button
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
//             onClick={nextSlide}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ChevronRight className="w-6 h-6 text-gray-800" />
//           </motion.button>
//         </>
//       )}
//     </div>
//   );
// };

// export default EnhancedDoctorSlider;


import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const DoctorCard = ({ doctor, direction }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg shadow-lg group w-full h-full"
    initial={{ opacity: 0, x: direction * 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -direction * 50 }}
    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
  >
    <div className="w-full h-full flex justify-center items-center">
      <motion.img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-full object-contain"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
    </div>
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h3 className="text-white text-xl font-semibold">Dr. {doctor.name}</h3>
      <p className="text-gray-300">{doctor.specialization}</p>
    </motion.div>
  </motion.div>
);

const EnhancedDoctorSlider = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDoctors, setVisibleDoctors] = useState(1);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/doctors/`)
      .then(response => setDoctors(response.data))
      .catch(error => console.error("Error fetching doctors:", error));
  }, []);

  const updateVisibleDoctors = useCallback(() => {
    const width = window.innerWidth;
    setVisibleDoctors(width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1);
  }, []);

  useEffect(() => {
    updateVisibleDoctors();
    window.addEventListener("resize", updateVisibleDoctors);
    return () => window.removeEventListener("resize", updateVisibleDoctors);
  }, [updateVisibleDoctors]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  }, [doctors.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  }, [doctors.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    doctors.forEach((doctor) => {
      const img = new Image();
      img.src = doctor.image;
    });
  }, [doctors]);

  const visibleDoctorsArray = doctors.length
    ? Array.from({ length: visibleDoctors }, (_, index) => doctors[(currentIndex + index) % doctors.length])
    : [];

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-2" ref={sliderRef}>
      <AnimatePresence initial={false} mode="popLayout" custom={direction}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleDoctorsArray.map((doctor, index) => (
            <DoctorCard key={`${doctor.id}-${index}`} doctor={doctor} direction={direction} />
          ))}
        </div>
      </AnimatePresence>

      {doctors.length > visibleDoctors && (
        <>
          <motion.button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </motion.button>

          <motion.button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default EnhancedDoctorSlider;