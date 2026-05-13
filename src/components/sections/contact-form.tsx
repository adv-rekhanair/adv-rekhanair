"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import type { ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { success: false };

const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 px-6 py-8 text-center">
        <p className="text-sm font-semibold text-green-800">Enquiry received.</p>
        <p className="mt-1 text-sm text-green-700">
          Your message has been forwarded. You will be contacted at the earliest convenience.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-amber-700">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-700">
            Phone Number <span className="text-amber-700">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700">
          Email Address <span className="text-amber-700">*</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700">
          Enquiry / Requirement <span className="text-amber-700">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          required
          className={cn(inputClass, "resize-none")}
          placeholder="Briefly describe your legal matter or enquiry…"
        />
      </div>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending} className="w-full sm:w-auto">
          {pending ? "Sending…" : "Submit Enquiry"}
        </Button>
        <p className="text-xs text-gray-400">
          All communications are treated with strict professional confidentiality.
        </p>
      </div>
    </form>
  );
}
