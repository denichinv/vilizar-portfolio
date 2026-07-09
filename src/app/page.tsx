import Hero from "@/components/sections/Hero";
import EngineeringHighlights from "@/components/sections/EngineeringHighlights";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <EngineeringHighlights />
        <Contact />
      </main>
    </>
  );
}
