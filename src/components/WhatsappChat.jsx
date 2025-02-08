import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChat = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Popup disappears after 3 seconds
    }, 5000); // Show every 5 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {/* Animated "Chat with Us" Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "70px", // To the left of the WhatsApp button
              backgroundColor: "#ffffff",
              color: "#25D366",
              padding: "14px 20px",
              borderRadius: "30px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
              cursor: "pointer",
              transformOrigin: "center",
            }}
            onClick={() => {
              window.open(
                "https://wa.me/9779804964107?text=We%20will%20get%20back%20to%20you%20soon",
                "_blank"
              );
            }}
          >
            Chat with us!
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=We%20will%20get%20back%20to%20you%20soon"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "70px",
          height: "70px",
          backgroundColor: "#25D366", // WhatsApp green
          borderRadius: "50%",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          textDecoration: "none",
          position: "relative",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "36px", height: "36px" }}
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppChat;
