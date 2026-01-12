"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { getShopItemImages } from "@/libs/presignedDownloadHelper";

export default function Page() {
  // const [isLoading, setIsLoading] = useState(true);
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [imgDownloadArr, setImgDownloadArr] = useState<(string | null)[]>([]);
  const [shopItems, setShopItems] = useState<any>([]);

  useEffect(() => {
    getShopData();
  }, []);

  useEffect(() => {
    if (imgArr.length === 0) return;

    const getPresigned = async () => {
      const url = await getShopItemImages(imgArr);
      setImgDownloadArr(url);
    };
    getPresigned();
  }, [imgArr]);

  console.log("shopitem: ", shopItems);
  console.log("imgArr: ", imgArr);
  console.log("imgDownloadArr: ", imgDownloadArr);

  const getShopData = async () => {
    // setIsLoading(true);
    const token = localStorage.getItem("auth");

    try {
      const res = await fetch(
        "http://localhost:3000/api/article/client?page=1&limit=10",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gagal mengambil data");
      }

      // mapping ke seluruh item image url untuk dibuatkan presigneddownload
      const collectedImages = data.data.map(
        (item: any) => item.featuredImageUrl,
      );
      setImgArr(collectedImages);

      // getShopItemImages(data.data.)
      setShopItems(data.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50/30">
      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Article Feed */}
          <div className="space-y-6">
            {shopItems.map((article: any, i: any) => (
              <Link
                href={`/article/${article.slug}`}
                key={article.slug}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                    {/* Thumbnail */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={imgDownloadArr[i]!}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2D5A27] transition-colors line-clamp-2 font-[family-name:var(--font-montserrat)]">
                          {article.title}
                        </h2>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(article.createdAt).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4 line-clamp-2">
                          {article.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
