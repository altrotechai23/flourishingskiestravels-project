'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  const whatsappNumber = '2349075721310'
  const message = encodeURIComponent(
    "Hi! I'm interested in your travels and tours package. Can you provide more information?"
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-whatsapp" />

      {/* Button */}
      <div className="relative w-12 h-12 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

        <FaWhatsapp className="w-6 h-6 text-white relative z-10" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg border border-border">
          <span className="text-sm font-medium text-foreground">
            Chat with us!
          </span>
        </div>
      </div>
    </motion.a>
  )
}