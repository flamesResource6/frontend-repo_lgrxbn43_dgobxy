import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "Upload scripts", desc: "Drop in PDFs or text; Swiftmark handles the rest." },
    { title: "Swiftmark prepares", desc: "Organises, pre-highlights, and aligns to criteria." },
    { title: "Teacher reviews", desc: "Confirm, adjust, and finalise with full transparency." },
    { title: "Export marks", desc: "Export results and feedback in your required format." },
  ];

  return (
    <section className="py-20" id="process">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">How it works</h2>
        <ol className="mt-12 space-y-6">
          {steps.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-4"
            >
              <div className="flex-none h-8 w-8 rounded-full bg-gradient-to-br from-sky-600 to-indigo-600 text-white flex items-center justify-center font-medium shadow">
                {i + 1}
              </div>
              <div>
                <div className="font-medium text-gray-900">{s.title}</div>
                <div className="text-gray-600 text-sm">{s.desc}</div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
