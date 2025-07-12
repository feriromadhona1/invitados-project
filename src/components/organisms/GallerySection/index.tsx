'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const generateThemes = [
  { name: 'Elegant-Grey', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Black-Java', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Gold', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Luxury-Silver', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Blue-Flowers', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Super-Classic', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Nature', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Aesthetic-Romance', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Grey', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Black-Java', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Gold', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Luxury-Silver', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Blue-Flowers', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Super-Classic', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Nature', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Aesthetic-Romance', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Grey', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Black-Java', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Gold', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Luxury-Silver', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Blue-Flowers', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Super-Classic', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Nature', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Aesthetic-Romance', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Grey', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Black-Java', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Gold', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Luxury-Silver', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Blue-Flowers', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Super-Classic', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Nature', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Aesthetic-Romance', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Grey', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Black-Java', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Gold', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Luxury-Silver', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Blue-Flowers', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Super-Classic', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Elegant-Nature', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
  { name: 'Aesthetic-Romance', price: 'Rp.39.000', image: '/images/undangan-online.png', rating: 5 },
]

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [showModal, setShowModal] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  const visibleThemes = generateThemes.slice(0, visibleCount)

  const handleUseTheme = (themeName: string) => {
    setSelectedTheme(themeName)
    setShowModal(true)
  }

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(`Halo admin, saya ingin menggunakan tema undangan digital *${selectedTheme}*.`)
    window.open(`https://wa.me/6281317185602?text=${message}`, '_blank')
  }

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, generateThemes.length))
  }

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(4, prev - 4))
  }

  return (
    <section className="bg-white py-16 px-6 md:px-32" id="themes">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-darkblue">
          Pilih Tema Undangan Digitalmu
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleThemes.map((theme) => (
            <motion.div
              key={theme.name}
              className="bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-4">
                <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    sizes="100%"
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">{theme.name}</p>
                  <p className="text-xs text-gray-500">{theme.price}</p>
                  <div className="text-yellow-500 text-sm mt-1 mb-3">
                    {'★'.repeat(theme.rating)}
                  </div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button className="px-3 py-1 text-xs border bg-darkblue border-darkblue text-white rounded hover:bg-[#2A4365] hover:text-white transition">
                      👁️ Preview
                    </button>
                    <button
                      onClick={() => handleUseTheme(theme.name)}
                      className="px-3 py-1 text-xs bg-darkblue text-white rounded hover:bg-[#1e324d] transition"
                    >
                      🚀 Pilih
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {visibleCount < generateThemes.length && (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 border border-darkblue text-darkblue rounded hover:bg-darkblue hover:text-white transition text-sm"
            >
              Tampilkan Lebih Banyak
            </button>
          )}
          {visibleCount > 4 && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-200 transition text-sm"
            >
              Tampilkan Lebih Sedikit
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTheme && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold text-[#2A4365] mb-2">Gunakan Tema</h3>
            <p className="text-sm text-gray-700 mb-4">
              Anda memilih tema <strong>{selectedTheme}</strong>. Hubungi admin melalui WhatsApp untuk melanjutkan.
            </p>
            <button
              onClick={handleSendWhatsApp}
              className="bg-darkblue hover:bg-[#1e324d] text-white px-4 py-2 rounded transition w-full text-sm mb-2"
            >
              Kirim ke WhatsApp
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="text-darkblue text-sm underline hover:text-[#1e324d]"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
