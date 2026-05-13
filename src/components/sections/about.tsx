import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">About</p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Rekha Nair — Advocate
        </h2>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            Rekha Nair is an advocate enrolled with the Bar Council of Kerala, practising primarily
            before the Kerala High Court and subordinate courts across the state. She has been in
            practice for over a decade, with experience across civil, criminal, and family law
            matters.
          </p>
          <p>
            Her practice spans civil litigation, family and matrimonial law, property disputes, and
            criminal defence — with a particular focus on matters that require sustained High Court
            engagement.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {[
            { label: "Years of Practice", value: "10+" },
            { label: "Courts", value: "High Court & Subordinate" },
            { label: "Practice Areas", value: "6" },
          ].map((stat) => (
            <Card key={stat.label} variant="white">
              <dt className="text-sm text-gray-500">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-amber-700">{stat.value}</dd>
            </Card>
          ))}
        </dl>
      </div>
    </section>
  );
}
