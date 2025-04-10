import HeroSection from "../components/hero-section";
import Highlights from "../components/highlights";
import Testimonials from "../components/testimonials";
import About from "../components/about";

export default function HomePage() {
    return (
        <>
          <HeroSection />
           <Highlights />
           <Testimonials />
          <About />
        </>
    );
}