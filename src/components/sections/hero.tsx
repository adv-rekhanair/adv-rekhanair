import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-14 text-center sm:min-h-[80vh] sm:px-6 sm:py-20 lg:px-8">
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
        <Link href="/contact" className={buttonVariants("primary")}>
          Get in Touch
        </Link>
        <Link href="/practice-areas" className={buttonVariants("secondary")}>
          Practice Areas
        </Link>
      </div>
    </section>
  );
}
