'use client';

import { Clock, MapPin, Wifi, Car, Utensils, Users } from 'lucide-react';

interface TourismDestination {
  id: number;
  title: string;
  description: string;
  hours: string;
  facilities: string[];
  image: string;
  imageAlt: string;
}

const tourismData: TourismDestination[] = [
  {
    id: 1,
    title: "Wisata Edukasi Madu Apikalis",
    description: "Pelajari proses budidaya lebah madu hutan secara langsung. Pengunjung dapat mencicipi madu segar langsung dari sarangnya dan melihat proses panen yang lestari.",
    hours: "08:00 - 16:00 WIB",
    facilities: ["Area Parkir", "Toilet", "Warung UMKM", "Pemandu"],
    image: "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Petani memegang sarang lebah madu"
  },
  {
    id: 2,
    title: "Hutan Damar Mata Kucing",
    description: "Nikmati kesejukan udara di tengah hutan pohon Damar Mata Kucing yang menjulang tinggi. Spot foto instagramable dengan suasana hutan tropis yang asri.",
    hours: "07:00 - 17:30 WIB",
    facilities: ["Spot Foto", "Gazebo", "Jalur Trekking"],
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Pemandangan hutan pohon damar yang tinggi"
  },
  {
    id: 3,
    title: "Camping Ground Way Pemerihan",
    description: "Lokasi berkemah di tepi sungai Way Pemerihan yang jernih. Cocok untuk kegiatan keluarga atau komunitas pecinta alam.",
    hours: "24 Jam",
    facilities: ["Area Kemah", "Mushola", "Toilet Umum", "Penyewaan Tenda"],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=60",
    imageAlt: "Tenda di pinggir sungai jernih"
  }
];

const getFacilityIcon = (facility: string) => {
  if (facility.toLowerCase().includes('parkir') || facility.toLowerCase().includes('area kemah')) {
    return <Car className="w-3 h-3" />;
  }
  if (facility.toLowerCase().includes('warung') || facility.toLowerCase().includes('umkm')) {
    return <Utensils className="w-3 h-3" />;
  }
  if (facility.toLowerCase().includes('pemandu')) {
    return <Users className="w-3 h-3" />;
  }
  return <Wifi className="w-3 h-3" />;
};

export default function LokasiPage() {
  const scrollToMap = () => {
    const mapSection = document.getElementById('peta-lokasi');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&auto=format&fit=crop&q=60)'
        }}
      >
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 font-[family-name:var(--font-montserrat)]">
            Jelajahi Keindahan Desa Pemerihan
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8 text-white/90">
            Temukan pengalaman wisata alam dan edukasi yang tak terlupakan
          </p>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Tourism Destinations Section - Zig-Zag Layout */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              Destinasi Wisata Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai destinasi wisata menarik yang menawarkan pengalaman unik dan tak terlupakan di Desa Pemerihan
            </p>
          </div>

          {/* Tourism Cards - Zig-Zag */}
          <div className="space-y-20">
            {tourismData.map((destination, index) => (
              <div 
                key={destination.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src={destination.image}
                      alt={destination.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#2D5A27] mb-4 font-[family-name:var(--font-montserrat)]">
                      {destination.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {destination.description}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                      <Clock className="w-5 h-5 text-[#2D5A27]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Jam Buka</p>
                      <p className="text-base font-semibold text-gray-900">{destination.hours}</p>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-3">Fasilitas:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.facilities.map((facility, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full"
                        >
                          {getFacilityIcon(facility)}
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={scrollToMap}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2D5A27] text-[#2D5A27] font-semibold rounded-lg hover:bg-[#2D5A27] hover:text-white transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    Lihat di Peta
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="peta-lokasi" className="relative w-full h-[600px] bg-gray-100">
        
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211042117!2d104.12345!3d-5.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDcnMjQuNCJTIDEwNMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Desa Pemerihan"
        ></iframe>

        {/* Floating Info Card */}
        <div className="absolute top-8 left-8 bg-white rounded-xl shadow-2xl p-6 max-w-sm z-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#2D5A27] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-montserrat)]">
                Kantor Desa Pemerihan
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Jl. Raya Pemerihan No. 123<br />
                Kecamatan Bengkunat<br />
                Kabupaten Pesisir Barat<br />
                Lampung 35874
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Desa+Pemerihan+Pesisir+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-[#2D5A27] hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
