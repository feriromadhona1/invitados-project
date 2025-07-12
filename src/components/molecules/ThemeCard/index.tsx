// components/ThemeCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type ThemeProps = {
  name: string
  price: string
  image: string
  rating: number
  onSelect: (themeName: string) => void
}

export default function ThemeCard({ name, price, image, rating, onSelect }: ThemeProps) {
  return (
    <motion.div
      className="bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-4">
        <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
          <Image
            src={image}
            alt={name}
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{price}</p>
          <div className="text-yellow-500 text-sm mt-1 mb-3">{'★'.repeat(rating)}</div>
          <div className="flex justify-center gap-2 flex-wrap">
            <button className="px-3 py-1 text-xs border bg-darkblue border-darkblue text-white rounded hover:bg-[#2A4365] hover:text-white transition">
              👁️ Preview
            </button>
            <button
              onClick={() => onSelect(name)}
              className="px-3 py-1 text-xs bg-darkblue text-white rounded hover:bg-[#1e324d] transition"
            >
              🚀 Pilih
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
