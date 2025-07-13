'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Testimonial = {
  name: string
  comment: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ayu Rahma',
    comment: 'Undangannya keren banget, praktis dan estetik. Gak nyangka bisa sebagus ini!',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Fajar Hidayat',
    comment: 'Fiturnya lengkap banget. Tamu-tamu pada bilang undangannya beda dari yang lain!',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Lina Marlina',
    comment: 'Bisa edit sendiri dari HP, mudah dan cepat. Terima kasih Invitados!',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Budi Pratama',
    comment: 'Fitur RSVP dan kirim ucapan bikin undangan makin berkesan.',
    image: 'https://i.pravatar.cc/150?img=4',
  },
  {
    name: 'Siska Anggraeni',
    comment: 'Design-nya cantik-cantik dan bisa disesuaikan dengan tema acara.',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Rizky & Amel',
    comment: 'Suka banget! Teman-teman juga tanya bikin undangan di mana.',
    image: 'https://i.pravatar.cc/150?img=6',
  },
  {
    name: 'Hana Putri',
    comment: 'Praktis, gak perlu cetak kertas. Lebih ramah lingkungan.',
    image: 'https://i.pravatar.cc/150?img=7',
  },
  {
    name: 'Rudi Santoso',
    comment: 'Responnya cepat dan adminnya ramah. Mantap banget!',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Tari Wulandari',
    comment: 'Bisa kasih nama tamu satu-satu, rasanya lebih personal!',
    image: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'Dian Kusuma',
    comment: 'Tema undangannya banyak pilihan. Pasti pakai lagi!',
    image: 'https://i.pravatar.cc/150?img=10',
  },
  {
    name: 'Yoga Prasetya',
    comment: 'Sangat puas, tampilannya elegan dan fiturnya lengkap.',
    image: 'https://i.pravatar.cc/150?img=11',
  },
]

const chunkArray = (arr: Testimonial[], size: number): Testimonial[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const slides = chunkArray(testimonials, 3)

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white py-16 px-6 md:px-32 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-darkblue mb-10">Apa Kata Mereka?</h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {slides[index].map((item, i) => (
              <div
                key={i}
                className="bg-[#f9f9f9] p-6 rounded-xl shadow text-left flex flex-col items-center text-sm"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-3 text-center">"{item.comment}"</p>
                <p className="text-darkblue font-semibold">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:text-darkblue"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:text-darkblue"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
