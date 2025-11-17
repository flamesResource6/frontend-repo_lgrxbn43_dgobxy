export default function Pricing() {
  const tiers = [
    { name: "Teacher", price: "$19/mo", features: ["All core features", "Transparency tools", "Email support"] },
    { name: "Department", price: "$199/mo", features: ["Up to 25 teachers", "Moderation & consistency", "Priority support"] },
    { name: "School", price: "Contact", features: ["Unlimited", "Custom integrations", "Dedicated success"] },
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="text-lg font-medium text-gray-900">{t.name}</div>
              <div className="mt-3 text-3xl font-semibold text-gray-900">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />{f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-full bg-gray-900 text-white px-5 py-2 text-sm hover:bg-black transition">Choose</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
