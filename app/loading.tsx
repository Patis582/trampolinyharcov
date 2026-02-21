export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-4 text-gray-600">Načítání...</p>
    </div>
  );
}
