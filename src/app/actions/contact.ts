"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
}

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  const raw = {
    name: ((formData.get("name") as string) ?? "").trim(),
    email: ((formData.get("email") as string) ?? "").trim(),
    phone: ((formData.get("phone") as string) ?? "").trim(),
    message: ((formData.get("message") as string) ?? "").trim(),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error).fieldErrors;
    return {
      success: false,
      fieldErrors: {
        name: flat.name?.[0],
        email: flat.email?.[0],
        phone: flat.phone?.[0],
        message: flat.message?.[0],
      },
    };
  }

  const { name, email, phone, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL ?? "adv.rekhanair@gmail.com";

  try {
    const { error } = await resend.emails.send({
      from: "Enquiry Form <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#111;border-collapse:collapse;width:100%;max-width:560px">
          <tr><td colspan="2" style="padding:0 0 16px"><strong style="font-size:16px">New Enquiry — rekhanairadvocate.com</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;white-space:nowrap">Name</td><td style="padding:6px 0">${name}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;white-space:nowrap">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;white-space:nowrap">Phone</td><td style="padding:6px 0">${phone}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 4px;color:#555">Message</td></tr>
          <tr><td colspan="2" style="padding:0;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    if (error) {
      return {
        success: false,
        error: "Unable to send your enquiry. Please try again or email directly.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to send your enquiry. Please try again or email directly.",
    };
  }
}
