import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 shrink-0 text-amber-700"
            aria-hidden="true"
          >
            {/* Balance beam */}
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="6" x2="21" y2="6" />
            {/* Left pan cables */}
            <line x1="3" y1="6" x2="5" y2="13" />
            <line x1="3" y1="6" x2="1" y2="13" />
            {/* Left pan */}
            <path d="M1 13 Q3 16 5 13" />
            {/* Right pan cables */}
            <line x1="21" y1="6" x2="23" y2="13" />
            <line x1="21" y1="6" x2="19" y2="13" />
            {/* Right pan */}
            <path d="M19 13 Q21 16 23 13" />
            {/* Base */}
            <line x1="9" y1="21" x2="15" y2="21" />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-gray-900">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium tracking-widest text-amber-700 uppercase">
              Advocate
            </span>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
