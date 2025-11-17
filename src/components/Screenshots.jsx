import { motion } from "framer-motion";

export default function Screenshots() {
  return (
    <section className="py-20" id="screens">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Interface preview</h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md"
            >
              <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(65%_65%_at_50%_0%,#f1f5f9,transparent_60%)]" />
              <div className="h-56 rounded-xl bg-gray-50 border border-dashed border-gray-200" />
              <p className="mt-4 text-sm text-gray-600">UI panel {i} — clarity, highlighted text, criteria on the side.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
