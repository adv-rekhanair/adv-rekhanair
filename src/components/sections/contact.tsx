import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          Get in Touch
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Information
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
          Contact details are provided below for general enquiries. All communications are treated
          with strict professional confidentiality.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className={buttonVariants(
              "primary",
              "flex w-full items-center justify-center gap-2 sm:w-auto",
            )}
          >
            Email
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className={buttonVariants(
              "secondary",
              "flex w-full items-center justify-center gap-2 sm:w-auto",
            )}
          >
            {siteConfig.phone}
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">{siteConfig.address}</p>
      </div>
    </section>
  );
}
