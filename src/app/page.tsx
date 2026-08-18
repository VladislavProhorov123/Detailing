import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Секции будут здесь */}
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
