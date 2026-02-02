"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getImages } from "@/helpers/presignedDownloadHelper";
import formatRupiah from "@/helpers/rupiahFormat";

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

  // Fetch presigned image URLs
  useEffect(() => {
    if (imgArr.length === 0) return;

    const getPresigned = async () => {
      const urls = await getImages(imgArr);
      setImgDownloadArr(urls);
    };

    getPresigned();
  }, [imgArr]);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/shopitem/client?page=1&limit=4");
        const result = await response.json();

        if (result.success && result.data) {
          setProducts(result.data);
          setImgArr(result.data.map((item: ShopItem) => item.imagesUrl[0]));
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Produk Khas dan UMKM
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Produk terbaik hasil karya masyarakat Desa Pemerihan dengan kualitas
            dan nilai lokal
          </p>
        </div>

        {/* CONTENT */}
        {isLoading ? (
          <ProductSkeleton />
        ) : products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            Belum ada produk tersedia
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-sm transition-all duration-100"
              >
                <Link href={`/shop/${product.slug}`}>
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={imgDownloadArr[index] || "/images/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 flex flex-col">
                    <h3
                      className="font-semibold text-gray-800 truncate"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    <p className="text-amber-600 font-bold">
                      {formatRupiah(product.price)}
                    </p>

                    <p className="text-sm text-gray-500 line-clamp-2">
                      Oleh {product.owner}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* BUTTON */}
        <div className="text-center mt-14">
          <Link href="/shop">
            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl">
              Lihat Semua Produk
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow">
          <div className="aspect-square bg-gray-200" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
