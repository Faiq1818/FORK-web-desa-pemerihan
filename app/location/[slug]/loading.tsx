export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto md:max-w-6xl bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse">
        <div className="gap-8 p-6">
          {/* GALLERY SKELETON */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-xl mb-5"></div>
          <div className="justify-between mt-5">
            {/* TITLE SKELETON */}
            <div className="h-8 md:h-10 w-3/4 bg-gray-200 rounded mb-6"></div>
            <div className="flex flex-col md:flex-row gap-8 border-t border-gray-100 py-6">
              <div className="flex-1">
                <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>
                <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                {/* Contact Box Skeleton */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 h-32 w-full">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
                  <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-3 w-32 bg-gray-200 rounded mb-2"></div>
                {/* Time Box Skeleton */}
                <div className="h-14 w-full sm:w-2/3 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            {/* DESCRIPTION SKELETON */}
            <div className="pt-2">
              <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
