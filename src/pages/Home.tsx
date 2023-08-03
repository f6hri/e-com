import SEO from "../SEO";
import Navbar from "../components/navbar";
import FairPriceSection from "../sections/fairPriceSection";
import HeroSection from "../sections/heroSection";

export default function Home() {
  return (
    <>
      <SEO title="Ana sayfa" />
      <Navbar />
      <main>
        <HeroSection />
        <FairPriceSection />
      </main>
    </>
  );
}
