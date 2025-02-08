// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     name: "Jenna Milton",
//     feedback: "On January 2024 while doing self breast exam I found a mass.",
//     image: "https://via.placeholder.com/50",
//     position: "Visit Cosmetician",
//   },
//   {
//     name: "Maria Reed",
//     feedback:
//       "I got an urgent appointment scheduled with Dr. Gupta and that same day an order for mammogram was given.",
//     image: "https://via.placeholder.com/50",
//     position: "Visit Female Doctor – Dr. Nillo Milina",
//   },
//   {
//     name: "Mickilo Miller",
//     feedback: "My referrals were processed on the spot. As soon as my results came back.",
//     image: "https://via.placeholder.com/50",
//     position: "Surgeon Clinic",
//   },
//   {
//     name: "Sharon Roberts",
//     feedback: "She continues to make sure that I am healthy. I will always be grateful.",
//     image: "https://via.placeholder.com/50",
//     position: "Dental Clinic",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="bg-gray-100 py-14 px-6">
//       <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="max-w-5xl mx-auto"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 text-center">
//               <p className="text-gray-700 text-lg italic mb-4">"{testimonial.feedback}"</p>
//               <div className="flex items-center justify-center gap-3">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-14 h-14 rounded-full"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-lg">{testimonial.name}</h3>
//                   <p className="text-gray-500 text-sm">{testimonial.position}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;


import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    text: "Excellent service! The doctors are highly professional, and the facilities are top-notch.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Smith",
    text: "I had a great experience here. The staff is friendly, and the care I received was exceptional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Brown",
    text: "Highly recommended! The 24/7 support is a lifesaver for emergency situations.",
    image: "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    name: "Sarah Smith",
    text: "I had a great experience here. The staff is friendly, and the care I received was exceptional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Brown",
    text: "Highly recommended! The 24/7 support is a lifesaver for emergency situations.",
    image: "https://randomuser.me/api/portraits/men/56.jpg"
  }
];

const TestimonialCard = ({ name, text, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
    >
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500" />
      <p className="text-gray-600 italic">"{text}"</p>
      <h4 className="text-lg font-semibold mt-3 text-blue-600">{name}</h4>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">What Our Patients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
