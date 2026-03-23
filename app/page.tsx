import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Approach from "./components/Approach";
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
      <Stats />
      <Services />
      <Approach />
      <Differentiators />
      <Partnership />
      <CTA />
      <Footer />
    </main>
  );
}
