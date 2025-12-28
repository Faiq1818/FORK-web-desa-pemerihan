import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill, BsMailbox } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type Pejabat = {
  nama: string;
  jabatan: string;
  image: string;
};

type Produk = {
  nama: string;
  long_desc: string;
  short_desc: string;
  advantage: string[];
  star: number;
  review: number;
  price: number;
  disc: number;
};

type News = {
  news_type: string;
  date: string;
  title: string;
  desc: string;
};

const formatTanggal = (date: string) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const data: Pejabat[] = [
  { nama: "Bapak Surya Wijaya", jabatan: "Kepala Desa", image: "" },
  { nama: "Bapak Ahmad Fauzi", jabatan: "Sekretaris Desa", image: "" },
  { nama: "Ibu Siti Nurhaliza", jabatan: "Kaur Keuangan", image: "" },
  { nama: "Bapak Bambang Susilo", jabatan: "Kepala Dusun", image: "" },
  { nama: "Bapak Bambang Susilo", jabatan: "Kepala Dusun", image: "" },
  { nama: "Bapak Bambang Susilo", jabatan: "Kepala Dusun", image: "" },
  { nama: "Bapak Bambang Susilo", jabatan: "Kepala Dusun", image: "" },
];

const produkData: Produk[] = [
  {
    nama: "Serum Wajah Glow",
    long_desc:
      "Serum wajah dengan kandungan niacinamide dan hyaluronic acid untuk membantu mencerahkan kulit, menjaga kelembapan, serta membuat kulit tampak lebih sehat dan bercahaya.",
    short_desc: "Serum pencerah dan pelembap wajah.",
    advantage: [
      "Mencerahkan kulit",
      "Melembapkan intensif",
      "Tekstur ringan",
      "Cepat menyerap",
    ],
    star: 5,
    review: 124,
    price: 120000,
    disc: 20,
  },
  {
    nama: "Facial Wash Gentle",
    long_desc:
      "Sabun cuci wajah dengan formula lembut yang membantu membersihkan kotoran tanpa membuat kulit kering atau terasa tertarik.",
    short_desc: "Pembersih wajah lembut untuk semua jenis kulit.",
    advantage: [
      "Tidak membuat kulit kering",
      "Cocok untuk kulit sensitif",
      "pH seimbang",
    ],
    star: 4,
    review: 87,
    price: 45000,
    disc: 10,
  },
  {
    nama: "Moisturizer Aloe",
    long_desc:
      "Krim pelembap berbahan dasar aloe vera untuk membantu menenangkan kulit, mengurangi kemerahan, dan menjaga hidrasi sepanjang hari.",
    short_desc: "Pelembap aloe untuk kulit sensitif.",
    advantage: ["Menenangkan kulit", "Cepat meresap", "Tidak lengket"],
    star: 4,
    review: 65,
    price: 75000,
    disc: 15,
  },
  {
    nama: "Sunscreen SPF 50",
    long_desc:
      "Tabir surya dengan perlindungan SPF 50 PA++++ untuk melindungi kulit dari sinar UVA dan UVB serta mencegah penuaan dini.",
    short_desc: "Perlindungan maksimal dari sinar matahari.",
    advantage: [
      "SPF tinggi",
      "Ringan di kulit",
      "Tidak meninggalkan white cast",
    ],
    star: 5,
    review: 210,
    price: 90000,
    disc: 25,
  },
  {
    nama: "Toner Hydrating",
    long_desc:
      "Toner dengan kandungan hyaluronic acid untuk membantu menghidrasi kulit dan mempersiapkan kulit sebelum tahap skincare berikutnya.",
    short_desc: "Toner hidrasi untuk semua jenis kulit.",
    advantage: ["Melembapkan", "Menyegarkan kulit", "Bebas alkohol"],
    star: 4,
    review: 92,
    price: 60000,
    disc: 0,
  },
];

