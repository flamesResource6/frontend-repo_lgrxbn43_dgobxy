import { ArrowRight, School, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft spotlight */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-sky-800/90 bg-white/70 border border-sky-100 px-3 py-1 rounded-full shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-medium">Swiftmark</span>
              <span className="text-sky-400">•</span>
              <span>Faster marking, visible reasoning</span>
            </div>
            
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Mark 80% faster without losing control.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Swiftmark highlights the right parts, drafts reasoning you can see, and lets you stay in charge of every mark.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="group inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-black transition">
                Try Swiftmark
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/60 backdrop-blur px-6 py-3 text-base font-medium hover:bg-white transition">
                <School className="mr-2 h-4 w-4" /> For Schools
              </a>
              <button className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition">
                <Play className="h-4 w-4" /> Watch 60s demo
              </button>
            </div>
          </div>

          {/* visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-10 -left-10 h-40 w-40 bg-sky-200/60 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-indigo-200/60 rounded-full blur-3xl" />

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="mt-3 h-6 w-3/5 bg-gray-100 rounded" />
                    <div className="mt-2 h-6 w-2/5 bg-gray-100 rounded" />
                  </div>
                  <div className="h-16 w-16 rounded-md bg-gradient-to-br from-sky-400 to-indigo-400 shadow-inner" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-11/12 bg-gray-100 rounded" />
                  <div className="h-4 w-10/12 bg-gray-100 rounded" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-xl bg-white border border-gray-100 shadow-sm" />
                  <div className="h-24 rounded-xl bg-white border border-gray-100 shadow-sm" />
                  <div className="h-24 rounded-xl bg-white border border-gray-100 shadow-sm" />
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  A calmer UI that keeps the reasoning front-and-center.
                </p>
              </motion.div>

              {/* floating chips */}
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.25}} className="absolute -right-8 -top-6">
                <div className="rounded-full bg-white/80 backdrop-blur border border-gray-100 shadow px-4 py-2 text-xs text-gray-700">Aligned to criteria</div>
              </motion.div>
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.35}} className="absolute -left-6 bottom-6">
                <div className="rounded-full bg-white/80 backdrop-blur border border-gray-100 shadow px-4 py-2 text-xs text-gray-700">Visible reasoning</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
