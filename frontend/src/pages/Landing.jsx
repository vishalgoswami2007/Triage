import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import ProductSection from "../components/landing/ProductSection";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer"

function Landing() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProductSection />
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
    </main>
  );
}

export default Landing;