"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

const inputBase =
  "mt-1 block w-full rounded-md border px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-1 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-600";

function inputClass(hasError: boolean) {
  return cn(
    inputBase,
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-700"
      : "border-gray-300 focus:border-amber-700 focus:ring-amber-700 dark:border-gray-700 dark:focus:border-amber-600 dark:focus:ring-amber-600",
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);

    const formData = new FormData();
    (Object.keys(data) as (keyof ContactFormData)[]).forEach((k) => formData.append(k, data[k]));

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitted(true);
      return;
    }

    if (result.fieldErrors) {
      (Object.entries(result.fieldErrors) as [keyof ContactFormData, string][]).forEach(
        ([field, message]) => {
          if (message) setError(field, { message });
        },
      );
      return;
    }

    setServerError(result.error ?? "An unexpected error occurred. Please try again.");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-lg border border-green-200 bg-green-50 px-6 py-8 text-center dark:border-green-900 dark:bg-green-950"
      >
        <p className="text-sm font-semibold text-green-800 dark:text-green-300">
          {t.contactForm.successTitle}
        </p>
        <p className="mt-1 text-sm text-green-700 dark:text-green-400">
          {t.contactForm.successBody}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.contactForm.name} <span className="text-amber-700">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder={t.contactForm.namePlaceholder}
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.contactForm.phone} <span className="text-amber-700">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.contactForm.phonePlaceholder}
            className={inputClass(!!errors.phone)}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.contactForm.email} <span className="text-amber-700">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          placeholder={t.contactForm.emailPlaceholder}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.contactForm.message} <span className="text-amber-700">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder={t.contactForm.messagePlaceholder}
          className={cn(inputClass(!!errors.message), "resize-none")}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {serverError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950">
          <p className="text-sm text-red-700 dark:text-red-400">{serverError}</p>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
        </Button>
        <p className="text-xs text-gray-400">{t.contactForm.confidentiality}</p>
      </div>
    </form>
  );
}
