import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogs/`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

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
      question: "Does Surunga Medicine Center accept insurance?",
      answer: "Yes, we accept a wide range of insurance plans. Please contact our billing department or check our website for a list of accepted insurance providers."
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-62 object-cover" />
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


