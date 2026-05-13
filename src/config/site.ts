export const siteConfig = {
  name: "Rekha Nair",
  title: "Rekha Nair — Advocate",
  description:
    "Experienced advocate based in Kerala, specialising in Civil Litigation, Family Law, Property Disputes, Legal Scrutiny, Constitutional Matters, Cases under SARFAESI Act and High Court Appearances.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "adv.rekhanair@gmail.com",
  phone: "+91 98470 25510",
  phone2: "+91 96331 89801",
  address:
    "Room No. 13 & 14, Ground Floor, Empire Building, Opposite Central Police Station, Near High Court, Kochi, Kerala — 682 018",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ground+Floor,+Advocate+Rekha+Nair,+Empire+Building,+Room+No:+13,14,+opposite+Central+Police+Station,+Kochi,+Kerala+682018&output=embed",
  barCouncilNo: "KER/XXXX/XXXX",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    linkedin: "",
    whatsapp: "https://wa.me/919847025510",
  },
} as const;

export type SiteConfig = typeof siteConfig;
