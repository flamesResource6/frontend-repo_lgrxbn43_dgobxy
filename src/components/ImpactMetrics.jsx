import { motion } from "framer-motion";

export default function ImpactMetrics() {
  const stats = [
    { value: "80%", label: "average reduction in marking time" },
    { value: "100+", label: "hours saved per teacher annually" },
    { value: "Consistent", label: "department-level standards" },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#e0f2fe,transparent_60%)]" />
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900">
                {s.value}
              </div>
              <div className="mt-3 text-sm sm:text-base text-gray-600">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
