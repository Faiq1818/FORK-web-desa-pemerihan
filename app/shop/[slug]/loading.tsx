export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <div className="w-full">
            <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
            <div className="mt-4 flex gap-2">
              <div className="h-16 w-16 bg-gray-200 rounded"></div>
              <div className="h-16 w-16 bg-gray-200 rounded"></div>
              <div className="h-16 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Title Skeleton */}
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
            {/* Price Skeleton */}
            <div className="h-10 w-1/3 bg-gray-200 rounded mb-6"></div>
            {/* Contact Box Skeleton */}
            <div className="mt-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            {/* Description Section Skeleton */}
            <div className="mt-6 border-t border-gray-100 pt-6">
              <div className="h-5 w-20 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
