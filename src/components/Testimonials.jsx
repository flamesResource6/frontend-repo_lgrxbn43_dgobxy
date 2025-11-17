export default function Testimonials() {
  const quotes = [
    {
      quote: "We cut our marking time dramatically without losing control. The transparency is a game changer.",
      author: "Head of English, Northbridge High"
    },
    {
      quote: "Consistency across the department improved in weeks. Everyone can see the reasoning.",
      author: "Deputy Head, Langley School"
    },
    {
      quote: "I saved hours every week and felt more confident in moderation meetings.",
      author: "Teacher, City Sixth Form"
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
              <blockquote className="text-gray-800">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
