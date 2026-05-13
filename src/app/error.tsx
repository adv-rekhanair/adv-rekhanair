"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold tracking-widest text-amber-700 uppercase">Error</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">Something went wrong</h1>
      <p className="mt-4 text-base text-gray-600">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className={buttonVariants("primary")}>
          Try again
        </button>
        <Link href="/" className={buttonVariants("secondary")}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
