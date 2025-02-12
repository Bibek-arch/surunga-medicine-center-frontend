// import { useParams } from "react-router-dom"
// import { motion } from "framer-motion"

// const serviceDetails = {
//   vaccination: {
//     title: "Vaccination Services",
//     description:
//       "Protect yourself and your loved ones with our comprehensive vaccination services. We offer a wide range of vaccines for all age groups, from infants to elderly.",
//     image: "/placeholder.svg?height=600&width=800",
//     features: [
//       "Routine immunizations for children and adults",
//       "Travel vaccines for international travelers",
//       "Seasonal flu shots",
//       "COVID-19 vaccination",
//       "HPV vaccination for cervical cancer prevention",
//     ],
//     additionalInfo: {
//       availableVaccines: [
//         "MMR (Measles, Mumps, Rubella)",
//         "TDAP (Tetanus, Diphtheria, Pertussis)",
//         "Hepatitis A and B",
//         "Pneumococcal",
//         "Meningococcal",
//         "Yellow Fever",
//         "Japanese Encephalitis",
//       ],
//       process: [
//         "Initial consultation to assess vaccination needs",
//         "Review of medical history and potential contraindications",
//         "Administration of vaccines by certified healthcare professionals",
//         "Post-vaccination observation period",
//         "Provision of vaccination records and certificates",
//       ],
//       facilities: [
//         "Dedicated vaccination rooms",
//         "Cold chain maintenance for vaccine efficacy",
//         "Emergency response equipment",
//         "Child-friendly environment",
//       ],
//     },
//   },
//   // ... (include all other service details here)
// }

// export default function ServicePage() {
//   const { service } = useParams()
//   const serviceInfo = serviceDetails[service] || {
//     title: "Service Not Found",
//     description: "The requested service information is not available.",
//     image: "/placeholder.svg?height=400&width=600",
//     features: [],
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-6xl mx-auto"
//       >
//         <h1 className="text-4xl font-bold text-blue-900 mb-6">{serviceInfo.title}</h1>
//         <div className="grid gap-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-xl overflow-hidden shadow-lg"
//           >
//             <motion.img
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               src={serviceInfo.image}
//               alt={serviceInfo.title}
//               className="w-full h-[400px] object-cover"
//             />
//             <div className="p-6">
//               <p className="text-gray-600 text-lg mb-6">{serviceInfo.description}</p>
//               <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Features</h2>
//               <motion.ul
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: { staggerChildren: 0.1 },
//                   },
//                 }}
//                 className="grid gap-3"
//               >
//                 {serviceInfo.features.map((feature, index) => (
//                   <motion.li
//                     key={index}
//                     variants={{
//                       hidden: { opacity: 0, x: -20 },
//                       visible: { opacity: 1, x: 0 },
//                     }}
//                     className="flex items-center text-gray-700"
//                   >
//                     <svg
//                       className="w-5 h-5 text-blue-500 mr-3"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     {feature}
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </div>
//           </motion.div>

//           {serviceInfo.additionalInfo && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="grid gap-8 md:grid-cols-2"
//             >
//               {Object.entries(serviceInfo.additionalInfo).map(([key, value]) => (
//                 <div key={key} className="bg-white rounded-xl p-6 shadow-lg">
//                   <h3 className="text-xl font-semibold text-blue-900 mb-4 capitalize">
//                     {key.replace(/([A-Z])/g, " $1").trim()}
//                   </h3>
//                   {Array.isArray(value) ? (
//                     <ul className="space-y-2">
//                       {value.map((item, index) => (
//                         <li key={index} className="flex items-center text-gray-700">
//                           <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <div className="grid gap-4">
//                       {Object.entries(value).map(([subKey, subValue]) => (
//                         <div key={subKey}>
//                           <h4 className="font-medium text-blue-800 mb-2 capitalize">
//                             {subKey.replace(/([A-Z])/g, " $1").trim()}
//                           </h4>
//                           <ul className="space-y-2">
//                             {Array.isArray(subValue) ? (
//                               subValue.map((item, index) => (
//                                 <li key={index} className="flex items-center text-gray-700">
//                                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
//                                   {item}
//                                 </li>
//                               ))
//                             ) : (
//                               <li className="flex items-center text-gray-700">
//                                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
//                                 {subValue}
//                               </li>
//                             )}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   )
// }




