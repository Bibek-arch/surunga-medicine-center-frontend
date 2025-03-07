


"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import lata from '../assets/drlata.png'
import sonu from '../assets/doc7.png'
import sandip from '../assets/doc5.png'
import dipayan from "../assets/dipayanpanday.png"
import rabin from "../assets/rabindrasimkhada.png"
import sashank from "../assets/sashankrajpokhrel.png"
import babita from "../assets/doc6.png"
import doc8 from "../assets/doc8.png"
import ram from "../assets/ramkrishnagiri.png"
const testimonials = [
  {
    category: "Gynecology Care",
    text: "Dr. Sonu Bharati's expertise made my pregnancy journey smooth and worry-free. Her compassionate care is truly exceptional.",
    patient: {
      name: "Anjali Sharma",
      type: "Maternity Patient",
    },
    doctor: {
      name: "Dr. Sonu Bharati",
      role: "OBST & Gynecology",
      image: sonu,
    },
  },
  {
    category: "Diabetes Management",
    text: "Dr. Sandip's holistic approach to diabetes management has significantly improved my quality of life. His thyroid expertise is unparalleled.",
    patient: {
      name: "Ramesh Poudel",
      type: "Diabetes Patient",
    },
    doctor: {
      name: "Dr. Sandip Chandra Shrestha",
      role: "Diabetes and Thyroid specialist",
      image: sandip,
    },
  },
  {
    category: "Cardiac Care",
    text: "Thanks to Dr. Ram Krishna Giri's prompt diagnosis, my heart condition was treated effectively. His dedication to patient care is commendable.",
    patient: {
      name: "Binod Adhikari",
      type: "Cardiac Patient",
    },
    doctor: {
      name: "Dr. Ram Krishna Giri",
      role: "Cardiologist",
      image: ram,
    },
  },
  {
    category: "Women's Health",
    text: "Dr. Lata Shrestha's empathetic approach made my gynecological treatments comfortable. Her expertise is truly reassuring.",
    patient: {
      name: "Sunita Rai",
      type: "Gynecology Patient",
    },
    doctor: {
      name: "Dr. Lata Shrestha",
      role: "Gynecologist (Obstetrics and Gynecology Specialist)",
      image: lata,
    },
  },
  {
    category: "Dermatology Care",
    text: "Dr. Dipayan Pandey's treatment plan cleared my persistent skin issues. His knowledge in both dermatology and sexual health is impressive.",
    patient: {
      name: "Prakash Thapa",
      type: "Dermatology Patient",
    },
    doctor: {
      name: "Dr. Dipayan Pandey",
      role: "Dermatologist and Sexual Health Specialist",
      image: dipayan,
    },
  },
  {
    category: "Pediatric Care",
    text: "Dr. Rabindra's way with children is amazing. He made my son's regular check-ups and vaccinations a pleasant experience.",
    patient: {
      name: "Sarita Gurung",
      type: "Parent of Pediatric Patient",
    },
    doctor: {
      name: "Dr. Rabindra Simkhada",
      role: "Pediatrician",
      image: rabin,
    },
  },
  {
    category: "Mental Health",
    text: "Dr. Shashank's expertise in mental health helped me overcome my long-standing anxiety issues. His approach is both professional and caring.",
    patient: {
      name: "Deepak Karki",
      type: "Mental Health Patient",
    },
    doctor: {
      name: "Dr. Shashank Raj Pokhrel",
      role: "Psychiatrist (Mental Health and Neurological Specialist)",
      image: sashank,
    },
  },
  {
    category: "Neuropsychiatry",
    text: "Dr. Babita Sharma's comprehensive neuropsychiatric care has significantly improved my cognitive function. Her expertise is truly life-changing.",
    patient: {
      name: "Manisha Tamang",
      type: "Neuropsychiatry Patient",
    },
    doctor: {
      name: "Dr. Babita Sharma",
      role: "Consultant Neuropsychiatrist",
      // image: "/placeholder.svg?height=64&width=64",
      image: babita
    },
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [cardsToShow, setCardsToShow] = useState(4)

  // Update cards to show based on window size
  const updateCardsToShow = useCallback(() => {
    if (window.innerWidth < 640) {
      setCardsToShow(1)
    } else if (window.innerWidth < 1024) {
      setCardsToShow(2)
    } else if (window.innerWidth < 1280) {
      setCardsToShow(2)
    } else {
      setCardsToShow(3)
    }
  }, [])

  useEffect(() => {
    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [updateCardsToShow])

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length - cardsToShow + 1 ? 0 : prevIndex + 1))
  }, [isAnimating, cardsToShow])

  const previousTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - cardsToShow : prevIndex - 1))
  }, [isAnimating, cardsToShow])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-blue-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a3b4b]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Patient Success Stories
      </motion.h1>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            initial={false}
            animate={{
              x: `-${currentIndex * (100 / cardsToShow)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              onComplete: () => setIsAnimating(false),
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300
                  ${
                    cardsToShow === 1
                      ? "min-w-full"
                      : cardsToShow === 2
                        ? "min-w-[calc(50%-0.5rem)]"
                        : cardsToShow === 3
                          ? "min-w-[calc(33.333%-1rem)]"
                          : "min-w-[calc(25%-1.2rem)]"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="space-y-4 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-teal-600 font-medium">{testimonial.category}</p>
                      <Quote className="w-6 h-6 text-teal-600/20" />
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed mb-4">{testimonial.text}</p>
                    <div className="mt-2">
                      <p className="font-semibold text-[#1a3b4b]">{testimonial.patient.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.patient.type}</p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 overflow-hidden">
                        <img
                          src={testimonial.doctor.image || "/placeholder.svg"}
                          alt={testimonial.doctor.name}
                          className="w-[64px] h-[64px] object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a3b4b]">{testimonial.doctor.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.doctor.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={previousTestimonial}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextTestimonial}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="text-sm text-gray-500">
            {currentIndex + 1}/{testimonials.length - cardsToShow + 1}
          </div>
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-teal-600"
              initial={false}
              animate={{
                width: `${((currentIndex + 1) / (testimonials.length - cardsToShow + 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

