export function AboutSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">About</p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Dedicated to Justice, Grounded in Kerala Law
        </h2>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            Rekha Nair is an advocate enrolled with the Bar Council of Kerala, practising primarily
            before the Kerala High Court and subordinate courts across the state. With over a decade
            of courtroom experience, she brings rigorous legal analysis and a client-first approach
            to every matter she handles.
          </p>
          <p>
            Her practice spans civil litigation, family and matrimonial law, property disputes, and
            criminal defence — with a particular focus on matters that require sustained High Court
            engagement. She is committed to plain-language communication with clients, ensuring they
            fully understand the proceedings at every stage.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {[
            { label: "Years of Practice", value: "10+" },
            { label: "Cases Handled", value: "500+" },
            { label: "Practice Areas", value: "6" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-gray-200 bg-white p-6">
              <dt className="text-sm text-gray-500">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-amber-700">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
