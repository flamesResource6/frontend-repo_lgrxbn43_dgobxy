import { ArrowRight, School } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-sm text-sky-700/80 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-6">
              <span className="font-medium">Swiftmark</span>
              <span className="text-sky-400">•</span>
              <span>Marking, reimagined</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
              80% faster marking.
              <br />
              Full transparency.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Swiftmark supports teachers in marking faster while keeping full transparency. Save time, stay consistent, and keep every decision visible.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-black transition">
                Try Swiftmark
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-900 px-6 py-3 text-base font-medium hover:bg-gray-50 transition">
                <School className="mr-2 h-4 w-4" /> For Schools
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-10 -left-10 h-40 w-40 bg-sky-100 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-indigo-100 rounded-full blur-2xl" />
              <div className="relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur shadow-lg p-6">
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
                  <div className="h-20 rounded-lg bg-white border border-gray-100 shadow-sm" />
                  <div className="h-20 rounded-lg bg-white border border-gray-100 shadow-sm" />
                  <div className="h-20 rounded-lg bg-white border border-gray-100 shadow-sm" />
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  Light preview of the interface, focused on clarity and calm composition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
