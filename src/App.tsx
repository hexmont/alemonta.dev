import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { About } from "@/pages/About";
import { Timeline } from "@/pages/Timeline";
import { Blog } from "@/pages/Blog";
import { Contact } from "@/pages/Contact";
import "@/styles/index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-100 selection:bg-cyan-500/30">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Timeline />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
