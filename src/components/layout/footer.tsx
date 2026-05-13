import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-gray-900">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-amber-700">Advocate</p>
            <p className="mt-3 text-sm text-gray-500">{siteConfig.address}</p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-amber-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-700">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber-700">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
