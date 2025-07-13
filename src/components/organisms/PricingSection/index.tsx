import { CheckCircle, XCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 'Rp.99.000',
    note: 'Tanpa musik, titip hadiah dan foto',
    features: [
      'Akses Seluruh Tema',
      'Ubah Nama Tamu',
      'Tanpa Masa Aktif',
      'RSVP & Ucapan',
      'Lokasi Maps',
      'Unlimited Penerima',
      'Countdown & Save To Calendar',
    ],
    exclude: ['Foto Gallery'],
  },
  {
    name: 'Klasik',
    price: 'Rp.249.000',
    note: 'Tanpa gallery dan titip hadiah',
    features: [
      'Akses Seluruh Tema',
      'Ubah Nama Tamu',
      'Tanpa Masa Aktif',
      'RSVP & Ucapan',
      'Lokasi Maps',
      'Unlimited Penerima',
      'Countdown & Save To Calendar',
    ],
    exclude: ['Foto Gallery'],
  },
  {
    name: 'Pro',
    price: 'Rp.359.000',
    note: 'Bisa foto gallery dan titip hadiah',
    features: [
      'Akses Seluruh Tema',
      'Ubah Nama Tamu',
      'Tanpa Masa Aktif',
      'RSVP & Ucapan',
      'Lokasi Maps',
      'Unlimited Penerima',
      'Countdown & Save To Calendar',
      'Foto Gallery',
    ],
    exclude: [],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-darkblue mb-2">
          Harga Terjangkau untuk Buat Undangan Online
        </h2>
        <p className="text-darkblue mb-12">
          Dapatkan undangan digital berkualitas tanpa merogoh kocek dalam. Semua fitur esensial, harga tetap rasional.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-darkblue mb-1">{plan.name}</h3>
              <p className="text-sm text-darkblue mb-4 italic">{plan.note}</p>
              <div className="bg-secondary text-white py-3 rounded mb-5">
                <span className="text-lg font-bold">{plan.price}</span>
              </div>

              <ul className="space-y-3 text-sm text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-darkblue" />
                    <span className="text-darkblue">{feature}</span>
                  </li>
                ))}
                {plan.exclude.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-darkblue line-through">
                    <XCircle size={18} className="text-red-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <button className="border border-darkblue text-darkblue rounded px-4 py-2 text-sm bg-white hover:bg-[#2A4365] hover:text-white transition">
                  Uji Coba Sekarang
                </button>
                <a
                  href="https://wa.me/6285839265660?text=Halo admin, saya tertarik dengan paket undangan digital *{plan.name}*. Boleh dibantu ya?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-darkblue rounded px-4 py-2 text-sm hover:bg-[#1EBE5D] transition"
                >
                  Terima Beres Dibuatkan Admin
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
