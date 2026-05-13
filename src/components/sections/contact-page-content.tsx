"use client";

import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { FadeUp } from "@/components/ui/motion";
import { ContactForm } from "@/components/sections/contact-form";
import { useLanguage } from "@/contexts/language-context";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          {t.contactPage.label}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t.contactPage.heading}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {t.contactPage.subheading}
        </p>
      </FadeUp>

      <FadeUp delay={0.1} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            {t.contactPage.emailLabel}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 block text-sm font-medium break-all text-gray-900 hover:text-amber-700 dark:text-gray-100 dark:hover:text-amber-500"
          >
            {siteConfig.email}
          </a>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            {t.contactPage.phoneLabel}
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-2 block text-sm font-medium text-gray-900 hover:text-amber-700 dark:text-gray-100 dark:hover:text-amber-500"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`tel:${siteConfig.phone2}`}
            className="mt-1 block text-sm font-medium text-gray-900 hover:text-amber-700 dark:text-gray-100 dark:hover:text-amber-500"
          >
            {siteConfig.phone2}
          </a>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            {t.contactPage.chamberLabel}
          </p>
          <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            {siteConfig.address}
          </p>
        </Card>
        <Card>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            {t.contactPage.barCouncilLabel}
          </p>
          <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            {siteConfig.barCouncilNo}
          </p>
        </Card>
      </FadeUp>

      <FadeUp delay={0.2} className="mt-12">
        <Card variant="amber">
          <p className="text-sm text-amber-800 dark:text-amber-300">
            <strong>{t.contactPage.officeHoursLabel}:</strong> {t.contactPage.officeHoursText}
          </p>
        </Card>
      </FadeUp>

      <FadeUp
        delay={0.25}
        className="mt-10 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
      >
        <iframe
          src={siteConfig.mapEmbedUrl}
          width="100%"
          height="340"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office location on Google Maps"
          className="block"
        />
      </FadeUp>

      <FadeUp delay={0.3} className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {t.contactPage.sendEnquiry}
        </h2>
        <p className="mt-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
          {t.contactPage.sendEnquirySubheading}
        </p>
        <ContactForm />
      </FadeUp>
    </div>
  );
}
