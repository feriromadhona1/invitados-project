import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const acaraList = [
  "Pernikahan",
  "Aqiqah / Tasyakuran Anak",
  "Khitanan / Sunatan",
  "Wisuda / Graduation Party",
  "Lamaran / Tunangan",
  "Ulang Tahun Orang Tua / Syukuran",
  "Ulang Tahun Anak / Dewasa",
  "Doa Bersama / Pengajian",
  "Acara Kantor / Corporate Event",
]

const images = [
  "/images/undanganA.webp",
  "/images/ChatGPT.png",
]

export default function HeroSection() {
  const [currentAcara, setCurrentAcara] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const intervalAcara = setInterval(() => {
      setCurrentAcara((prev) => (prev + 1) % acaraList.length)
    }, 3000)

    const intervalImage = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 8000)

    return () => {
      clearInterval(intervalAcara)
      clearInterval(intervalImage)
    }
  }, [])

  return (
    <section id="herosection" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left px-6 md:px-32 py-10 bg-secondary gap-10">
      {/* Text section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
          Buat Undangan Digital untuk <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={acaraList[currentAcara]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="block text-accent text-xl sm:text-2xl md:text-3xl mt-2"
            >
              {acaraList[currentAcara]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-darkblue mb-6">
          Bersama <strong>Invitadosproject.com</strong>, abadikan momen spesialmu dalam bentuk undangan digital yang <strong>berkelas</strong> dan <strong>modern</strong>.
        </p>

        <button className="bg-darkblue hover:bg-[#2c4560] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition text-base sm:text-lg">
          Coba Sekarang
        </button>
      </motion.div>

      {/* Image Slider */}
      <div className="w-full md:w-[400px] lg:w-[500px] h-[320px] sm:h-[420px] md:h-[220px] relative overflow-hidden shrink-0 max-w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={images[currentImage]}
              alt="Demo undangan"
              width={400}
              height={220}
              className="w-full h-full object-cover rounded-xl"
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}
