export default function Transparency() {
  const points = [
    "Every mark includes visible reasoning",
    "No hidden logic — clear alignment to criteria",
    "Teacher override on every suggestion",
    "Change log and revision trail for all adjustments",
    "Fully auditable end-to-end process",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="transparency">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Transparency, by design</h2>
            <p className="mt-4 text-gray-600 max-w-xl">Trust is central to Swiftmark. Every suggestion comes with clear, human-readable reasoning and a transparent link to criteria.</p>
            <ul className="mt-8 space-y-3 text-gray-700">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="relative rounded-2xl border border-gray-100 bg-white shadow-lg p-6">
              <div className="text-sm text-gray-500">Reasoning panel</div>
              <div className="mt-3 space-y-2">
                <div className="h-4 w-11/12 bg-gray-100 rounded" />
                <div className="h-4 w-10/12 bg-gray-100 rounded" />
                <div className="h-4 w-8/12 bg-gray-100 rounded" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="h-24 rounded-xl bg-gray-50 border border-gray-100" />
                <div className="h-24 rounded-xl bg-gray-50 border border-gray-100" />
              </div>
              <p className="mt-6 text-sm text-gray-500">A simple, isolated look at the transparency view.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
