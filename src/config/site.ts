export const siteConfig = {
  name: "Rekha Nair",
  title: "Rekha Nair — Advocate",
  description:
    "Experienced advocate based in Kerala, specialising in civil litigation, family law, property disputes, legal scrutiny, constitutional matters, cases under SARFAESE act and High Court appearances.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "adv.rekhanair@gmail.com",
  phone: "+91 98470 25510",
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
