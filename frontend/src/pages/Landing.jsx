import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import ProductSection from "../components/landing/ProductSection";

function Landing() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProductSection />
    </main>
  );
}

export default Landing;