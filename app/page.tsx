import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import TruthSection from "./components/TruthSection";
import PageImage from "./components/PageImage";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Approach from "./components/Approach";
import Industries from "./components/Industries";
import Differentiators from "./components/Differentiators";
import Partnership from "./components/Partnership";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <TruthSection />
      <div className="max-w-4xl mx-auto px-6">
        <PageImage
          src="/images/hero-whiteboard.jpg"
          alt="COGO technology agnostic consulting approach"
        />
      </div>
      <Services />
      <Stats />
      <Approach />
      <Industries />
      <Differentiators />
      <Partnership />
      <CTA />
      <Footer />
    </main>
  );
}
