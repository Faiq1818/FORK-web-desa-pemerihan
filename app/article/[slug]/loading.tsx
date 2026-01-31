export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 animate-pulse">
        <div className="mb-10 flex flex-col items-center justify-center gap-3">
          <div className="h-8 sm:h-10 w-3/4 bg-gray-200 rounded-md"></div>
          <div className="h-8 sm:h-10 w-1/2 bg-gray-200 rounded-md"></div>
        </div>

        <div className="mb-5 w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-xl border border-gray-100"></div>
        <div className="mb-8 h-5 w-40 bg-gray-200 rounded-md"></div>

        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>

          <div className="pt-4 space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
