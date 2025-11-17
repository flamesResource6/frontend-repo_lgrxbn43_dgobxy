export default function Screenshots() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="screens">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Interface preview</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].slice(0,3).map((i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 rounded-xl bg-gray-50 border border-dashed border-gray-200" />
              <p className="mt-4 text-sm text-gray-600">UI panel {i} — clarity, highlighted text, criteria on the side.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
