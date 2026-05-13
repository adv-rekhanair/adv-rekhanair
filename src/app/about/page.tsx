import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { FadeUp } from "@/components/ui/motion";
import { empanelments } from "@/data/empanelments";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background and qualifications of Rekha Nair, Advocate, enrolled with the Bar Council of Kerala.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">About</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Rekha Nair</h1>
        <p className="mt-2 text-lg text-amber-700">Advocate — Kerala High Court</p>
      </FadeUp>

      <FadeUp delay={0.1} className="mt-10 space-y-5 text-base leading-relaxed text-gray-600">
        <p>
          Rekha Nair is an advocate enrolled with the Bar Council of Kerala, practising primarily
          before the Kerala High Court and subordinate courts across the state. She has been in
          practice for over a decade, with experience across civil, criminal, and family law
          matters.
        </p>
        <p>
          Her educational background in law, combined with sustained exposure to diverse legal
          disputes across civil, criminal, and family domains, has given her familiarity with both
          procedural law and substantive rights as applicable in Kerala.
        </p>
        <p>
          She practices before the Kerala High Court, District Courts, Family Courts, Sessions
          Courts, and Consumer Dispute Redressal Commissions in the state.
        </p>
      </FadeUp>

      <FadeUp delay={0.2} className="mt-12">
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900">Qualifications</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>LL.B — [University Name], Kerala</li>
            <li>Enrolled Advocate — Bar Council of Kerala ({siteConfig.barCouncilNo})</li>
            <li>Member — Kerala High Court Advocates Association</li>
          </ul>
        </Card>
      </FadeUp>

      <FadeUp delay={0.3} className="mt-8">
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900">Panel Appointments</h2>
          <p className="mt-1 text-sm text-gray-500">
            Empanelled as legal counsel by the following financial institutions.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {empanelments.map((item) => (
              <div
                key={item.name}
                className="rounded-md border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-gray-400 uppercase">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </FadeUp>
    </div>
  );
}
