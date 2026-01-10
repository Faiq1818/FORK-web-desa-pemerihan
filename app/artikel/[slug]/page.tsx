'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Tag, Facebook, Share2 } from 'lucide-react';
import { articles } from '@/libs/data';

export default function SingleArtikelPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/artikel" className="text-[#2D5A27] hover:underline">
            ← Kembali ke Daftar Artikel
          </Link>
        </div>
      </main>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Share handlers
  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const text = `${article.title}\n\n${article.excerpt}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
  };

  const handleFacebookShare = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link berhasil disalin!');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section - Full Width Immersive */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-[#2D5A27] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-[family-name:var(--font-montserrat)]">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm md:text-base">
                  {new Date(article.date).toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm md:text-base">{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Bagikan:</span>
            <button 
              onClick={handleWhatsAppShare}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>
            <button 
              onClick={handleFacebookShare}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Copy Link
            </button>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-[family-name:var(--font-montserrat)]
              prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-700 prose-ul:leading-relaxed
              prose-li:mb-2
              prose-strong:text-gray-900
              prose-a:text-[#2D5A27] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-700">Tags:</span>
            {article.tags.map((tag, index) => (
              <Link 
                href="#" 
                key={index}
                className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 hover:bg-[#2D5A27] hover:text-white px-3 py-1.5 rounded-full transition-colors"
              >
                <Tag className="w-3.5 h-3.5" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
                Artikel Terkait
              </h2>
              <p className="text-lg text-gray-600">
                Artikel lainnya yang mungkin menarik untuk Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  href={`/artikel/${relatedArticle.slug}`} 
                  key={relatedArticle.id}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#2D5A27] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(relatedArticle.date).toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D5A27] transition-colors line-clamp-2 font-[family-name:var(--font-montserrat)]">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-2 flex-1">
                        {relatedArticle.excerpt}
                      </p>

                      <span className="inline-flex items-center text-[#2D5A27] font-medium group-hover:gap-2 transition-all">
                        Baca Artikel
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to Articles Button */}
            <div className="text-center mt-12">
              <Link 
                href="/artikel"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5A27] hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
