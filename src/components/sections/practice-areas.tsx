import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";

export function PracticeAreasSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practice Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Areas of legal practice before courts and tribunals in Kerala.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <li
              key={area.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-label={area.title}>
                {area.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{area.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center text-sm font-semibold text-amber-700 hover:underline"
          >
            View all practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
