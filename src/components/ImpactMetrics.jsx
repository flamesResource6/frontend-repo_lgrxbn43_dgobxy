export default function ImpactMetrics() {
  const stats = [
    { value: "80%", label: "average reduction in marking time" },
    { value: "100+", label: "hours saved per teacher annually" },
    { value: "Consistent", label: "department-level standards" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900">
                {s.value}
              </div>
              <div className="mt-3 text-sm sm:text-base text-gray-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
