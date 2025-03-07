

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