import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

import vac from '../assets/servicesImg/vac.webp'
import cons from '../assets/checkup/couns.jpg'
import checkup from '../assets/checkup/radiograph.jpeg'
import imaging from '../assets/checkup/xray2.jpg'
import minor from '../assets/checkup/general.jpeg'
import pharmacy from '../assets/checkup/serv.jpg'
import training from '../assets/checkup/healthcons.jpg'
import homecare from '../assets/servicesImg/homecare.jpg'
import famplanning from '../assets/family_planning.jpg'
import labservice from '../assets/checkup/m3.jpeg'
import xray from '../assets/checkup/xray.jpeg'
import cosmetic from '../assets/cosmetic.webp'
import { Phone, Mail, MapPin } from "lucide-react"

const serviceDetails = {
    vaccination: {
      title: "Vaccination Services",
      description:
        "Protect yourself and your loved ones with our comprehensive vaccination services. We offer a wide range of vaccines for all age groups, from infants to elderly.",
      image: vac,
      features: [
        "Routine immunizations for children and adults",
        "Travel vaccines for international travelers",
        "Seasonal flu shots",
        "COVID-19 vaccination",
        "HPV vaccination for cervical cancer prevention",
      ],
      additionalInfo: {
        availableVaccines: [
          "MMR (Measles, Mumps, Rubella)",
          "TDAP (Tetanus, Diphtheria, Pertussis)",
          "Hepatitis A and B",
          "Pneumococcal",
          "Meningococcal",
          "Yellow Fever",
          "Japanese Encephalitis",
        ],
        process: [
          "Initial consultation to assess vaccination needs",
          "Review of medical history and potential contraindications",
          "Administration of vaccines by certified healthcare professionals",
          "Post-vaccination observation period",
          "Provision of vaccination records and certificates",
        ],
        facilities: [
          "Dedicated vaccination rooms",
          "Cold chain maintenance for vaccine efficacy",
          "Emergency response equipment",
          "Child-friendly environment",
        ],
      },
    },
    consultation: {
      title: "Doctor Consultation",
      description:
        "Get expert medical advice from our team of experienced and specialized doctors. We offer both in-person and telemedicine consultations to cater to your needs.",
      image: cons,
      features: [
        "General physician consultations",
        "Specialist doctor appointments",
        "Follow-up visits",
        "Second opinion services",
        "Telemedicine consultations",
      ],
      additionalInfo: {
        specialties: [
          "Internal Medicine",
          "Pediatrics",
          "Obstetrics and Gynecology",
          "Cardiology",
          "Dermatology",
          "Orthopedics",
          "Neurology",
          "Psychiatry",
        ],
        consultationProcess: [
          "Booking an appointment online or via phone",
          "Initial assessment by nursing staff",
          "Comprehensive consultation with the doctor",
          "Diagnostic tests if required",
          "Treatment plan and prescription",
          "Scheduling of follow-up visits",
        ],
        facilities: [
          "Modern consultation rooms",
          "State-of-the-art medical equipment",
          "Electronic health records system",
          "Comfortable waiting areas",
          "Pharmacy on premises",
        ],
      },
    },
    checkup: {
      title: "Whole Body Checkup",
      description:
        "Our comprehensive health screening packages are designed to detect potential health issues early and provide a complete picture of your overall health status.",
      image: checkup,
      features: [
        "Comprehensive blood tests",
        "Imaging studies (X-ray, Ultrasound)",
        "Cardiac evaluation",
        "Cancer screening",
        "Lifestyle and diet assessment",
      ],
      additionalInfo: {
        packages: [
          "Basic Health Checkup",
          "Executive Health Checkup",
          "Women's Wellness Package",
          "Men's Health Package",
          "Senior Citizen's Health Package",
          "Cardiac Risk Assessment Package",
        ],
        process: [
          "Pre-checkup fasting and preparation",
          "Registration and initial vital signs check",
          "Blood sample collection",
          "Imaging studies",
          "Doctor consultation for results interpretation",
          "Personalized health report and recommendations",
        ],
        facilities: [
          "Modern diagnostic equipment",
          "Comfortable sample collection areas",
          "Imaging suites",
          "Private consultation rooms for result discussion",
        ],
      },
    },
    imaging: {
      title: "Imaging Services",
      description:
        "State-of-the-art medical imaging services with advanced technology and expert radiologists for accurate diagnostics.",
      image: imaging,
      features: [
        "Digital X-ray imaging with instant results",
        "3D/4D Ultrasound scanning",
        "TVH scanning",
        "Doppler ultrasound for blood flow studies",
        "Echocardiography for heart examination",
        "High-resolution ECG services",
      ],
      additionalInfo: {
        equipment: ["GE Healthcare Imaging Systems", "4D Ultrasound Machines","500 MA Digital X-ray","Advanced Analyser Machine", "Advanced ECG Monitors"],
        procedures: [
          "Abdominal Ultrasound",
          "Obstetric Scans",
          "Cardiac Imaging",
          "Musculoskeletal Imaging",
          "Vascular Studies",
        ],
        preparation: [
          "Fasting requirements vary by examination",
          "Wear comfortable clothing",
          "Bring previous imaging results if available",
          "Arrive 15 minutes before appointment",
        ],
        timing: ["Results available within 24 hours"]
      },
    },
    procedures: {
      title: "Minor Procedures and Surgeries",
      description: "Comprehensive outpatient surgical procedures with expert care and modern facilities.",
      image: minor,
      features: [
        "Minor surgical procedures",
        "Gynecological procedures",
        "Dermatological procedures",
        "Cardiac procedures",
        "Emergency procedures",
      ],
      additionalInfo: {
        availableProcedures: {
          dermatology: ["Skin biopsy", "Mole removal", "Cyst removal", "Abscess drainage", "Wart treatment"],
          gynecology: ["Pap smear", "IUD insertion/removal", "Cervical biopsy", "Endometrial biopsy"],
          cardiac: ["ECG monitoring", "Holter monitoring", "Stress testing", "Blood pressure monitoring"],
        },
        facilities: ["Modern procedure rooms", "Sterilization equipment", "Recovery area", "Emergency response system"],
        team: ["Specialized surgeons", "Trained nursing staff", "Anesthesiologists", "Support staff"],
      },
    },
    pharmacy: {
      title: "In-House Pharmacy",
      description:
        "Convenient access to a wide range of medications and health products with expert pharmacist consultation.",
      image: pharmacy,
      features: [
        "Prescription medications",
        "Over-the-counter drugs",
        "Health supplements",
        "Medical supplies",
        "Pharmacist consultation",
      ],
      additionalInfo: {
        services: [
          "Prescription filling",
          "Medication review",
          "Drug interaction checks",
          "Generic substitution options",
          "Refill reminders",
        ],
        products: [
          "Prescription medications",
          "Over-the-counter medicines",
          "Vitamins and supplements",
          "First-aid supplies",
          "Personal care products",
        ],
        pharmacistSupport: [
          "Medication counseling",
          "Side effect information",
          "Dosage instructions",
          "Lifestyle and diet advice",
          "Vaccination information",
        ],
      },
    },
    training: {
      title: "Healthcare Training Programs",
      description: "Educational programs designed to enhance health awareness and provide essential medical skills.",
      image: training,
      features: [
        "First Aid Training",
        "CPR Certification",
        "Chronic Disease Management Education",
        "Nutrition and Wellness Workshops",
        "Mental Health Awareness Programs",
      ],
      additionalInfo: {
        courses: [
          "Basic Life Support (BLS)",
          "Advanced Cardiac Life Support (ACLS)",
          "Pediatric Advanced Life Support (PALS)",
          "Diabetes Management",
          "Stress Management and Mental Wellness",
        ],
        format: [
          "Classroom sessions",
          "Hands-on practical training",
          "Online modules",
          "Simulation exercises",
          "Certification exams",
        ],
        trainers: [
          "Certified medical professionals",
          "Experienced educators",
          "Mental health specialists",
          "Nutritionists and dietitians",
        ],
      },
    },
    home: {
      title: "Home Healthcare Services",
      description: "Bringing quality healthcare to the comfort of your home with our range of home medical services.",
      image: homecare,
      features: [
        "Home doctor visits",
        "Nursing care",
        "Physiotherapy at home",
        "Home sample collection for tests",
        "Medical equipment rental",
      ],
      additionalInfo: {
        services: [
          "Post-hospitalization care",
          "Chronic disease management",
          "Elderly care",
          "Palliative care",
          "Wound care and dressing",
        ],
        team: ["Qualified doctors", "Registered nurses", "Trained caregivers", "Physiotherapists", "Medical technicians"],
        equipment: [
          "Portable diagnostic devices",
          "Home oxygen concentrators",
          "Hospital beds",
          "Mobility aids",
          "Wound care supplies",
        ],
      },
    },
    // endoscopy: {
    //   title: "Endoscopy Services",
    //   description:
    //     "Advanced endoscopic procedures performed by experienced gastroenterologists for diagnosis and treatment of digestive issues.",
    //   image: endoscopy,
    //   features: [
    //     "Upper GI Endoscopy",
    //     "Colonoscopy",
    //     "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    //     "Capsule Endoscopy",
    //     "Endoscopic Ultrasound",
    //   ],
    //   additionalInfo: {
    //     procedures: [
    //       "Diagnostic Endoscopy",
    //       "Therapeutic Endoscopy",
    //       "Endoscopic Mucosal Resection",
    //       "Polypectomy",
    //       "Biopsy Procedures",
    //     ],
    //     preparation: [
    //       "Fasting for 8-12 hours before the procedure",
    //       "Adjusting medications as advised",
    //       "Arranging for someone to drive you home",
    //       "Wearing loose-fitting clothing",
    //     ],
    //     aftercare: [
    //       "Rest for the remainder of the day",
    //       "Gradual return to normal diet",
    //       "Follow-up appointment for results",
    //       "Monitoring for any complications",
    //     ],
    //   },
    // },
    // colonoscopy: {
    //   title: "Colonoscopy Services",
    //   description:
    //     "Comprehensive colonoscopy screening and diagnostic services for colon health assessment and cancer prevention.",
    //   image: colnoscopy,
    //   features: [
    //     "Screening Colonoscopy",
    //     "Diagnostic Colonoscopy",
    //     "Therapeutic Colonoscopy",
    //     "Virtual Colonoscopy",
    //     "Polypectomy during Colonoscopy",
    //   ],
    //   additionalInfo: {
    //     preparation: [
    //       "Special diet 3 days before procedure",
    //       "Clear liquid diet day before",
    //       "Bowel preparation solution",
    //       "Nothing to eat or drink 8 hours before",
    //     ],
    //     procedure: [
    //       "Duration: 30-60 minutes",
    //       "Sedation provided",
    //       "Complete colon examination",
    //       "Tissue sampling if needed",
    //     ],
    //     afterCare: [
    //       "Recovery time: 1-2 hours",
    //       "No driving for 24 hours",
    //       "Resume normal diet gradually",
    //       "Follow-up appointment in 1-2 weeks",
    //     ],
    //   },
    // },
    // colposcopy: {
    //   title: "Colposcopy Services",
    //   description:
    //     "Specialized examination of the cervix, vagina, and vulva for detecting abnormalities and early signs of cervical cancer.",
    //   image: colposcopy,
    //   features: [
    //     "Detailed cervical examination",
    //     "Biopsy if necessary",
    //     "HPV testing",
    //     "Treatment of precancerous lesions",
    //     "Follow-up care and monitoring",
    //   ],
    //   additionalInfo: {
    //     procedure: [
    //       "Duration: 10-20 minutes",
    //       "No anesthesia required",
    //       "Use of colposcope for magnified view",
    //       "Application of acetic acid or iodine solution",
    //       "Biopsy of suspicious areas if needed",
    //     ],
    //     preparation: [
    //       "Schedule appointment when not menstruating",
    //       "Avoid sexual intercourse for 24-48 hours before",
    //       "No douching or using vaginal medications",
    //       "Inform doctor of any medications or allergies",
    //     ],
    //     aftercare: [
    //       "Mild discomfort or spotting may occur",
    //       "Avoid tampons and sexual intercourse for a few days",
    //       "Follow-up as recommended by the doctor",
    //       "Prompt reporting of any unusual symptoms",
    //     ],
    //   },
    // },
    // thermocoagulation: {
    //   title: "Thermocoagulation Services",
    //   description:
    //     "Advanced treatment using heat for various medical conditions, particularly in gynecology and dermatology.",
    //   image: thermo,
    //   features: [
    //     "Treatment of cervical lesions",
    //     "Management of abnormal uterine bleeding",
    //     "Removal of skin tags and warts",
    //     "Treatment of vascular lesions",
    //     "Minimally invasive procedure",
    //   ],
    //   additionalInfo: {
    //     applications: [
    //       "Cervical intraepithelial neoplasia (CIN)",
    //       "Menorrhagia treatment",
    //       "Cosmetic dermatology",
    //       "Vascular lesion management",
    //       "Minor surgical procedures",
    //     ],
    //     procedure: [
    //       "Local anesthesia if required",
    //       "Application of heat to targeted areas",
    //       "Duration varies based on treatment area",
    //       "Minimal to no downtime",
    //       "Can be performed as an outpatient procedure",
    //     ],
    //     aftercare: [
    //       "Mild discomfort may be experienced",
    //       "Follow wound care instructions",
    //       "Avoid strenuous activities for a few days",
    //       "Follow-up appointment for evaluation",
    //       "Report any unusual symptoms promptly",
    //     ],
    //   },
    // },
    "lab-services": {
    title: "Lab Services",
    description: "Comprehensive laboratory services with advanced testing facilities.",
    image: labservice, // सही path राख्नु
    features: [
      "Blood tests for various conditions",
      "Hormone and metabolic tests",
      "Pathology and microbiology diagnostics",
      "Fast and accurate test results",
      "Certified laboratory technicians",
    ],
    additionalInfo: {
      availableTests: ["Thyroid Panel", "Blood Sugar","RFT",
      "LFT",
      "Urine R/E ",
      "Urine C/S",
     " Vitamin level",
      "ANA ",
      "Anti CCP",
      "RA factor",
      "CRP", 
      "Serology",
      "HBA1C"],
      process: [
        "Book an appointment online or walk-in",
        "Sample collection by professionals",
        "Analysis by certified lab technicians",
        "Receive results digitally or in-person",
      ],
      facilities: ["Modern diagnostic machines", "Sterile environment", "Expert pathologists"],
    },
  },

  "lab-testing": {
    title: "Lab Testing",
    description: "Wide range of diagnostic tests for accurate health assessment.",
    image: xray,
    features: [
      "Comprehensive health screenings",
      "Disease-specific diagnostic tests",
      "Urine and stool analysis",
      "PCR and genetic testing",
      "Biopsy and histopathology",
    ],
    additionalInfo: {
      commonTests: ["COVID-19 PCR", "Hematology tests", "Allergy testing", "Autoimmune disease testing"],
      procedure: [
        "Consultation with a healthcare provider",
        "Test selection and sample collection",
        "Laboratory analysis and report generation",
        "Doctor’s review and result discussion",
      ],
      reliability: ["FDA-approved test kits", "Automated analyzers", "Quality assurance processes"],
    },
  },

  "family-planning": {
    title: "Family Planning Services",
    description: "Professional counseling and support for reproductive health and family planning.",
    image: famplanning,
    features: [
      "Contraceptive counseling and prescriptions",
      "Prenatal and postnatal care",
      "Fertility assessments",
      "Sterilization procedures",
      "Sexual health education",
    ],
    additionalInfo: {
      availableMethods: ["Birth control pills", "IUDs", "Condoms", "Implants", "Surgical procedures"],
      counselingProcess: [
        "Initial consultation with a specialist",
        "Personalized contraceptive recommendations",
        "Guidance on reproductive health and safety",
        "Follow-up and monitoring",
      ],
      benefits: ["Safe and effective", "Confidential services", "Experienced gynecologists"],
    },
  },

  "cosmetic-products": {
    title: "Cosmetic Products",
    description: "High-quality beauty and personal care products for clinics and individuals.",
    image: cosmetic,
    features: [
      "Dermatologist-approved skincare",
      "Hair and scalp treatments",
      "Anti-aging solutions",
      "Natural and organic products",
      "Medical-grade cosmetics",
    ],
    additionalInfo: {
      productCategories: ["Moisturizers", "Sunscreens", "Acne treatments", "Hair growth serums", "Anti-wrinkle creams"],
      skinCareRoutine: [
        "Consultation with a dermatologist",
        "Selection of suitable skincare products",
        "Usage instructions and follow-ups",
        "Long-term skincare monitoring",
      ],
      safetyStandards: ["Clinically tested", "Hypoallergenic", "Paraben-free", "Dermatologist-recommended"],
    },
  },
  }
  

