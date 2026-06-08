import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  if (!siteConfig.social.whatsapp) return null;

  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.86L4 20l4.27-1.12a7.93 7.93 0 0 0 3.79.96h.01a7.94 7.94 0 0 0 7.93-7.94 7.9 7.9 0 0 0-2.4-5.58zm-5.55 12.21h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 0 1 5.6-10.14 6.55 6.55 0 0 1 4.66 1.93 6.6 6.6 0 0 1 1.93 4.66 6.6 6.6 0 0 1-6.59 6.64zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1-.13.2-.51.64-.62.77-.12.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98a5.93 5.93 0 0 1-1.1-1.36c-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.34.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.33-.45-.34-.12 0-.25-.01-.39-.01-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.4 2.14 3.4 3 .47.2.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.85.12-.94-.05-.09-.18-.14-.38-.24z" />
      </svg>
    </a>
  );
}
