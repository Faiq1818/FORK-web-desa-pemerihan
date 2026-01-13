// Product Data
export interface ProductCard {
  id: number;
  title: string;
  image: string;
  description: string;
  seller: string;
}

export const products: ProductCard[] = [
  {
    id: 1,
    title: "Anyaman Bambu Tradisional",
    image:
      "https://plus.unsplash.com/premium_photo-1671282997702-fd42fa5f200e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Kerajinan dari bambu pilihan berkualitas premium. Setiap produk dibuat dengan tangan menggunakan teknik tradisional turun temurun.",
    seller: "Pengrajin Lokal Kami",
  },
  {
    id: 2,
    title: "Tas Kain Tenun",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    description:
      "Tas kain dengan motif tenun kharas yang elegan dan tahan lama. Cocok untuk berbagai gaya hidup modern.",
    seller: "Pengrajin Lokal Kami",
  },
  {
    id: 3,
    title: "Kerajinan Kayu Ukir",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
    description:
      "Hasil carving rumah tangga yang unik. Menampilkan keahlian perajin dalam mengolah kayu alami.",
    seller: "Pengrajin Lokal Kami",
  },
  {
    id: 4,
    title: "Batik Tulis Tangan",
    image:
      "https://images.unsplash.com/photo-1604973104381-870c92f10343?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Kain batik dengan motif klasik yang dibuat dengan teknik tulis. Setiap helai unik dan penuh makna.",
    seller: "Pengrajin Lokal Kami",
  },
  {
    id: 5,
    title: "Keramik & Gerabah",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
    description:
      "Perpaduan uishar dan konsan dengan landah tradisional. Fungsional sekaligus bernilai seni tinggi.",
    seller: "Pengrajin Lokal Kami",
  },
];

