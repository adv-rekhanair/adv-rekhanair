import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold tracking-widest text-amber-700 uppercase">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">Page not found</h1>
      <p className="mt-4 text-base text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-800"
      >
        Return Home
      </Link>
    </div>
  );
}
