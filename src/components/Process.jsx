export default function Process() {
  const steps = [
    { title: "Upload scripts", desc: "Drop in PDFs or text; Swiftmark handles the rest." },
    { title: "Swiftmark prepares", desc: "Organises, pre-highlights, and aligns to criteria." },
    { title: "Teacher reviews", desc: "Confirm, adjust, and finalise with full transparency." },
    { title: "Export marks", desc: "Export results and feedback in your required format." },
  ];

  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">How it works</h2>
        <ol className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex-none h-8 w-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-medium">{i + 1}</div>
              <div>
                <div className="font-medium text-gray-900">{s.title}</div>
                <div className="text-gray-600 text-sm">{s.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
