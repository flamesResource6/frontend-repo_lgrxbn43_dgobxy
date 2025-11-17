import { CheckCircle2, Layers, ListChecks, FileText, SlidersHorizontal, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CheckCircle2,
    title: "Pre-highlights relevant parts",
    desc: "Surfaces the most important segments of each answer before you dive in.",
  },
  {
    icon: ListChecks,
    title: "Aligned with official criteria",
    desc: "Every suggestion maps clearly to your marking scheme and rubrics.",
  },
  {
    icon: FileText,
    title: "Draft justifications",
    desc: "Provides clear draft reasoning for each mark — always visible to the teacher.",
  },
  {
    icon: Layers,
    title: "Batch workflows",
    desc: "Designed for large sets of scripts with smart grouping and progress tracking.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full teacher control",
    desc: "Confirm, adjust, and finalise marks. You always make the final call.",
  },
  {
    icon: Users,
    title: "Moderation & consistency",
    desc: "Built-in tools for moderation and cross-marking alignment.",
  },
];

export default function Features() {
  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What Swiftmark does</h2>
          <p className="mt-3 text-gray-600">Clear capabilities designed for speed and trust.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 p-6 bg-white/70 backdrop-blur shadow-sm"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
