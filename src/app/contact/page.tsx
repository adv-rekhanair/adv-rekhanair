import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Rekha Nair, Advocate, enrolled with the Bar Council of Kerala.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">Contact</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
        Contact details are provided below for general enquiries.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
          { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
          { label: "Chamber", value: siteConfig.address, href: undefined },
        ].map((item) => (
          <Card key={item.label}>
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
          </Card>
        ))}
      </div>

      <Card variant="amber" className="mt-12">
        <p className="text-sm text-amber-800">
          <strong>Office Hours:</strong> Monday – Saturday, 10:00 AM – 5:30 PM IST (excluding court
          holidays).
        </p>
      </Card>
    </div>
  );
}