export default function ServicePage() {
  const navigate = useNavigate();
  const { service } = useParams()
  const serviceInfo = serviceDetails[service] || {
    title: "Service Not Found",
    description: "The requested service information is not available.",
    image: "/placeholder.svg?height=400&width=600",
    features: [],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-2xl font-bold text-blue-900 mb-6">{serviceInfo.title}</h1>
        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={serviceInfo.image}
              alt={serviceInfo.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600 text-lg mb-6">{serviceInfo.description}</p>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Features</h2>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="grid gap-3"
              >
                {serviceInfo.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
  {/* New Contact Card */}
  
          {serviceInfo.additionalInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {Object.entries(serviceInfo.additionalInfo).map(([key, value]) => (
                <div key={key} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  {Array.isArray(value) ? (
                    <ul className="space-y-2">
                      {value.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                      
                    </ul>
                    
                  ) : (
                    <div className="grid gap-4">
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <div key={subKey}>
                          <h4 className="font-medium text-blue-800 mb-2 capitalize">
                            {subKey.replace(/([A-Z])/g, " $1").trim()}
                          </h4>
                          <ul className="space-y-2">
                            {Array.isArray(subValue) ? (
                              subValue.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                  {item}
                                </li>
                              ))
                            ) : (
                              <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                {subValue}
                              </li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) }
                  
                </div>
              ))}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get This Service</h2>
              <p className="text-gray-600 mb-6">Have questions about our services? Get in touch with us today!</p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-blue-500 mr-3" />
                  <span>023-553097 | 9804964107</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <span>surungamedicineclinic@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  <span>Kanakai-03, Surunga, Jhapa</span>
                </li>
              </ul>
              <button onClick={() => navigate("/contact-us")} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Schedule an Appointment
              </button>
            </div>
          </motion.div>
            </motion.div>
          )}
          
        </div>
      </motion.div>
      
    </div>
  )
}

