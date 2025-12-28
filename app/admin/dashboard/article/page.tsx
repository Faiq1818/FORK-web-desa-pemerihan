"use client";
import Link from "next/link";
import DashboardSidebar from "@/ui/dashboardSidebar";
import { PiArticleMedium } from "react-icons/pi";

export default function ArticleDashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-dvh bg-white">
      {/* Sidebar Component */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-8 overflow-x-hidden">
        <div className="font-bold text-xl mb-6">Article</div>

        {/* Action Button */}
        <div className="mb-6 flex">
          <Link prefetch={false} href="/admin/dashboard/article/addarticle">
            <span className="flex items-center gap-2 rounded-2xl py-2 px-4 bg-blue-50 text-blue-700 font-bold cursor-pointer hover:bg-blue-100 text-sm transition-colors">
              <PiArticleMedium className="text-xl"/>
              Tulis Artikel Baru
            </span>
          </Link>
        </div>

        {/* Article List Item */}
        <div className="flex flex-col gap-4">
          <div className="border rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
            <p className="font-medium text-gray-700 truncate max-w-md">
              Artikel 1 sldfkjasf;lsdkajfasd;l
            </p>

            <div className="flex gap-3 text-sm font-medium">
              <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
