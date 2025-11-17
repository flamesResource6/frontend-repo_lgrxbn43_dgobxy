import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import Features from "./components/Features";
import Transparency from "./components/Transparency";
import Process from "./components/Process";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative text-gray-900 bg-white">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,#dbeafe,transparent_60%),radial-gradient(40%_40%_at_90%_20%,#e9d5ff,transparent_50%),radial-gradient(50%_50%_at_10%_80%,#fef9c3,transparent_50%)] opacity-70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <Hero />
      <ImpactMetrics />
      <Features />
      <Transparency />
      <Process />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
