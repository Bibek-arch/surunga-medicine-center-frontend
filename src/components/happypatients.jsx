"use client"

import { motion } from "framer-motion"
import Image from '../assets/c2.jpg'
import { Heart, UserRound, BedDouble, Stethoscope, Building2, Plus } from "lucide-react"

const statsData = [
  {
    icon: Heart,
    value: "Last 8 years",
    label: "Serving Since 2016",
    delay: 0.2,
  },
  {
    icon: UserRound,
    value: "53+",
    label: "Professional Doctors",
    delay: 0.3,
  },
  {
    icon: BedDouble,
    value: "160000+",
    label: "Happy Patients",
    delay: 0.4,
  },
  {
    icon: Stethoscope,
    value: "60+",
    label: "Health Care Professionals",
    delay: 0.5,
  },
  {
    icon: Building2,
    value: "30+",
    label: "Institutions",
    delay: 0.6,
  },
  {
    icon: Plus,
    value: "800+",
    label: "Home Services",
    delay: 0.7,
  },
]

export default function HealthcareHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-11xl lg:text-3xl font-bold text-blue-600">Providing Quality Healthcare</h1>
              <p className="text-gray-600 text-lg">
                Serving our Community with Compassion and Expertise. Your Health, Our Commitment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-red-500">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-bold text-red-500">{stat.value}</span>
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[8/7] rounded-xl overflow-hidden shadow-xl">
              <img
                src= {Image}
                alt="Healthcare professional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

