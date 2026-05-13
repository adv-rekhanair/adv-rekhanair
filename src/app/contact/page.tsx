import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rekha Nair Advocate for legal consultations in Kerala. All enquiries are strictly confidential.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">Contact</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
        For initial consultations or general enquiries, reach out through any of the channels below.
        All communications are treated with strict professional confidentiality.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
          { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
          { label: "Chamber", value: siteConfig.address, href: undefined },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-2 block text-sm font-medium text-gray-900 hover:text-amber-700"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-sm font-medium text-gray-900">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-amber-100 bg-amber-50 p-6">
        <p className="text-sm text-amber-800">
          <strong>Office Hours:</strong> Monday – Saturday, 10:00 AM – 5:30 PM IST (excluding court
          holidays).
        </p>
      </div>
    </div>
  );
}
