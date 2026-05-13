"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6">
        {siteConfig.nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-700",
                pathname === item.href ? "text-amber-700" : "text-gray-600",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
