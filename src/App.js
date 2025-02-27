import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Layout from './components/Layout'
import Home from './components/Home'
import Services from './components/Services'
import Blog from './components/Blog'
import OurDoctors from './components/OurDoctors'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/privacypolicy'
import ServicePage from './components/ServicePage'
import HomeServices from "./components/HomeServices"
import ChatWidget from './components/WhatsappChat'
import BlogPost from './components/Shareblog'
import BlogPostPage from './components/BlogPostPage'


function App() {
  return (
    <Router>
      <Layout>
        <ChatWidget/>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<HomeServices />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogPostPage />} /> {/* Dynamic route */}

            {/* <Route path="/blog/:id" element={<BlogPost />} /> 👈 Dynamic route */}
            <Route path="/our-doctors" element={<OurDoctors />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services/:service" element={<ServicePage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
    
  )
}

export default App

