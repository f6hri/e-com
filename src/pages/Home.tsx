import SEO from "../SEO";
import Navbar from "../components/navbar";
import Container from "../components/shared/container";
import HeroSection from "../sections/heroSection";

export default function Home() {
  return (
    <>
      <SEO title="Ana sayfa" />
      <Navbar />
      <main>
        <Container>
          <HeroSection />
        </Container>
      </main>
    </>
  );
}
