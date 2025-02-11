
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showText, setShowText] = useState(true)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      setShowText(false)
    } else {
      // Add a small delay before showing the text again
      const timer = setTimeout(() => setShowText(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-3">
        {/* Chat bubble text */}
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  duration: 0.4,
                },
              }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="rounded-[20px] bg-white px-6 py-2.5 text-[15px] font-medium tracking-tight shadow-[0_4px_16px_rgba(0,0,0,0.16)] text-[#1c1e21] origin-bottom"
            >
              Chat with us!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main chat button */}
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4263EB] text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
              fill="currentColor"
            />
            <path
              d="M7 9H17M7 13H14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Chat Options Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-20 right-0 flex flex-col gap-4"
            >
              {/* WhatsApp */}
              <motion.a
                // href="https://wa.me/9779815023258?text=We%20will%20get%20back%20to%20you%20soon"
                href="https://wa.me/9779804964107"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
              </motion.a>

              {/* Messenger */}
              <motion.a
                // href="https://m.me/100058523799266?text=We%20will%20get%20back%20to%20you%20soon"
                href="https://m.me/surungamedicine"
                // href="https://www.messenger.com/t/100058523799266"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2zm1.008 12.461l-2.544-2.714-4.968 2.714 5.464-5.79 2.604 2.714 4.906-2.714-5.462 5.79z" />
                </svg>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

