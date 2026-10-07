import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { WhyMe } from "@/components/sections/WhyMe";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Services />
        <Skills />
        <Process />
        <WhyMe />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
