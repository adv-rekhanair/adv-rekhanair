export const siteConfig = {
  name: "Rekha Nair",
  title: "Rekha Nair — Advocate",
  description:
    "Experienced advocate based in Kerala, specialising in civil litigation, family law, property disputes, and High Court appearances.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "rekhanair@example.com",
  phone: "+91 98765 43210",
  address: "Kerala High Court, Ernakulam, Kerala — 682 031",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    linkedin: "",
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
