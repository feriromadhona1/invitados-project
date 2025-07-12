import Image from 'next/image'

const featuresLeft = [
  'Tulis Nama Tamu Secara Personal',
  'Musik Latar Bebas Ganti',
  'Desain Tema Bisa Custom',
  'Buku Tamu & Ucapan Interaktif',
  'Amplop Digital & Transfer Hadiah',
  'Hitung Mundur Hari Bahagia',
  'Lokasi Acara via Google Maps',
]

const featuresRight = [
  'Informasi Live Streaming',
  'Check-In Tamu dengan QR Code',
  'Layar Sapa & Counter Digital',
  'Edit Mudah Lewat HP',
  'Tambah / Kurangi Halaman',
  'Tata Letak Fleksibel',
  'Ganti Warna & Ukuran Font',
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="text-center md:text-left">
            <Image
              src="/images/image-invita.png"
              width={520}
              height={360}
              alt="fitur undangan digital modern"
              className="rounded-xl mx-auto md:mx-0"
              priority
            />
          </div>

          {/* Text & Feature List */}
          <div>
            <h2 className="text-2xl md:text-left md:text-3xl font-bold text-[#2A4365] mb-4 leading-snug">
              Hadirkan Undangan Digital <br /> yang Lebih dari Sekadar Tautan
            </h2>
            <p className="text-gray-600 mb-6 md:text-base">
              Kini kamu bisa membuat undangan online yang bukan hanya cantik, tapi juga <strong>interaktif</strong> dan <strong>berkesan</strong>. Sesuaikan dengan gaya acaramu, dan biarkan tamu turut merasakan pengalaman digital yang spesial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <ul className="space-y-3">
                {featuresLeft.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ModernCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {featuresRight.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ModernCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Modern check icon (line-based, no circle)
function ModernCheckIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 text-[#2A4365] flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
