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

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/our-doctors" element={<OurDoctors />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  )
}

export default App