// Article Data
export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "panen-raya-madu-apikalis-2024",
    title: "Panen Raya Madu Apikalis 2024 Menghasilkan 500kg Madu Berkualitas",
    excerpt:
      "Kelompok tani madu Apikalis Desa Pemerihan berhasil memanen 500kg madu berkualitas tinggi pada musim panen tahun 2024 ini.",
    content: `
      <p>Desa Pemerihan kembali mencatatkan prestasi gemilang dalam sektor perlebahan. Kelompok Tani Madu Apikalis yang telah berdiri sejak 2018 berhasil memanen 500 kilogram madu berkualitas tinggi pada musim panen tahun 2024 ini.</p>
      
      <p>Menurut Ketua Kelompok Tani Apikalis, Bapak Sutrisno, "Tahun ini hasil panen kami meningkat 30% dibanding tahun lalu. Ini berkat pelatihan budidaya lebah modern yang kami terima dari Dinas Pertanian Kabupaten."</p>
      
      <p>Madu yang dihasilkan berasal dari nektar bunga kopi, rambutan, dan bunga liar di kawasan hutan lindung sekitar desa. Kualitas madu Pemerihan sudah mendapat sertifikasi SNI dan lulus uji laboratorium.</p>
      
      <p>Saat ini, madu Apikalis Pemerihan sudah dipasarkan hingga ke Jakarta, Bandung, dan Lampung. Bahkan beberapa toko online besar sudah menjadi mitra distribusi produk unggulan desa ini.</p>
      
      <p>Kepala Desa Pemerihan, Ibu Siti Nurhaliza, mengapresiasi prestasi kelompok tani ini. "Kami berkomitmen terus mendukung UMKM desa, termasuk kelompok peternak lebah. Kedepannya kami akan fasilitasi pelatatan produksi dan sertifikasi halal," ujarnya.</p>
    `,
    date: "2024-12-15",
    author: "Tim Redaksi Desa",
    category: "UMKM",
    image:
      "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
    tags: ["madu", "umkm", "pertanian", "apikalis"],
  },
  {
    id: 2,
    slug: "penyaluran-blt-dana-desa-tahap-1",
    title: "Penyaluran BLT Dana Desa Tahap 1 untuk 150 KK",
    excerpt:
      "Pemerintah Desa Pemerihan menyalurkan Bantuan Langsung Tunai (BLT) Dana Desa tahap pertama kepada 150 Kepala Keluarga penerima manfaat.",
    content: `
      <p>Pemerintah Desa Pemerihan resmi menyalurkan Bantuan Langsung Tunai (BLT) Dana Desa tahap pertama kepada 150 Kepala Keluarga (KK) yang terdampak ekonomi. Penyaluran dilaksanakan di Balai Desa Pemerihan pada Selasa, 10 Desember 2024.</p>
      
      <p>Setiap KK penerima mendapatkan bantuan sebesar Rp 600.000,- yang dibagikan dalam 3 tahap. Tahap pertama ini masing-masing KK menerima Rp 200.000,-.</p>
      
      <p>Kepala Desa Pemerihan, Ibu Siti Nurhaliza menjelaskan, "Penerima BLT ini adalah warga yang masuk kriteria keluarga kurang mampu berdasarkan data DTKS dan verifikasi tim pendamping desa. Kami pastikan bantuan ini tepat sasaran."</p>
      
      <p>Proses penyaluran berlangsung tertib dengan menerapkan protokol kesehatan. Para penerima bantuan diminta menunjukkan KTP dan KK asli, kemudian menandatangani berita acara penerimaan.</p>
      
      <p>Salah satu penerima bantuan, Ibu Lastri (48) mengungkapkan rasa syukurnya. "Alhamdulillah sangat terbantu sekali. Uang ini akan saya gunakan untuk membeli kebutuhan pokok keluarga," katanya.</p>
      
      <p>Rencananya, penyaluran BLT Dana Desa tahap 2 akan dilaksanakan pada bulan Februari 2025 mendatang.</p>
    `,
    date: "2024-12-10",
    author: "Tim Redaksi Desa",
    category: "Pembangunan",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop",
    tags: ["blt", "dana desa", "bantuan sosial"],
  },
  {
    id: 3,
    slug: "gotong-royong-pembersihan-jalan-desa",
    title: "Gotong Royong Pembersihan Jalan Desa Sambut Tahun Baru",
    excerpt:
      "Warga Desa Pemerihan kompak melaksanakan gotong royong pembersihan jalan dan saluran air untuk menyambut tahun baru 2025.",
    content: `
      <p>Suasana gotong royong memenuhi jalan-jalan utama Desa Pemerihan pada Minggu pagi, 8 Desember 2024. Ratusan warga dari berbagai RT/RW turun bersama-sama membersihkan jalan desa dan saluran air.</p>
      
      <p>Kegiatan yang dimulai pukul 07.00 WIB ini diikuti oleh sekitar 200 warga dari berbagai kalangan, mulai dari remaja hingga orang tua. Mereka membawa peralatan seperti sapu lidi, cangkul, dan karung untuk mengangkut sampah.</p>
      
      <p>Ketua RW 02, Bapak Hermanto mengatakan, "Kegiatan gotong royong ini rutin kami laksanakan setiap bulan. Kali ini spesial menyambut tahun baru, jadi antusiasme warga sangat tinggi."</p>
      
      <p>Tak hanya membersihkan jalan, warga juga memotong rumput liar di pinggir jalan dan membersihkan selokan yang tersumbat. Hasilnya, jalan desa tampak bersih dan rapi.</p>
      
      <p>Kepala Desa Pemerihan yang juga turun langsung dalam kegiatan ini mengapresiasi semangat gotong royong warga. "Ini adalah budaya luhur yang harus kita jaga. Dengan gotong royong, lingkungan bersih dan kebersamaan warga semakin erat," ujar Ibu Siti Nurhaliza.</p>
      
      <p>Setelah kegiatan selesai sekitar pukul 10.00 WIB, warga menikmati hidangan nasi bungkus dan minuman yang disediakan oleh pemerintah desa.</p>
    `,
    date: "2024-12-08",
    author: "Tim Redaksi Desa",
    category: "Kegiatan Desa",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
    tags: ["gotong royong", "kebersihan", "lingkungan"],
  },
  {
    id: 4,
    slug: "pelatihan-pengolahan-batik-tulis",
    title: "Pelatihan Pengolahan Batik Tulis untuk Ibu-ibu PKK",
    excerpt:
      "Dinas Perindustrian Kabupaten mengadakan pelatihan pembuatan batik tulis bagi ibu-ibu PKK Desa Pemerihan.",
    content: `
      <p>Sebanyak 30 ibu-ibu anggota PKK Desa Pemerihan mengikuti pelatihan pembuatan batik tulis yang diselenggarakan oleh Dinas Perindustrian dan Perdagangan Kabupaten Pesisir Barat. Pelatihan berlangsung selama 3 hari, dari tanggal 5-7 Desember 2024 di Balai Desa Pemerihan.</p>
      
      <p>Pelatihan ini menghadirkan instruktur berpengalaman dari Pekalongan, Ibu Suryani yang telah malang melintang di dunia batik selama 25 tahun. Materi yang diajarkan meliputi pengenalan motif batik, teknik membatik, pewarnaan alami, hingga finishing produk.</p>
      
      <p>Ketua Tim PKK Desa Pemerihan, Ibu Dewi Sartika menyampaikan, "Pelatihan ini sangat bermanfaat. Kami berharap ibu-ibu bisa memproduksi batik sendiri dan menjadikannya usaha sampingan untuk menambah penghasilan keluarga."</p>
      
      <p>Setiap peserta mendapatkan bantuan starter kit berupa canting, malam, kain mori, dan pewarna dari penyelenggara. Kedepannya, produk batik hasil karya ibu-ibu PKK ini akan dipasarkan melalui platform digital dan toko UMKM desa.</p>
      
      <p>Camat Bengkunat, Bapak Drs. Sutopo, M.Si yang hadir dalam penutupan pelatihan berpesan, "Batik adalah warisan budaya bangsa. Dengan menguasai skill membatik, ibu-ibu tidak hanya melestarikan budaya tapi juga bisa mandiri secara ekonomi."</p>
    `,
    date: "2024-12-07",
    author: "Tim Redaksi Desa",
    category: "Pemberdayaan",
    image:
      "https://images.unsplash.com/photo-1604973104381-870c92f10343?w=1200&h=600&fit=crop",
    tags: ["batik", "pkk", "pelatihan", "umkm"],
  },
  {
    id: 5,
    slug: "wisata-pantai-pemerihan-ramai-dikunjungi",
    title: "Wisata Pantai Pemerihan Ramai Dikunjungi Saat Libur Akhir Tahun",
    excerpt:
      "Pantai Pemerihan menjadi destinasi favorit wisatawan lokal untuk menghabiskan waktu libur akhir tahun.",
    content: `
      <p>Kawasan wisata Pantai Pemerihan dibanjiri pengunjung pada libur akhir tahun ini. Sejak pagi hingga sore hari, ratusan wisatawan memadati pantai yang terkenal dengan ombak tenang dan pemandangan sunset yang memukau ini.</p>
      
      <p>Menurut data dari Pokdarwis (Kelompok Sadar Wisata) Desa Pemerihan, jumlah kunjungan wisata pada libur akhir tahun 2024 meningkat 40% dibanding tahun lalu. Rata-rata ada 300-400 pengunjung per hari.</p>
      
      <p>Ketua Pokdarwis, Bapak Joko Susanto menjelaskan, "Kami sudah mempersiapkan fasilitas tambahan seperti toilet umum, tempat parkir, dan warung makan. Petugas kebersihan juga kami tambah agar pantai tetap bersih."</p>
      
      <p>Pantai Pemerihan memang menawarkan pesona alam yang masih alami. Pasir putih yang bersih, air laut yang jernih, dan deretan pohon kelapa di pinggir pantai menciptakan suasana tropis yang menenangkan. Tak heran banyak wisatawan yang datang untuk berenang, bermain pasir, atau sekadar bersantai.</p>
      
      <p>Selain menikmati keindahan pantai, pengunjung juga bisa mencicipi kuliner khas pesisir seperti ikan bakar, kerang, dan cumi goreng tepung yang dijajakan di warung-warung sekitar pantai.</p>
      
      <p>Salah satu pengunjung dari Bandar Lampung, Rina (32) mengaku senang berkunjung ke Pantai Pemerihan. "Pantainya masih bersih dan tidak terlalu ramai. Cocok untuk liburan keluarga. Kami pasti akan datang lagi," ucapnya.</p>
    `,
    date: "2024-12-28",
    author: "Tim Redaksi Desa",
    category: "Wisata",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    tags: ["pantai", "wisata", "libur"],
  },
  {
    id: 6,
    slug: "musyawarah-desa-rencana-pembangunan",
    title: "Musyawarah Desa Bahas Rencana Pembangunan 2025",
    excerpt:
      "Pemerintah Desa Pemerihan menggelar musyawarah desa untuk membahas prioritas pembangunan tahun 2025.",
    content: `
      <p>Pemerintah Desa Pemerihan menggelar Musyawarah Desa (Musdes) pada Kamis malam, 20 Desember 2024 di Balai Desa. Acara yang dihadiri oleh perangkat desa, BPD, tokoh masyarakat, dan perwakilan RT/RW ini membahas rencana prioritas pembangunan desa tahun 2025.</p>
      
      <p>Kepala Desa Pemerihan, Ibu Siti Nurhaliza membuka acara dengan memaparkan realisasi pembangunan tahun 2024 dan anggaran yang tersedia untuk tahun 2025. "Total Dana Desa yang kita terima tahun depan sekitar 1,2 miliar rupiah. Kita harus gunakan sebaik mungkin untuk kesejahteraan masyarakat," jelasnya.</p>
      
      <p>Dalam musyawarah tersebut, warga menyampaikan berbagai usulan program prioritas, antara lain:
      <ul>
        <li>Pembangunan jalan cor blok di RT 05 sepanjang 500 meter</li>
        <li>Rehab gedung PAUD dan TK</li>
        <li>Pembuatan drainase di kawasan perumahan baru</li>
        <li>Bantuan stimulan untuk UMKM desa</li>
        <li>Pengadaan lampu jalan tenaga surya</li>
      </ul>
      </p>
      
      <p>Setelah melalui diskusi panjang, disepakati bahwa prioritas utama tahun 2025 adalah pembangunan infrastruktur jalan dan drainase, serta pengembangan UMKM desa. Sementara program lainnya akan disesuaikan dengan sisa anggaran.</p>
      
      <p>Ketua BPD Desa Pemerihan, Bapak Ahmad Fauzi menutup acara dengan harapan agar semua program yang direncanakan dapat terealisasi dengan baik. "Mari kita kawal bersama pembangunan desa kita. Jangan ada lagi program yang mangkrak," tegasnya.</p>
    `,
    date: "2024-12-20",
    author: "Tim Redaksi Desa",
    category: "Pembangunan",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=600&fit=crop",
    tags: ["musyawarah", "pembangunan", "dana desa"],
  },
];

// Popular articles for sidebar
export const popularArticles = [
  articles[0], // Panen Raya Madu
  articles[4], // Wisata Pantai
  articles[3], // Pelatihan Batik
];

// Archive data
export interface ArchiveMonth {
  month: string;
  year: number;
  count: number;
}

export const archiveMonths: ArchiveMonth[] = [
  { month: "Desember", year: 2024, count: 6 },
  { month: "November", year: 2024, count: 4 },
  { month: "Oktober", year: 2024, count: 5 },
  { month: "September", year: 2024, count: 3 },
];
