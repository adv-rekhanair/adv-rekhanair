"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "bci-disclaimer-accepted";

export function DisclaimerModal() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(STORAGE_KEY),
  );

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function handleAccept() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white shadow-2xl">
        <div className="flex-shrink-0 border-b border-gray-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">Disclaimer</h2>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5 text-sm leading-relaxed text-gray-700">
          <p>
            The rules of the Bar Council of India prohibit advocates from advertising or soliciting
            work in any manner. By proceeding, you acknowledge the following:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              This website has been created solely to provide general information about Rekha Nair,
              Advocate, and is not intended as an advertisement, solicitation, or inducement of any
              kind.
            </li>
            <li>
              Any information obtained from this website is entirely at your own volition. Access to
              this site does not create, and is not intended to create, an advocate–client
              relationship.
            </li>
            <li>
              The content herein is provided for informational purposes only and should not be
              construed as legal advice.
            </li>
            <li>
              There has been no solicitation, invitation, or inducement of any sort whatsoever from
              Rekha Nair or this website to create an advocate–client relationship.
            </li>
            <li>
              This website complies with Rule 36 of the Bar Council of India Rules, which permits
              advocates to maintain websites containing limited professional information only —
              namely name, contact details, qualifications, and areas of practice.
            </li>
          </ul>

          <p>
            By clicking <strong>&quot;I Agree &amp; Continue&quot;</strong>, you confirm that you
            are accessing this website of your own accord for informational purposes, and that you
            have read and understood this disclaimer.
          </p>
        </div>

        <div className="flex flex-shrink-0 justify-end border-t border-gray-200 px-6 py-4">
          <Button variant="dark" onClick={handleAccept} className="py-2.5">
            I Agree &amp; Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
