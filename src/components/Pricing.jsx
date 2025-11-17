import { motion } from "framer-motion";

export default function Pricing() {
  const tiers = [
    {
      name: "Teacher",
      price: "$19/mo",
      cta: "Start",
      accent: "from-sky-500 to-indigo-500",
      features: ["All core features", "Transparency tools", "Email support"],
    },
    {
      name: "Department",
      price: "$199/mo",
      cta: "Choose",
      accent: "from-indigo-500 to-purple-500",
      features: ["Up to 25 teachers", "Moderation & consistency", "Priority support"],
    },
    {
      name: "School",
      price: "Contact",
      cta: "Talk to us",
      accent: "from-amber-500 to-pink-500",
      features: ["Unlimited", "Custom integrations", "Dedicated success"],
    },
  ];

  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Pricing</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-8 shadow-sm"
            >
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${t.accent} opacity-10`} />

              <div className="text-lg font-medium text-gray-900">{t.name}</div>
              <div className="mt-3 text-3xl font-semibold text-gray-900">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />{f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm hover:bg-black transition">{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