const newsData: News[] = [
  {
    news_type: "Pengumuman",
    date: "2025-01-05",
    title: "Pembagian Bantuan Sosial Tahap I",
    desc: "Pemerintah desa akan melaksanakan pembagian bantuan sosial tahap pertama kepada warga yang terdaftar sebagai penerima manfaat.",
  },
  {
    news_type: "Kegiatan",
    date: "2025-01-12",
    title: "Gotong Royong Bersih Desa",
    desc: "Seluruh warga diimbau untuk berpartisipasi dalam kegiatan gotong royong membersihkan lingkungan desa.",
  },
  {
    news_type: "Berita",
    date: "2025-01-20",
    title: "Peresmian Balai Desa Baru",
    desc: "Balai desa baru resmi digunakan sebagai pusat pelayanan masyarakat dan kegiatan pemerintahan desa.",
  },
  {
    news_type: "Pengumuman",
    date: "2025-02-01",
    title: "Pendaftaran Bantuan UMKM",
    desc: "Pendaftaran bantuan UMKM dibuka bagi pelaku usaha desa untuk mendorong pertumbuhan ekonomi lokal.",
  },
  {
    news_type: "Kegiatan",
    date: "2025-02-10",
    title: "Pelatihan Digitalisasi UMKM",
    desc: "Pelatihan digitalisasi UMKM akan diselenggarakan untuk meningkatkan kemampuan pemasaran online pelaku usaha desa.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-[#FFFDE1] h-auto md:h-[10vh] text-[clamp(12px,1.2vw,15px)]">
        {/* Logo */}
        <div className="flex justify-center items-center w-full md:w-[32vw] h-[10vh]">
          <div className="flex w-[80%] md:w-[45%] h-full">
            <div className="flex justify-center items-center w-[30%] h-full">
              <div className="flex justify-center items-center h-[70%] aspect-square bg-yellow-500 rounded-full">
                <FaMountainSun className="h-[50%] w-auto" />
              </div>
            </div>
            <div className="flex flex-col w-[70%] h-full">
              <div className="flex items-end h-1/2">
                <b>Desa Sejahtera</b>
              </div>
              <div className="h-1/2">Kabupaten Makmur</div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:flex w-[24vw]"></div>

        {/* Menu */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[44vw]">
          {["Beranda", "Tentang", "Pejabat", "UMKM", "Artikel", "Lokasi"].map(
            (item) => (
              <div
                key={item}
                className="flex justify-center items-center w-full md:w-[10%] h-[6vh] md:h-full"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-[90vh]">
        Image
      </div>
      <div className="flex flex-col border-black border-[1px] bg-[#F5F2F2] h-[100vh] text-[clamp(12px,1.2vw,15px)]">
        <div className="flex flex-col border-red-500 h-[20%] w-[100%]">
          <div className="flex border-black h-[45%] w-[100%]"></div>
          <div className="flex justify-center items-center border-black h-[40%] w-[100%] text-[#452829] text-[clamp(12px,2vw,40px)]">
            <b>Selayang Pandang</b>
          </div>
          <div className="flex justify-center border-black h-[15%] w-[100%]">
            <div className="flex bg-[#E9B63B] h-[15%] w-[7%] rounded-[5px]"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start border-red-500 border-[1px] h-[80%] w-[100%]">
          <div className="flex flex-col sm:flex-row justify-center items-center border-blue-500 h-[90%] w-[90%]">
            <div className="flex flex-col justify-center items-center border-black-500 border-[1px] h-[100%] w-[50%]">
              <div className="flex flex-col border-red-500 border-[1px] h-[100%] w-[100%]">
                <div className="flex h-[20%] w-[100%] text-[#452829] text-[clamp(12px,1.2vw,20px)]">
                  <b>Visi Desa</b>
                </div>
                <div className="flex h-[80%] w-[100%]">Blabla</div>
              </div>
              <div className="flex flex-col border-red-500 border-[1px] h-[100%] w-[100%]">
                <div className="flex h-[20%] w-[100%] text-[#452829] text-[clamp(12px,1.2vw,20px)]">
                  <b>Visi Desa</b>
                </div>
                <div className="flex h-[80%] w-[100%]">Blabla</div>
              </div>
              <div className="flex flex-row border-red-500 border-[1px] h-[100%] w-[100%]"></div>
            </div>
            <div className="relative flex-row border-red-500 border-[1px] h-[100%] w-[50%]">
              <div className="absolute top-0 right-0 w-[95%] h-[95%] border-blue-500 border-[5px]">
                Kotak 1
              </div>
              <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[15%] border-green-500 border-[5px]">
                Kotak 2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[80vh]">
        <div className="flex flex-col items-center h-[30%] w-[100%]">
          <div className="flex justify-center items-end h-[65%] w-[100%] text-[#452829] text-[clamp(12px,2vw,40px)]">
            <b>Pejabat dan Pengurus Desa</b>
          </div>
          <div className="flex bg-[#E9B63B] h-[2%] w-[8%] rounded-[5px]"></div>
          <div className="flex justify-center items-center h-[33%] w-[100%]">
            Tim kepemimpinan desa yang berdedikasi untuk melayani dan memajukan
            kesejahteraan masyarakat
          </div>
        </div>
        <div className="flex justify-center items-center h-[70%]">
          <div className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide w-[80%] h-[70%]">
            <div className="hidden start-snap"></div>
            {data.map((item, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-shrink-0 w-[23.5%] h-[90%]"
              >
                <div className="flex flex-col gap-2 justify-center items-center rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] p-3 text-center h-[90%] w-full aspect-[3/4]">
                  <div className="flex justify-center items-center w-24 aspect-square rounded-full border-2 border-yellow-400">
                    Image
                  </div>
                  <div className="font-semibold text-[#452829]">
                    {item.nama}
                  </div>
                  <div className="text-sm text-gray-500">{item.jabatan}</div>
                  <div className="flex justify-center items-center gap-3 h-[20%] w-[40%]">
                    <div className="flex bg-[#57595B] justify-center items-center rounded-full w-[60%] aspect-square">
                      <div className="relative w-1/2 h-1/2">
                        <CiMail className="h-[100%] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex bg-[#57595B] justify-center items-center rounded-full w-[60%] aspect-square">
                      <div className="relative w-1/2 h-1/2">
                        <BsFillTelephoneFill className="h-[100%] w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-[150vh] bg-[#FFF8DE]">
        <div className="flex flex-col items-center h-[100%] w-[90%]">
          <div className="flex flex-col h-[67%] w-[100%]">
            <div className="flex flex-col items-center h-[30%] w-[100%]">
              <div className="flex justify-center items-end h-[65%] w-[100%] text-[#452829] text-[clamp(12px,2vw,40px)]">
                <b>Produk Unggulan Desa</b>
              </div>
              <div className="flex bg-[#E9B63B] h-[2%] w-[8%] rounded-[5px]"></div>
              <div className="flex justify-center items-center h-[33%] w-[100%]">
                Produk berkualitas dari UMKM lokal yang dikelola dengan penuh
                dedikasi oleh masyarakat desa
              </div>
            </div>
            <div className="flex flex-row h-[70%] w-[100%] rounded-2xl bg-white shadow-[0_3px_16px_rgba(0,0,0,0.20)]">
              <div className="relative w-[50%]">
                <div className="absolute w-[100%] h-[100%]">
                  <div className="flex justify-center items-center h-[100%] w-[100%]">
                    Image
                  </div>
                </div>
                <div className="absolute top-5 left-5 w-[25%] h-[7%] bg-[#FFD41D] text-[clamp(12px,1.1vw,15px)] rounded-full">
                  <div className="flex justify-center items-center h-[100%] w-[100%] text-[clamp(12px,1.1vw,15px)]">
                    PRODUK UNGGULAN
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <div className="flex flex-col h-[90%] w-[90%]">
                  <div className="flex h-[7%]">
                    <div className="flex justify-center items-center bg-[#A8BBA3] w-[25%] h-[100%] rounded-sm text-[#452829] font-bold p-[1px]">
                      Produk Alami
                    </div>
                  </div>
                  <div className="flex items-center h-[14%] text-[#452829] text-[clamp(12px,2vw,40px)] font-bold">
                    {produkData[1].nama}
                  </div>
                  <div className="flex h-[25%] text-gray-500">
                    {produkData[1].long_desc}
                  </div>
                  <div className="flex flex-col h-[25%]">
                    {produkData[1].advantage.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center flex-row h-[25%] gap-[5px]"
                      >
                        <PiSealCheckFill className="text-[#AA2B1D]" />
                        <div className="flex">{item}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-2 h-[5%]">
                    <div className="flex flex-row gap-[5px]">
                      {Array.from({ length: 5 }).map((_, index) => {
                        if (produkData[1].star >= index + 1) {
                          return (
                            <FaStar
                              key={index}
                              className="h-[100%] w-auto text-yellow-500"
                            />
                          );
                        } else if (produkData[1].star >= index + 0.5) {
                          return (
                            <FaStarHalfAlt
                              key={index}
                              className="h-[100%] w-auto text-yellow-500"
                            />
                          );
                        } else {
                          return (
                            <FaRegStar
                              key={index}
                              className="h-[100%] w-auto text-yellow-500"
                            />
                          );
                        }
                      })}
                    </div>
                    <div className="text-gray-500">
                      ({produkData[1].review}) Ulasan
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center h-[12%]">
                    <div className="flex items-center font-bold text-[#452829] text-[clamp(12px,1.7vw,30px)]">
                      Rp.{produkData[1].price}
                    </div>
                    <div className="flex items-center text-gray-500 text-[clamp(12px,1.2vw,20px)] line-through">
                      Rp.{produkData[1].price * (1 - produkData[1].disc / 100)}
                    </div>
                    <div className="flex items-center justify-center w-[10%] h-[40%] bg-[#AA2B1D] rounded-md text-white text-[clamp(12px,1.2vw,20px)]">
                      -{produkData[1].disc}%
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2 h-[12%] bg-[#AA2B1D] rounded-md">
                    <FaShoppingCart className="text-white" />
                    <div className="text-white">Beli Sekarang</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center h-[33%] w-[100%]">
            <div className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide w-[100%] h-[100%]">
              <div className="hidden start-snap"></div>
              {produkData.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center flex-shrink-0 w-[32%] h-[100%]"
                >
                  <div className="flex flex-col gap-2 justify-center items-center rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] p-3 text-center h-[90%] w-full aspect-[3/4] bg-white">
                    <div className="flex justify-center items-center w-[95%] h-[60%] rounded-2xl border-2 border-yellow-400">
                      Image
                    </div>
                    <div className="flex items-left w-[95%] font-semibold text-[#452829]">
                      {item.nama}
                    </div>
                    <div className="flex items-left w-[95%] text-sm text-gray-500">
                      {item.short_desc}
                    </div>
                    <div className="flex flex-row justify-between items-center gap-3 h-[20%] w-[95%]">
                      <div className="flex font-bold text-[#452829] text-[clamp(12px,1.7vw,30px)]">
                        Rp. {item.price}
                      </div>
                      <div className="flex justify-center items-center bg-[#FFD41D] h-[60%] w-[20%] rounded-md">
                        <div className="">Lihat</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-[140vh]">
        <div className="flex flex-col items-center h-[20%] w-[100%]">
          <div className="flex justify-center items-end h-[65%] w-[100%] text-[#452829] text-[clamp(12px,2vw,40px)]">
            <b>Lokasi Desa</b>
          </div>
          <div className="flex bg-[#E9B63B] h-[2%] w-[8%] rounded-[5px]"></div>
          <div className="flex justify-center items-center h-[33%] w-[100%]">
            Temukan kami di kawasan yang mudah diakses dengan pemandangan alam
            yang menakjubkan
          </div>
        </div>
        <div className="flex flex-col h-[73%] w-[90%]">
          <div className="flex flex-col items-center justify-center gap-2 bg-gray-500 rounded-md h-[65%] w-[100%] shadow-[0_3px_16px_rgba(0,0,0,0.4)]">
            <div className="flex justify-center items-center bg-[#452829] rounded-full h-[13%] aspect-square">
              <FaLocationDot className="text-yellow-500 w-[45%] h-auto" />
            </div>
            <div className="flex justify-center h-auto w-[100%] text-[#452829] text-[clamp(12px,1.4vw,30px)]">
              <b>Lokasi Desa</b>
            </div>
            <div className="flex">Kecamatan Makmur, Kabupaten Makmur</div>
            <div className="flex flex-row justify-center items-center gap-2 w-[100%] h-auto">
              <FaLocationDot className="text-[#452829] w-[1.5%] h-auto" />
              <div>Some coordinate....</div>
            </div>
          </div>
          <div className="flex flex-row items-center h-[35%] w-[100%]">
            <div className="flex flex-row justify-between items-center h-[100%] w-[100%]">
              <div className="flex justify-center items-center flex-shrink-0 w-[32%] h-[100%]">
                <div className="flex flex-col gap-2 justify-center items-start rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] p-3 h-[90%] w-full aspect-[3/4] bg-white">
                  <div className="flex justify-center items-center bg-yellow-500 rounded-full h-[20%] aspect-square">
                    <FaLocationDot className="text-[#452829] w-[45%] h-auto" />
                  </div>
                  <div className="flex items-left w-[95%] font-semibold text-[#452829]">
                    Alamat
                  </div>
                  <div className="flex w-[100%] text-sm text-gray-500">
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                    Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 w-[32%] h-[100%]">
                <div className="flex flex-col gap-2 justify-center items-start rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] p-3 h-[90%] w-full aspect-[3/4] bg-white">
                  <div className="flex justify-center items-center bg-yellow-500 rounded-full h-[20%] aspect-square">
                    <BsFillTelephoneFill className="text-[#452829] w-[45%] h-auto" />
                  </div>
                  <div className="flex items-left w-[95%] font-semibold text-[#452829]">
                    Kontak
                  </div>
                  <div className="flex w-[100%] text-sm text-gray-500">
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                    Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 w-[32%] h-[100%]">
                <div className="flex flex-col gap-2 justify-center items-start rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] p-3 h-[90%] w-full aspect-[3/4] bg-white">
                  <div className="flex justify-center items-center bg-yellow-500 rounded-full h-[20%] aspect-square">
                    <FaClock className="text-[#452829] w-[45%] h-auto" />
                  </div>
                  <div className="flex items-left w-[95%] font-semibold text-[#452829]">
                    Alamat
                  </div>
                  <div className="flex w-[100%] text-sm text-gray-500">
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                    Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-[100vh] bg-[#F5F2F2]">
        <div className="flex flex-col items-center h-[20%] w-[100%]">
          <div className="flex justify-center items-end h-[65%] w-[100%] text-[#452829] text-[clamp(12px,2vw,40px)]">
            <b>Kabar Desa</b>
          </div>
          <div className="flex bg-[#E9B63B] h-[2%] w-[8%] rounded-[5px]"></div>
          <div className="flex justify-center items-center h-[33%] w-[100%]">
            Berita terkini dan artikel menarik seputar perkembangan dan kegiatan
            di Desa Sejahtera
          </div>
        </div>
        <div className="flex flex-row h-[65%] w-[90%]">
          <div className="flex flex-row items-center h-[100%] w-[100%]">
            <div className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide w-[100%] h-[100%]">
              <div className="hidden start-snap"></div>
              {newsData.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center flex-shrink-0 w-[32%] h-[100%]"
                >
                  <div className="flex flex-col gap-2 justify-start items-center rounded-xl shadow-[0_3px_16px_rgba(0,0,0,0.12)] h-[90%] w-full aspect-[3/4] bg-white">
                    <div className="flex justify-center items-center w-[100%] h-[60%] rounded-t-xl border-1 border-yellow-400">
                      Image
                    </div>
                    <div className="flex flex-col justify-between gap-1 p-3 w-[100%] h-[40%]">
                      <div className="flex flex-row gap-3 items-left w-[100%] h-[15%]">
                        <div className="flex justify-center items-center bg-yellow-500 h-[100%] w-[35%] rounded-full font-semibold text-[#452829]">
                          {item.news_type}
                        </div>
                        <div className="flex text-gray-500">
                          {formatTanggal(item.date)}
                        </div>
                      </div>
                      <div className="flex font-semibold text-[#452829] text-[clamp(12px,1.3vw,20px)]">
                        {item.title}
                      </div>
                      <div className="flex text-gray-500 text-[clamp(12px,1.1 vw,15px)]">
                        {item.desc}
                      </div>
                      <div className="flex flex-row items-baseline gap-2">
                        <div className="text-[#452829] text-[clamp(12px,1.2vw,17px)] font-semibold">
                          Baca Selengkapnya
                        </div>
                        <FaArrowRight className="text-[#452829] translate-y-[2.3px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[15%] w-[100%]">
          <div className="flex justify-center items-center bg-[#AA2B1D] gap-3 rounded-xl h-[55%] w-[25%]">
            <div className="text-white">Lihat Semua Artikel</div>
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#3B060A] h-[100vh]">
        <div className="flex flex-col justify-center h-[43%] bg-[#B87C4C]">
          <div className="flex flex-col justify-center items-center text-center gap-3 h-[65%]">
            <div className="flex font-bold text-[clamp(12px,2.3vw,40px)] text-white">
              Kunjungi Desa Sejahtera
            </div>
            <div className="flex text-[clamp(12px,1.5vw,20px)] text-yellow-500">
              Lorem Ipsum DOlor SIt AMet adispiscis consectetur elit
            </div>
            <div className="flex flex-row items-center justify-between gap-3 h-[40%] w-[35%]">
              <div className="flex flex-row justify-center items-center h-[90%] w-[60%] gap-3 rounded-xl bg-yellow-500">
                <FaCalendarCheck className="text-brown-500" />
                <div className="text-brown-500 font-semibold">
                  Jadwalkan Kunjungan
                </div>
              </div>
              <div className="flex flex-row justify-center items-center h-[90%] w-[40%] border-white border-2 gap-3 rounded-xl bg-white/30">
                <BsFillTelephoneFill className="text-white" />
                <div className="text-white font-semibold">Hubungi Kami</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#D9CFC7]"></div>
        <div className="flex flex-col justify-center items-center h-[57%] w-[100%]">
          <div className="flex flex-col h-[100%] w-[90%]">
            <div className="flex flex-row h-[80%] w-[100%] pt-7">
              <div className="flex flex-col h-[100%] w-[25%]">
                <div className="flex flex-row h-[30%] w-[100%]">
                  <div className="flex justify-center items-center h-[100%] aspect-square">
                    <div className="flex justify-center items-center h-[70%] aspect-square bg-yellow-500 rounded-full">
                      <FaMountainSun className="h-[50%] w-auto" />
                    </div>
                  </div>
                  <div className="flex flex-col h-[100%] w-[70%]">
                    <div className="flex items-end font-semibold h-[50%] w-[100%] text-white text-[clamp(12px,1.5vw,30px)]">
                      Desa Sejahtera
                    </div>
                    <div className="flex h-[50%] w-[100%] text-yellow-500">
                      Kabupaten Makmur
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center text-[#D9CFC7] text-[clamp(10px,1vw,15px)] p-3">
                  Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                  Ipsum Dolor Sit Amet
                </div>
              </div>
              <div className="flex flex-col gap-7 h-[100%] w-[25%]">
                <div className="flex items-end text-white h-[15%] font-semibold text-[clamp(12px,1.5vw,30px)]">
                  Navigasi
                </div>
                <div className="flex flex-col gap-2 h-auto w-[100%]">
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Beranda
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Tentang Desa
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Pejabat Desa
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Produk UMKM
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 h-[100%] w-[25%]">
                <div className="flex items-end text-white h-[15%] font-semibold text-[clamp(12px,1.5vw,30px)]">
                  Layanan
                </div>
                <div className="flex flex-col gap-2 h-auto w-[100%]">
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Administrasi Desa
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Pengaduan Masyarakat
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Informasi Publik
                  </div>
                  <div className="flex text-[#D9CFC7] text-[clamp(10px,1.2vw,18px)]">
                    Perizinan
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[100%] w-[25%]">
                <div className="flex items-end text-white h-[15%] font-semibold text-[clamp(12px,1.5vw,30px)]">
                  Kontak Kami
                </div>
                <div className="flex items-center h-[85%]">
                  <div className="flex flex-col gap-3 h-[80%] w-[100%]">
                    <div className="flex flex-row items-center gap-3 h-[25%]">
                      <FaLocationDot className="h-[80%] aspect-square text-yellow-500" />
                      <div className="text-[#D9CFC7] text-[clamp(10px,1vw,15px)]">
                        Jl. Raya Sejahtera No. 123, Kab. Makmur
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 h-[25%]">
                      <BsFillTelephoneFill className="h-[80%] aspect-square text-yellow-500" />
                      <div className="text-[#D9CFC7] text-[clamp(10px,1vw,15px)]">
                        Jl. Raya Sejahtera No. 123, Kab. Makmur
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 h-[25%]">
                      <IoMdMail className="h-[80%] aspect-square text-yellow-500" />
                      <div className="text-[#D9CFC7] text-[clamp(10px,1vw,15px)]">
                        Jl. Raya Sejahtera No. 123, Kab. Makmur
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 h-[25%]">
                      <div className="flex justify-center items-center bg-white/30 rounded-full h-[100%] aspect-square">
                        <FaFacebookF className="h-[85%] text-white" />
                      </div>
                      <div className="flex justify-center items-center bg-white/30 rounded-full h-[100%] aspect-square">
                        <FaInstagram className="h-[85%] text-white" />
                      </div>
                      <div className="flex justify-center items-center bg-white/30 rounded-full h-[100%] aspect-square">
                        <FaYoutube className="h-[85%] text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-[100%] bg-white"></div>
            <div className="flex justify-center items-center h-[20%] w-[100%] text-white">
              © 2025 Desa Sejahtera. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
