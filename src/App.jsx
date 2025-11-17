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
    <div className="min-h-screen bg-white text-gray-900">
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
