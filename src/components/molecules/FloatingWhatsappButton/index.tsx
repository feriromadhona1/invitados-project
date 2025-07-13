'use client'

import Link from 'next/link'
import Image from 'next/image'


export default function FloatingWhatsappButton() {
  return (
    <Link
      href="https://wa.me/6285839265660"
      target="_blank"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
    </Link>
  )
}
