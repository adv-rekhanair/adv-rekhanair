export const siteConfig = {
  name: "Rekha Nair",
  title: "Rekha Nair — Advocate",
  description:
    "Experienced advocate based in Kerala, specialising in Civil Litigation, Family Law, Property Disputes, Legal Scrutiny, Constitutional Matters, Cases under SARFAESI Act and High Court Appearances.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "adv.rekhanair@gmail.com",
  phone: "+91 98470 25510",
  phone2: "+91 55555 55555",
  address: "Kerala High Court, Ernakulam, Kerala — 682 031",
  barCouncilNo: "KER/XXXX/XXXX",
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
