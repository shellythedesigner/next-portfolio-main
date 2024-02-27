import About from "@/app/ui/About";
import Contact from "@/app/ui/Contact";
import Intro from "@/app/ui/Intro";
import Projects from "@/app/ui/Projects";
import Skills from "@/app/ui/Skills";

export default async function Page() {
  return (
    <main className="px-4 sm:px-10">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
