"use client";
import { useState, useEffect } from "react";
import { getShopItemImages } from "@/helpers/presignedDownloadHelper";
import formatRupiah from "@/helpers/rupiahFormat";
import Link from "next/link";

interface ShopItem {
  name: string;
  price: number;
  slug: string;
  contact: string;
  owner: string;
  description: string;
  imagesUrl: string[];
  createdAt: string;
}

export default function TopProducts() {
  const [products, setProducts] = useState<ShopItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [imgDownloadArr, setImgDownloadArr] = useState<(string | null)[]>([]);

  // Fetch presigned URLs for images
  useEffect(() => {
    if (imgArr.length === 0) return;

    const getPresigned = async () => {
      const url = await getShopItemImages(imgArr);
      setImgDownloadArr(url);
    };
    getPresigned();
  }, [imgArr]);

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/shopitem/client?page=1&limit=4");
        const result = await response.json();

        if (result.success && result.data) {
          const collectedImages = result.data.map(
            (product: ShopItem) => product.imagesUrl[0],
          );
          setImgArr(collectedImages);
          setProducts(result.data);
          console.log(result.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Produk Unggulan
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Produk-produk terbaik dari Desa Pemerihan
        </p>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-r-transparent"></div>
            <p className="text-gray-600 mt-4">Memuat produk...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Belum ada produk tersedia</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white transition-all duration-300 overflow-hidden flex flex-col"
              >
                <Link href={`/shop/${product.slug}`}>
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl bg-gray-100 overflow-hidden">
                    <img
                      src={imgDownloadArr[index] || "/images/placeholder.jpg"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-100"
                    />
                  </div>

                  {/* Konten */}
                  <div className="pb-4 pt-1 flex flex-col flex-grow">
                    <p
                      className="font-medium text-gray-600 truncate leading-tight"
                      title={product.name}
                    >
                      {product.name}
                    </p>
                    <p className="font-bold leading-tight">
                      {formatRupiah(product.price)}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2 flex-grow mt-1">
                      {product.owner}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/shop">
            <button className="cursor-pointer bg-amber-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-700 transition">
              Lihat Semua Produk →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
