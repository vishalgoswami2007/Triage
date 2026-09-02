import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import ProductSection from "../components/landing/ProductSection";
import Features from "../components/landing/Features";

function Landing() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProductSection />
      <Features/>
    </main>
  );
}

export default Landing;