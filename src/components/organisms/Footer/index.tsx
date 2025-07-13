'use client'

import Link from 'next/link'
import { Instagram, MapPin, Phone, CreditCard } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1e324d] text-white pt-10 px-6 md:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Invitados</h2>
          <p className="text-sm text-gray-300">
            Buat undangan digital modern untuk momen pentingmu. Desain elegan, fitur interaktif, dan mudah diatur langsung dari HP.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#herosection" className="hover:text-white">Home</Link></li>
            <li><Link href="#themes" className="hover:text-white">Tema</Link></li>
            <li><Link href="#features" className="hover:text-white">Fitur</Link></li>
            <li><Link href="#pricing" className="hover:text-white">Harga</Link></li>
            <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-white" />
              <a href="https://instagram.com/invitadosproject" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                @invitadosproject
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <a href="https://wa.me/6285839265660" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                0858-3926-5660
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-600 py-6 mt-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-white" />
            <span>Metode Pembayaran:</span>
            <div className="flex items-center gap-2 ml-2">
              <img src="/icons/bca.svg" alt="BCA" className="h-5" />
              <img src="/icons/bni.svg" alt="BNI" className="h-5" />
              <img src="/icons/bri.svg" alt="BRI" className="h-5" />
              <img src="/icons/mandiri.svg" alt="Mandiri" className="h-5" />
              <img src="/icons/qris.svg" alt="QRIS" className="h-5" />
            </div>
          </div>
          <div className="text-sm text-gray-400 text-center w-full md:w-auto mt-4 md:mt-0">
            © {new Date().getFullYear()} Invitados. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
