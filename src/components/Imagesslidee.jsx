// "use client"
// import { motion, AnimatePresence } from "framer-motion"
// import { useEffect, useState } from "react"
// import GroupImage from "../assets/GroupImage.jpg"
// const images = [
//   GroupImage,
//   GroupImage,
//   "/path/to/image3.jpg",
//   "/path/to/image4.jpg",
//   // Add more image paths as needed
// ]

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000) // Change slide every 5 seconds

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       <AnimatePresence initial={false}>
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         />
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ImageSlider


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dc from '../assets/dc.jpg'
import frontpage from '../assets/frontpage.jpg'
import group from '../assets/groupokay.jpg'
const images = [
  
  frontpage,
  group,
  dc,
  frontpage
  // Add more image paths as needed
]

const SmoothImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex+1) % images.length)
    }, 5000) // Change slide every 7 seconds for a slower, smoother transition

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] sm:h-[400px]  md:h-[500px] lg:h-[600px] xl:h-[600px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Slower, smoother fade transition
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-4" : "bg-white bg-opacity-100"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SmoothImageSlider



// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import GroupImage from "../assets/GroupImage.jpg"
// import Gimage from '../assets/docgroup.jpeg'

// const images = [
//   GroupImage,
//   Gimage,
//   GroupImage,
//   GroupImage,
//   // Add more image paths as needed
// ]

// const SmoothImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 7000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative w-full h-full min-h-full overflow-hidden">
//       <AnimatePresence initial={false}>
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </AnimatePresence>
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center z-10">
//         <div className="flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-white w-4" : "bg-white bg-opacity-50"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SmoothImageSlider
// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import GroupImage from "../assets/GroupImage.jpg"
// import Gimage from '../assets/docgroup.jpeg'

// const images = [
//   GroupImage,
//   Gimage,
//   GroupImage,
//   GroupImage,
// ]

// const SmoothImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 7000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative w-full h-full">
//       <AnimatePresence initial={false}>
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//           className="w-full h-full object-contain lg:object-fill"
//         />
//       </AnimatePresence>
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
//         <div className="flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-white w-4" : "bg-white bg-opacity-50"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SmoothImageSlider