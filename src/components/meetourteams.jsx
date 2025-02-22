import { Facebook, Instagram, Mail } from "lucide-react";
import surungamed from '../assets/checkup/surungamed.jpg';
import serv from '../assets/checkup/serv.jpg';
const teamMembers = [
  {
    name: "Mr. Yagya Raj Karki",
    role: "Director",
    specialty: "Pharmacy & Clinic",
    image: serv,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Mr. kamal Subedi",
    role: "Marketing Manager",
    specialty: "Marketing",
    image: surungamed,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Miss. Emily Chen",
    role: "Health Assistant",
    specialty: "Pharmacy & Clinic",
    image: surungamed,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Mr. Michael Brown",
    role: "Radiologist",
    specialty: "Radiography",
    image: surungamed,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  // },
  // {
  //   name: "Dr. Lisa Anderson",
  //   role: "Senior Consultant",
  //   specialty: "Neurology",
  //   image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  //   social: {
  //     facebook: "https://facebook.com",
  //     instagram: "https://instagram.com",
  //   },
  // },
  // {
  //   name: "Dr. Robert Taylor",
  //   role: "Head of Department",
  //   specialty: "Orthopedics",
  //   image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  //   social: {
  //     facebook: "https://facebook.com",
  //     instagram: "https://instagram.com",
  //   },
  },
];

const MeetTeams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white px-4 py-4">
      <div className="container mx-auto max-w-7xl">
      <section className="py-12  mb-12 ">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Providing Exceptional Healthcare for Over 25 Years
                </h2>
                <p className="text-lg text-gray-600">
                  At our clinic, we are dedicated to delivering compassionate, patient-centered care using the latest
                  medical advancements. Our team of experienced professionals is committed to improving the health and
                  well-being of our community.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Pharmacy Services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Multidisciplinary approach</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Emergency Services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Advanced Diagnosis</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 overflow-hidden rounded-xl shadow-xl lg:h-auto">
                <img
                  // src="/placeholder.svg?height=600&width=800"
                  src={surungamed}
                  alt="Our Clinic"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 h-[390px] w-[700px] hover:scale-105"
                />
              </div>
            </div>
          </section>
        <div className="mb-20 text-center">
          <span className="mb-1 inline-block rounded-full bg-gradient-to-r from-[#e5deff] to-[#f7f5ff] px-4 py-1 text-sm font-medium text-[#6e59a5] shadow-sm">
            Meet Our Team
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-[#2e3138] to-[#8ba1d9] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Exceptional Healthcare Professionals
          </h2>
          <p className="mx-auto max-w-2xl text-[#8e9196]">
            Our distinguished team of medical experts combines decades of experience
            with cutting-edge expertise to deliver outstanding patient care.
          </p>
          
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_40px_rgba(110,89,165,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative mb-6 aspect-[7/5] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover "
                />
              </div>
              
              <div className="relative z-10">
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-gradient-to-r from-[#f1f0fb] to-[#f7f5ff] px-3 py-1 text-xs font-medium text-[#6e59a5] shadow-sm">
                    {member.specialty}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-semibold text-[#1a1f2c] transition-colors duration-200 group-hover:text-[#6e59a5]">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm text-[#8e9196]">{member.role}</p>
                
                <div className="flex gap-3">
                  <a
                    href={member.social.facebook}
                    className="group/icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f1f0fb] to-[#f7f5ff] shadow-sm transition-colors duration-200 hover:from-[#6e59a5] hover:to-[#9b87f5]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5 text-[#6e59a5] transition-colors duration-200 group-hover/icon:text-white" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="group/icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f1f0fb] to-[#f7f5ff] shadow-sm transition-colors duration-200 hover:from-[#6e59a5] hover:to-[#9b87f5]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 text-[#6e59a5] transition-colors duration-200 group-hover/icon:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeams;


// import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

// const teamMembers = [
//   {
//     name: "Dr. Sarah Mitchell",
//     role: "Lead Physician",
//     specialty: "Internal Medicine",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
//   {
//     name: "Dr. James Wilson",
//     role: "Senior Specialist",
//     specialty: "Cardiology",
//     image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
//   {
//     name: "Dr. Emily Chen",
//     role: "Medical Director",
//     specialty: "Family Medicine",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
//   {
//     name: "Dr. Michael Brown",
//     role: "Specialist",
//     specialty: "Pediatrics",
//     image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
//   {
//     name: "Dr. Lisa Anderson",
//     role: "Senior Consultant",
//     specialty: "Neurology",
//     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
//   {
//     name: "Dr. Robert Taylor",
//     role: "Head of Department",
//     specialty: "Orthopedics",
//     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
//     social: {
//       facebook: "https://facebook.com",
//       instagram: "https://instagram.com",
//     },
//   },
// ]

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      

//       <main>
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="py-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Providing Exceptional Healthcare for Over 25 Years
                </h2>
                <p className="text-lg text-gray-600">
                  At our clinic, we are dedicated to delivering compassionate, patient-centered care using the latest
                  medical advancements. Our team of experienced professionals is committed to improving the health and
                  well-being of our community.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">State-of-the-art facilities</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Multidisciplinary approach</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Personalized treatment plans</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 overflow-hidden rounded-xl shadow-xl lg:h-auto">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Clinic"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </section>

//           <section className="py-16">
//             <div className="mb-16 text-center">
//               <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
//                 Meet Our Team
//               </span>
//               <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//                 Exceptional Healthcare Professionals
//               </h2>
//               <p className="mx-auto max-w-2xl text-xl text-gray-600">
//                 Our distinguished team of medical experts combines decades of experience with cutting-edge expertise to
//                 deliver outstanding patient care.
//               </p>
//             </div>

//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               {teamMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                   <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                     <img
//                       src={member.image || "/placeholder.svg"}
//                       alt={member.name}
//                       layout="fill"
//                       objectFit="cover"
//                       className="transition-transform duration-700 group-hover:scale-110"
//                     />
//                   </div>

//                   <div className="relative z-10">
//                     <div className="mb-2">
//                       <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
//                         {member.specialty}
//                       </span>
//                     </div>
//                     <h3 className="mb-1 text-xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
//                       {member.name}
//                     </h3>
//                     <p className="mb-4 text-sm text-gray-600">{member.role}</p>

//                     <div className="flex gap-3">
//                       <a
//                         href={member.social.facebook}
//                         className="group/icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-blue-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Facebook className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover/icon:text-white" />
//                       </a>
//                       <a
//                         href={member.social.instagram}
//                         className="group/icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-blue-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Instagram className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover/icon:text-white" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

       
//         </div>
//       </main>

    
//     </div>
//   )
// }

// export default AboutUs

