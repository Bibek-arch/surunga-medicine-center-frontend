import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import ShareButton from './Shareblog';
import BlogPost from './Shareblog';
import ShareBlog from './Shareblog';
import { Helmet } from "react-helmet-async";


function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);
  const getBlogUrl = (blog, index) => {
    const baseUrl = window.location.origin
    // Use any unique identifier from your blog data, falling back to index if needed
    const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, "-") || index
    return `${baseUrl}/blog/${identifier}`
  }

  const faqs = [
    {
      question: "What services does Surunga Medicine Center offer?",
      answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by calling our reception desk, using our online booking system, or visiting the clinic in person during operating hours."
    },
    {
      question: "Are emergency services available?",
      answer: "Yes, we provide 24/7 emergency services. In case of an emergency, please call our emergency hotline or visit our emergency department immediately."
    },
    {
      question: "Do you provide home delivery for medicines?",
      answer: "Yes, we offer home delivery services for prescribed medicines. Contact our support team for more details or to schedule a delivery."
    }
    
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Surunga Medicine Center Blogs
       
      </motion.h1>
       <p className='text-center mt-1 mb-4'>🌿 Empowering Health, Inspiring Lives</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
                <Clock className="w-4 h-4 ml-4 mr-2" />
                <span className="text-sm">5 min read</span>
              </div>
              <p className="text-gray-600 mb-4">
                {expandedBlog === index
                  ? blog.content
                  : `${blog.content.substring(0, 150)}...`}
              </p>
              <div className="flex justify-between items-center">
              <button
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
              >
                {expandedBlog === index ? (
                  <>
                    Read less
                    <ChevronUp className="w-4 h-4 ml-1" />
                    
                  </>
                ) : (
                  <>
                    Read more
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
              <div className="relative isolate">
                  <BlogPost
                    url={getBlogUrl(blog, index)}
                    title={blog?.title || "Surunga Medicine Center Blog Post"}
                    description={
                      blog?.content?.substring(0, 150) ||
                      "Read more about healthcare insights from Surunga Medicine Center"
                    }
                    image={blog?.image || "/placeholder.svg"}

                    variant="minimal"
                    iconSize="h-4 w-4"
                    className="ml-4"
                  />
                </div>
              {/* <ShareBlog
url={getBlogUrl(blog, index)}
title={blog.title || "Surunga Medicine Center Blog"}
/> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 lg:col-span-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {expandedFaq === index && (
                <motion.div
                  className="p-4 bg-gray-50"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Blog;







{/* <ShareBlog
url={getBlogUrl(blog, index)}
title={blog.title || "Surunga Medicine Center Blog"}
/> */}
// {/* <div>
//   <Helmet>
//     <title>{blog.title}</title>
//     <meta property="og:title" content={blog.title} />
//     <meta property="og:description" content={blog.content} />
//     <meta property="og:image" content={blog.image} />
//     <meta property="og:url" content={window.location.href} />
//     <meta property="og:type" content="article" />
//   </Helmet>

//   <h1>{blog.title}</h1>
//   <p>{blog.content}</p>
//   <img src={blog.image} alt={blog.title} />
//         <ShareBlog url={blogUrl} title={blog.title} />

// </div> */}






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// // import ShareButtons from './ShareButtons'; // Import the ShareButtons component
// import ShareButtons from './ShareButtons'; // Import the ShareButtons component
// import { Helmet } from 'react-helmet-async';

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog for sharing

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Function to generate the blog URL
//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   // Function to handle blog selection for sharing
//   const handleBlogSelection = (blog, index) => {
//     setSelectedBlog(blog);
//     setExpandedBlog(expandedBlog === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     {
//       question: "How can I schedule an appointment?",
//       answer: "You can schedule an appointment by calling our reception desk, using our online booking system, or visiting the clinic in person during operating hours."
//     },
//     {
//       question: "Are emergency services available?",
//       answer: "Yes, we provide 24/7 emergency services. In case of an emergency, please call our emergency hotline or visit our emergency department immediately."
//     },
//     {
//       question: "Do you provide home delivery for medicines?",
//       answer: "Yes, we offer home delivery services for prescribed medicines. Contact our support team for more details or to schedule a delivery."
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamically update meta tags for the selected blog */}
//       {selectedBlog && (
//         <Helmet>
//           <title>{selectedBlog.title}</title>
//           <meta property="og:title" content={selectedBlog.title} />
//           <meta property="og:description" content={selectedBlog.content.substring(0, 150)} />
//           <meta property="og:image" content={selectedBlog.image || "/placeholder.svg"} />
//           <meta property="og:url" content={getBlogUrl(selectedBlog, blogs.indexOf(selectedBlog))} />
//           <meta property="og:type" content="article" />

//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content={selectedBlog.title} />
//           <meta name="twitter:description" content={selectedBlog.content.substring(0, 150)} />
//           <meta name="twitter:image" content={selectedBlog.image || "/placeholder.svg"} />
//           <meta name="twitter:url" content={getBlogUrl(selectedBlog, blogs.indexOf(selectedBlog))} />
//         </Helmet>
//       )}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => handleBlogSelection(blog, index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
//                 </button>
                
// <ShareButtons
// url={getBlogUrl(blog, index)}
// title={blog.title || "Surunga Medicine Center Blog"}
// />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
                
//               </button>
              
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// import { Helmet } from 'react-helmet';
// import ShareButtons from './ShareButtons'; // Import the ShareButtons component

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   const handleBlogSelection = (blog, index) => {
//     setSelectedBlog(blog);
//     setExpandedBlog(expandedBlog === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     // Add more FAQs here
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamic meta tags for the selected blog */}
//       {selectedBlog && (
//         <Helmet>
//           <title>{selectedBlog.title}</title>
//           <meta property="og:title" content={selectedBlog.title} />
//           <meta property="og:description" content={selectedBlog.content.substring(0, 150)} />
//           <meta property="og:image" content={selectedBlog.image || "/placeholder.svg"} />
//           <meta property="og:url" content={getBlogUrl(selectedBlog, blogs.indexOf(selectedBlog))} />
//           <meta property="og:type" content="article" />

//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content={selectedBlog.title} />
//           <meta name="twitter:description" content={selectedBlog.content.substring(0, 150)} />
//           <meta name="twitter:image" content={selectedBlog.image || "/placeholder.svg"} />
//           <meta name="twitter:url" content={getBlogUrl(selectedBlog, blogs.indexOf(selectedBlog))} />
//         </Helmet>
//       )}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => handleBlogSelection(blog, index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
               
//                 {/* Add ShareButtons here */}
//                 <ShareButtons
//                   url={getBlogUrl(selectedBlog, index)}
//                   title={blog.title}
//                   image={blog.image || "/placeholder.svg"}
//                 />
//                  </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
//               </button>
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// import { Helmet } from 'react-helmet'; // For dynamic meta tags
// import ShareButtons from './ShareButtons'; // Import the ShareButtons component

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Function to generate the blog URL
//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     // Add more FAQs here
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamic meta tags for each blog post */}
//       {blogs.map((blog, index) => (
//         <Helmet key={index}>
//           <meta property="og:title" content={blog.title} data-react-helmet="true" />
//           <meta property="og:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta property="og:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta property="og:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//           <meta property="og:type" content="article" data-react-helmet="true" />

//           <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
//           <meta name="twitter:title" content={blog.title} data-react-helmet="true" />
//           <meta name="twitter:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta name="twitter:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta name="twitter:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//         </Helmet>
//       ))}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
//                 </button>
//                 {/* Add ShareButtons here */}
//                 <ShareButtons
//                   url={getBlogUrl(blog, index)}
//                   title={blog.title}
//                   image={blog.image || "/placeholder.svg"}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
//               </button>
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// import { Helmet } from 'react-helmet'; // For dynamic meta tags
// import ShareButtons from './ShareButtons'; // Import the ShareButtons component

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Function to generate the blog URL
//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     // Add more FAQs here
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamic meta tags for each blog post */}
//       {blogs.map((blog, index) => (
//         <Helmet key={index}>
//           <meta property="og:title" content={blog.title} data-react-helmet="true" />
//           <meta property="og:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta property="og:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta property="og:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//           <meta property="og:type" content="article" data-react-helmet="true" />
         
