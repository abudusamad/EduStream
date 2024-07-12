import Footer from "./_components/footer";
import { Heading } from "./_components/heading";
import { HeroSection } from "./_components/hero-section";
import { Testiony } from "./_components/testimonies";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col">
      <main className="flex-grow">
        <Heading />
        <HeroSection />
        <Testiony />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
