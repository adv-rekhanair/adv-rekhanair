import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./navigation";
import { BalanceIcon } from "@/components/ui/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BalanceIcon className="h-8 w-8 shrink-0 text-amber-700" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium tracking-widest text-amber-700 uppercase">
              Advocate
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
