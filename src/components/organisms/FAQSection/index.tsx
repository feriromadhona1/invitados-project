'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const faqs = [
    {
      question: 'Apa itu undangan digital?',
      answer:
        'Undangan digital adalah undangan berbasis website yang bisa dibuka lewat smartphone atau laptop. Praktis, elegan, dan bisa disesuaikan dengan kebutuhan acaramu.',
    },
    {
      question: 'Apakah undangan bisa diubah tampilannya?',
      answer:
        'Tentu! Kamu bisa ubah warna tema, tata letak, font, bahkan menambah atau mengurangi halaman sesuai keinginan.',
    },
    {
      question: 'Apakah bisa mengatur lagu sendiri di undangan?',
      answer:
        'Bisa banget! Kamu bisa unggah musik favorit atau pilih dari koleksi yang kami sediakan untuk jadi latar undanganmu.',
    },
    {
      question: 'Metode pembayaran apa saja yang tersedia?',
      answer:
        'Kami mendukung semua metode pembayaran: transfer bank, e-wallet, QRIS, hingga virtual account dari semua bank lokal.',
    },
    {
      question: 'Undangan bisa diubah setelah aktif?',
      answer:
        'Bisa banget! Kamu tetap bisa edit nama tamu, ubah foto, ganti lagu, hingga menyesuaikan teks meskipun undangan sudah aktif.',
    },
    {
      question: 'Apakah bisa ganti nama tamu sebanyak yang diinginkan?',
      answer:
        'Ya, fitur pengaturan nama tamu bersifat unlimited. Cocok buat kamu yang ingin memberikan sentuhan personal ke setiap tamu.',
    },
    {
      question: 'Bisa request desain khusus?',
      answer:
        'Bisa! Kami menyediakan layanan request tema custom jika kamu ingin desain undangan yang benar-benar unik dan berbeda.',
    },
  ]
  

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-darkblue mb-8">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-darkblue"
              >
                {faq.question}
                {activeIndex === i ? (
                  <ChevronUp className="text-blue-500" />
                ) : (
                  <ChevronDown className="text-blue-500" />
                )}
              </button>
              {activeIndex === i && (
                <div className="px-6 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact admin card */}
        <div className="mt-10 p-6 bg-white rounded-lg shadow flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-darkblue mb-1">
              Masih punya pertanyaan? Kami siap membantu.
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Bicara langsung dengan tim admin kami untuk mendapatkan jawaban tercepat dan solusi terbaik untuk undanganmu!
            </p>
            <Link
              href="https://wa.me/6285839265660"
              target="_blank"
              className="inline-flex items-center bg-green-500 text-white mt-3 px-4 py-2 rounded text-xs sm:text-sm hover:bg-green-600 transition"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={18}
                height={18}
                className="mr-2"
              />
              Hubungi Admin
            </Link>
          </div>
          <Image
            src="/images/admin-support.png"
            alt="Admin Support"
            width={100}
            height={100}
            className="hidden sm:block object-contain"
          />
        </div>
      </div>
    </section>
  )
}