//           <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
//           <meta name="twitter:title" content={blog.title} data-react-helmet="true" />
//           <meta name="twitter:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta name="twitter:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta name="twitter:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//         </Helmet>
//       ))}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
//                 </button>
//                 {/* Add ShareButtons here */}
//                 <ShareButtons
//                   url={getBlogUrl(blog, index)}
//                   title={blog.title}
//                   image={blog.image || "/placeholder.svg"}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
//               </button>
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// import { Helmet } from 'react-helmet'; // For dynamic meta tags

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Function to generate the blog URL
//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   // Function to handle sharing on Facebook
//   const shareOnFacebook = (url) => {
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');  };

//   // Function to handle sharing on Twitter
//   const shareOnTwitter = (url, title) => {
//     window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
//   };

//   // Function to handle sharing on LinkedIn
//   const shareOnLinkedIn = (url, title) => {
//     window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     // Add more FAQs here
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamic meta tags for each blog post */}
//       {blogs.map((blog, index) => (
//         <Helmet key={index}>
//           <meta property="og:title" content={blog.title} data-react-helmet="true" />
//           <meta property="og:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta property="og:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta property="og:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//           <meta property="og:type" content="article" data-react-helmet="true" />
//           <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
//           <meta name="twitter:title" content={blog.title} data-react-helmet="true" />
//           <meta name="twitter:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta name="twitter:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta name="twitter:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//         </Helmet>
//       ))}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
//                 </button>
//                 {/* Share Buttons */}
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => shareOnFacebook(getBlogUrl(blog, index))}
//                     className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => shareOnTwitter(getBlogUrl(blog, index), blog.title)}
//                     className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
//                   >
//                     <img src="/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => shareOnLinkedIn(getBlogUrl(blog, index), blog.title)}
//                     className="text-gray-500 hover:text-blue-800 transition-colors duration-200"
//                   >
//                     <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
//               </button>
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
// import { Helmet } from 'react-helmet'; // For dynamic meta tags

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Function to generate the blog URL
//   const getBlogUrl = (blog, index) => {
//     const baseUrl = window.location.origin;
//     const identifier = blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-') || index;
//     return `${baseUrl}/blog/${identifier}`;
//   };

