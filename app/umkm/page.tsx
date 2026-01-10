'use client';

import { useState } from 'react';
import ContactModal from '@/components/shared/ContactModal';
import { products } from '@/libs/data';

interface FeaturedProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  features: { title: string; description: string; icon: string }[];
  seller: { name: string; phone: string; avatar: string };
}

export default function UMKMPage() {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  
  // Extended product data for featured section
  const featuredProductsData: FeaturedProduct[] = [
    {
      id: 1,
      title: 'Madu Apikalis',
      description: 'Madu murni berkualitas premium yang dihasilkan dari lebah lokal di hutan desa kami. Dipanen dengan metode tradisional yang menjaga keaslian dan khasiatnya.',
      image: '/images/Madu.webp',
      features: [
        {
          title: 'Konsumsi Kesehatan',
          description: 'Kaya antioksidan, meningkatkan imunitas, dan menjaga kesehatan tubuh secara alami',
          icon: '🍯'
        },
        {
          title: 'Masker Kosmetik Alami',
          description: 'Melembabkan kulit, mengurangi jerawat, dan memberikan nutrisi alami untuk wajah bercahaya',
          icon: '✨'
        }
      ],
      seller: {
        name: 'Ibu Siti Nurhaliza',
        phone: '6281234567890',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      id: 2,
      title: 'Batik Tulis Tradisional',
      description: 'Kain batik tulis asli dengan motif khas desa yang dikerjakan dengan tangan oleh pengrajin berpengalaman.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop',
      features: [
        {
          title: 'Kualitas Premium',
          description: 'Menggunakan kain berkualitas tinggi dengan pewarna alami yang ramah lingkungan',
          icon: '🎨'
        },
        {
          title: 'Motif Tradisional',
          description: 'Setiap motif memiliki makna filosofis dan nilai budaya yang tinggi',
          icon: '🖌️'
        }
      ],
      seller: {
        name: 'Ibu Dewi Sartika',
        phone: '6281234567891',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
      }
    },
    {
      id: 3,
      title: 'Kerajinan Bambu',
      description: 'Produk kerajinan dari bambu pilihan yang diolah dengan teknik tradisional dan desain modern.',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&auto=format&fit=crop',
      features: [
        {
          title: 'Ramah Lingkungan',
          description: 'Terbuat dari bambu pilihan yang berkelanjutan dan tidak merusak alam',
          icon: '🌿'
        },
        {
          title: 'Desain Unik',
          description: 'Kombinasi sempurna antara keindahan tradisional dan fungsi modern',
          icon: '🎋'
        }
      ],
      seller: {
        name: 'Bapak Ahmad Yani',
        phone: '6281234567892',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
      }
    }
  ];

  const [featuredProduct, setFeaturedProduct] = useState<FeaturedProduct>(featuredProductsData[0]);

  const handleProductClick = (productId: number) => {
    const product = featuredProductsData.find(p => p.id === productId);
    if (product) {
      setFeaturedProduct(product);
      // Scroll to featured section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-700 to-green-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Galeri Produk & UMKM Desa</h2>
          <p className="text-base md:text-lg mb-3">Temukan produk unggulan dari tangan-tangan terampil warga desa kami.</p>
          <p className="text-sm md:text-base text-green-100">
            Setiap produk adalah hasil kerja penuh dedikasi yang menggabungkan tradisi<br />
            dan kualitas terbaik.
          </p>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Featured Product - Combined Layout */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Product Image */}
            <div className="relative h-[450px] lg:h-auto">
              <img 
                src={featuredProduct.image}
                alt={featuredProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Product Details */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
              <div className="inline-flex items-center gap-2 mb-6 self-start bg-amber-100 px-4 py-2 rounded-full">
                <span className="text-amber-700">⭐</span>
                <span className="text-sm font-bold text-amber-800 uppercase">Produk Unggulan</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {featuredProduct.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredProduct.description}
              </p>
              
              {/* Features Boxes */}
              <div className="space-y-3 mb-6">
                {featuredProduct.features.map((feature, index) => (
                  <div key={index} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Seller Box */}
              <div className="bg-green-700 text-white rounded-xl p-6 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={featuredProduct.seller.avatar}
                    alt={featuredProduct.seller.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <p className="text-xs text-green-200">Hubungi Penjual</p>
                    <h4 className="font-bold text-lg">{featuredProduct.seller.name}</h4>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${featuredProduct.seller.phone}?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(featuredProduct.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-lg hover:bg-green-50 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
                  </svg>
                  Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Featured Product - Inverted Layout */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Product Details (inverted order) */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-white order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6 self-start bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-700">⭐</span>
                <span className="text-sm font-bold text-blue-800 uppercase">Produk Unggulan</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Sabun Alami Organik
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sabun alami premium yang dibuat dari bahan-bahan organik pilihan tanpa kimia berbahaya. Setiap batang diproduksi dengan metode cold process yang menjaga nutrisi dan aroma alami yang menyegarkan.
              </p>
              
              {/* Features Boxes */}
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                      🧼
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Lembut untuk Kulit</h4>
                      <p className="text-gray-600 text-sm">Cocok untuk semua jenis kulit, bahkan kulit sensitif sekalipun</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                      🌿
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Bahan Alami 100%</h4>
                      <p className="text-gray-600 text-sm">Tanpa bahan kimia sintetis, pewarna buatan, atau bahan pengawet berbahaya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Seller Box */}
              <div className="bg-green-700 text-white rounded-xl p-6 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Penjual Sabun Alami"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <p className="text-xs text-green-200">Hubungi Penjual</p>
                    <h4 className="font-bold text-lg">Ibu Lina Kusuma</h4>
                  </div>
                </div>
                <a
                  href="https://wa.me/6281234567893?text=Halo,%20saya%20tertarik%20dengan%20Sabun%20Alami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-lg hover:bg-green-50 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
                  </svg>
                  Chat Sekarang
                </a>
              </div>
            </div>

            {/* Right - Product Image (inverted order) */}
            <div className="relative h-[450px] lg:h-auto order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1618840313409-66c0d92d6f26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29hcHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Sabun Alami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Produk UMKM Desa Lainnya</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Jelajahi koleksi produk lokal yang dibuat dengan penuh cinta oleh pengrajin lokal kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  <button 
                    className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 md:py-3 rounded-lg transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Lihat Detail Produk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={selectedContact !== null}
        onClose={() => setSelectedContact(null)}
      />
    </div>
  );
}

function Heart({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );
}

function Leaf({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
    </svg>
  );
}
