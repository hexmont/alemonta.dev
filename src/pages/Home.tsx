import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconLink } from "@/components/IconLink";
import { CONFIG } from "@/config";

export function Home() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Code2 className="mr-2 h-3.5 w-3.5" /> {CONFIG.role} · {CONFIG.location}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {CONFIG.name}
          </h1>
          <p className="max-w-2xl text-zinc-300 text-lg leading-relaxed">
            {CONFIG.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950" onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Parliamo del tuo progetto
            </Button>
            <Button variant="outline" className="border-white/10 text-zinc-200 hover:bg-white/5" onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Esplora il portfolio
            </Button>
            <div className="ml-2 flex items-center gap-2">
              <IconLink href={CONFIG.socials.github} label="GitHub">
                <Github className="h-5 w-5" />
              </IconLink>
              <IconLink href={CONFIG.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </IconLink>
              <IconLink href={`mailto:${CONFIG.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </IconLink>
              <IconLink href={CONFIG.socials.website} label="Sito">
                <Globe className="h-5 w-5" />
              </IconLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