//   // Function to handle sharing on Facebook
//   const shareOnFacebook = (url) => {
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
//   };

//   // Function to handle sharing on Twitter
//   const shareOnTwitter = (url, title) => {
//     window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
//   };

//   // Function to handle sharing on LinkedIn
//   const shareOnLinkedIn = (url, title) => {
//     window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
//   };

//   const faqs = [
//     {
//       question: "What services does Surunga Medicine Center offer?",
//       answer: "Surunga Medicine Center offers a wide range of medical services including general consultations, specialized treatments, diagnostic services, and preventive care programs."
//     },
//     // Add more FAQs here
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Dynamic meta tags for each blog post */}
//       {blogs.map((blog, index) => (
//         <Helmet key={index}>
//           <meta property="og:title" content={blog.title} data-react-helmet="true" />
//           <meta property="og:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta property="og:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta property="og:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//           <meta property="og:type" content="article" data-react-helmet="true" />
//           <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
//           <meta name="twitter:title" content={blog.title} data-react-helmet="true" />
//           <meta name="twitter:description" content={blog.content.substring(0, 150)} data-react-helmet="true" />
//           <meta name="twitter:image" content={blog.image || "/placeholder.svg"} data-react-helmet="true" />
//           <meta name="twitter:url" content={getBlogUrl(blog, index)} data-react-helmet="true" />
//         </Helmet>
//       ))}

//       <motion.h1
//         className="text-4xl font-extrabold text-center text-black mt-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Surunga Medicine Center Blogs
//       </motion.h1>
//       <p className="text-center mt-1 mb-4">🌿 Empowering Health, Inspiring Lives</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={blog.image || "/placeholder.svg"} priority="true" alt={blog.title} className="w-full h-62 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h3>
//               <div className="flex items-center text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{new Date(blog.published_date).toDateString()}</span>
//                 <Clock className="w-4 h-4 ml-4 mr-2" />
//                 <span className="text-sm">5 min read</span>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 {expandedBlog === index
//                   ? blog.content
//                   : `${blog.content.substring(0, 150)}...`}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
//                   onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
//                 >
//                   {expandedBlog === index ? (
//                     <>
//                       Read less
//                       <ChevronUp className="w-4 h-4 ml-1" />
//                     </>
//                   ) : (
//                     <>
//                       Read more
//                       <ChevronDown className="w-4 h-4 ml-1" />
//                     </>
//                   )}
//                 </button>
//                 {/* Share Buttons */}
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => shareOnFacebook(getBlogUrl(blog, index))}
//                     className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => shareOnTwitter(getBlogUrl(blog, index), blog.title)}
//                     className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
//                   >
//                     <img src="/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => shareOnLinkedIn(getBlogUrl(blog, index), blog.title)}
//                     className="text-gray-500 hover:text-blue-800 transition-colors duration-200"
//                   >
//                     <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="mt-16 lg:col-span-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {expandedFaq === index ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-blue-600" />
//                 )}
//               </button>
//               {expandedFaq === index && (
//                 <motion.div
//                   className="p-4 bg-gray-50"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Blog;