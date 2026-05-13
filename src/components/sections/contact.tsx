import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          Get in Touch
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Schedule a Consultation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
          Reach out by email or phone for an initial consultation. All enquiries are treated with
          strict confidentiality.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-800 sm:w-auto"
          >
            Email Us
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-amber-700 hover:text-amber-700 sm:w-auto"
          >
            {siteConfig.phone}
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">{siteConfig.address}</p>
      </div>
    </section>
  );
}
