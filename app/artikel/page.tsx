'use client';

import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';
import { articles, popularArticles, archiveMonths } from '@/libs/data';

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50/30">
      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            
            {/* Main Article Feed */}
            <div className="space-y-6">
              {articles.map((article) => (
                <Link 
                  href={`/artikel/${article.slug}`} 
                  key={article.id}
                  className="block group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                      
                      {/* Thumbnail */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-[#2D5A27] text-white px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                        </div>
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
                              <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Tags & Read More */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 3).map((tag, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center text-[#2D5A27] font-medium group-hover:gap-2 transition-all">
                            Baca Selengkapnya
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              
              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-[#2D5A27] font-[family-name:var(--font-montserrat)]">
                  Artikel Populer
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <Link 
                      href={`/artikel/${article.slug}`} 
                      key={article.id}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#2D5A27] transition-colors line-clamp-2 mb-1">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                      {index < popularArticles.length - 1 && (
                        <div className="border-b border-gray-200 mt-4"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Archive */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-[#2D5A27] font-[family-name:var(--font-montserrat)]">
                  Arsip
                </h3>
                <div className="space-y-2">
                  {archiveMonths.map((archive, index) => (
                    <Link 
                      href="#" 
                      key={index}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-[#2D5A27] font-medium">
                        {archive.month} {archive.year}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 group-hover:bg-green-100 px-2 py-1 rounded">
                        {archive.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gradient-to-br from-[#2D5A27] to-green-700 text-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-white/30 font-[family-name:var(--font-montserrat)]">
                  Kategori
                </h3>
                <div className="space-y-2">
                  {['UMKM', 'Pembangunan', 'Kegiatan Desa', 'Pemberdayaan', 'Wisata'].map((category, index) => (
                    <Link 
                      href="#" 
                      key={index}
                      className="block py-2 px-3 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
