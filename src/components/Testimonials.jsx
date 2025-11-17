import { motion } from "framer-motion";

export default function Testimonials() {
  const quotes = [
    {
      quote:
        "We cut our marking time dramatically without losing control. The transparency is a game changer.",
      author: "Head of English, Northbridge High",
    },
    {
      quote:
        "Consistency across the department improved in weeks. Everyone can see the reasoning.",
      author: "Deputy Head, Langley School",
    },
    {
      quote:
        "I saved hours every week and felt more confident in moderation meetings.",
      author: "Teacher, City Sixth Form",
    },
  ];

  return (
    <section className="py-20" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-sky-50/70 to-transparent" />
              <blockquote className="relative text-gray-800">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">— {q.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
