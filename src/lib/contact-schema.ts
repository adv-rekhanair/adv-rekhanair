import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^[+]?[\d\s\-() ]{7,20}$/, "Please enter a valid phone number."),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
