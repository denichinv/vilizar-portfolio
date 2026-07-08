import Hero from "@/components/sections/Hero";
import EngineeringHighlights from "@/components/sections/EngineeringHighlights";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <EngineeringHighlights />
      </main>
    </>
  );
}
