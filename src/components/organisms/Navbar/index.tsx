'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

// 🧠 List menu untuk navigasi
const navLinks = [
  { label: 'Home', href: '#herosection' },
  { label: 'Tema', href: '#themes' },
  { label: 'Fitur', href: '#features' },
  { label: 'Harga', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-darkblue">
          Invitados
        </Link>

        {/* Burger Icon */}
        <button
          className="md:hidden text-darkblue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-darkblue font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/6285839265660"
            target="_blank"
            className="bg-darkblue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1e324d] transition"
          >
            Coba Sekarang
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white shadow text-darkblue">
          <nav className="flex flex-col items-start gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/6285839265660"
              target="_blank"
              className="bg-darkblue text-white px-5 py-2 rounded-full font-semibold mt-2 hover:bg-[#1e324d] transition"
              onClick={() => setIsOpen(false)}
            >
              Coba Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
