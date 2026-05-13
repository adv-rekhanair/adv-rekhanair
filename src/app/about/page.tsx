import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rekha Nair — her background, experience, and commitment to legal excellence in Kerala.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">About</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Rekha Nair</h1>
      <p className="mt-2 text-lg text-amber-700">Advocate — Kerala High Court</p>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-gray-600">
        <p>
          Rekha Nair is an advocate enrolled with the Bar Council of Kerala, practising primarily
          before the Kerala High Court and subordinate courts across the state. With over a decade
          of courtroom experience, she brings rigorous legal analysis and a client-first approach to
          every matter she handles.
        </p>
        <p>
          Her educational background in law, combined with sustained exposure to diverse legal
          disputes across civil, criminal, and family domains, has equipped her with a comprehensive
          understanding of both procedural law and substantive rights as applicable in Kerala.
        </p>
        <p>
          Rekha is committed to plain-language communication with clients, ensuring they fully
          understand the proceedings at every stage of litigation. She believes that an informed
          client is an empowered one.
        </p>
      </div>

      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">Qualifications</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>LL.B — [University Name], Kerala</li>
          <li>Enrolled Advocate — Bar Council of Kerala</li>
          <li>Member — Kerala High Court Advocates Association</li>
        </ul>
      </div>
    </div>
  );
}
