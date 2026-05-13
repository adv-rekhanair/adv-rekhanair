import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { FadeUp } from "@/components/ui/motion";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Rekha Nair, Advocate, enrolled with the Bar Council of Kerala.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
          Contact details are provided below for general enquiries.
        </p>
      </FadeUp>

      <FadeUp delay={0.1} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 block text-sm font-medium break-all text-gray-900 hover:text-amber-700"
          >
            {siteConfig.email}
          </a>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Phone</p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-2 block text-sm font-medium text-gray-900 hover:text-amber-700"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`tel:${siteConfig.phone2}`}
            className="mt-1 block text-sm font-medium text-gray-900 hover:text-amber-700"
          >
            {siteConfig.phone2}
          </a>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Chamber</p>
          <p className="mt-2 text-sm font-medium text-gray-900">{siteConfig.address}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Bar Council No.
          </p>
          <p className="mt-2 text-sm font-medium text-gray-900">{siteConfig.barCouncilNo}</p>
        </Card>
      </FadeUp>

      <FadeUp delay={0.2} className="mt-12">
        <Card variant="amber">
          <p className="text-sm text-amber-800">
            <strong>Office Hours:</strong> Monday – Saturday, 10:00 AM – 5:30 PM IST (excluding
            court holidays).
          </p>
        </Card>
      </FadeUp>

      <FadeUp delay={0.3} className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Send an Enquiry</h2>
        <p className="mt-2 mb-6 text-sm text-gray-600">
          Fill in the form below and your message will be forwarded directly.
        </p>
        <ContactForm />
      </FadeUp>
    </div>
  );
}
