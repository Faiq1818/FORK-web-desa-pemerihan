'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(to right, #654321, #4a2f1a)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">
                🌾
              </div>
              <span className="font-bold">Desa Pemerihan</span>
            </div>
            <p className="text-amber-50 text-sm">
              Desa yang mandiri, sejahtera, dan berkelanjutan untuk masyarakat kami yang berkualitas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2 text-amber-50">
              <li><a href="/" className="hover:text-white transition">Beranda</a></li>
              <li><a href="/tentang" className="hover:text-white transition">Tentang Desa</a></li>
              <li><a href="#" className="hover:text-white transition">Pelajat Desa</a></li>
              <li><a href="/umkm" className="hover:text-white transition">Produk UMKM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2 text-amber-50">
              <li><a href="#" className="hover:text-white transition">Administrasi Desa</a></li>
              <li><a href="#" className="hover:text-white transition">Kependudukan Dasyarakat</a></li>
              <li><a href="#" className="hover:text-white transition">Informasi Publik</a></li>
              <li><a href="#" className="hover:text-white transition">Peraturan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-amber-50 text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl Desa Pemerihan No. 123, Kab. Matus, Jawa Timur</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(0341) 555-0123</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@desapemerihan.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-50 text-sm text-center md:text-left">
              © 2025 Desa Pemerihan. Kabupaten Pesisir Barat, Lampung. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-amber-50 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-amber-50 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.011 4.849.07 3.252.148 4.771 1.691 4.919 4.919.059 1.265.069 1.645.069 4.849 0 3.204-.011 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.011-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-amber-50 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
