import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        <strong>Effective Date:</strong> 2025-01-01
      </p>
      <p className="text-gray-600 mb-6">
        Welcome to Surunga Medicine Center & Clinic ! Your privacy is of utmost importance to us. This Privacy Policy outlines how we handle your personal information when you visit our website or use our services. By using our website, you agree to the terms of this policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">We may collect the following information to provide and enhance our services:</p>
      <p className="text-gray-600 font-medium">1.1 Personal Information:</p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Full name</li>
        <li>Contact details (e.g., phone number, email address, mailing address)</li>
        <li>Medical history and health-related information</li>
      </ul>

      <p className="text-gray-600 font-medium">1.2 Non-Personal Information:</p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Browser type and version</li>
        <li>Device Location</li>
        <li>IP address</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Delivering medical services and maintaining patient records.</li>
        <li>Scheduling and managing appointments.</li>
        <li>Responding to inquiries and providing customer support.</li>
        <li>Enhancing website functionality and user experience.</li>
        <li>Complying with legal and regulatory obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">3. Sharing Your Information</h2>
      <p className="text-gray-600 mb-4">
        Your information is not sold or shared with third parties except in the following scenarios:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>When required to deliver healthcare services.</li>
        <li>To comply with applicable laws, regulations, or court orders.</li>
        <li>To protect the safety and rights of our patients, staff, or the public.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">4. Data Security</h2>
      <p className="text-gray-600 mb-6">
        We implement strict security measures to protect your information against unauthorized access, alteration, or destruction. While we strive to ensure maximum security, no system is entirely foolproof.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">5. Your Rights</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Access your personal information.</li>
        <li>Request corrections to inaccurate or outdated data.</li>
        <li>Request the deletion of your information, subject to legal constraints.</li>
        <li>Obtain a copy of your data in a portable format.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">6. Cookies Policy</h2>
      <p className="text-gray-600 mb-6">
        We use cookies to improve website performance and user experience. You can manage cookie settings through your browser. Note that disabling cookies may impact website functionality.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">7. Policy Updates</h2>
      <p className="text-gray-600 mb-6">
        We may update this Privacy Policy periodically. Any changes will be posted on this page with the revised effective date.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">8. Contact Us</h2>
      <p className="text-gray-600 mb-6">
        If you have questions or concerns about this Privacy Policy, please reach out to us:
      </p>
      <div className="text-gray-600 font-medium">
        Surunga Medicine Center<br />
        Address:Kanakai-03, Surunga, Jhapa<br />
        Phone: 023-553097 | 9804964107<br />
        Email: surungamedicineclinic@gmail.com
      </div>

      <p className="text-gray-600 mt-6">
        Thank you for trusting Surunga Medicine Center with your privacy. Your health and data security are our priorities.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
