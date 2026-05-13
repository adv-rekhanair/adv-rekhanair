import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
        Advocate · Kerala High Court
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        {siteConfig.description}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Get in Touch
        </Link>
        <Link
          href="/practice-areas"
          className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-amber-700 hover:text-amber-700"
        >
          Practice Areas
        </Link>
      </div>
    </section>
  );
}
