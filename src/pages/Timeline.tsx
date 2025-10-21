import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        kicker="Percorso"
        title="Esperienza & Formazione"
        subtitle="Una panoramica sintetica ma concreta del mio background professionale e accademico."
      />
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <Briefcase className="h-5 w-5" /> Esperienze
          </h3>
          <ol className="relative ml-3 border-l border-white/10">
            {experiences.map((e, i) => (
              <motion.li
                key={i}
                className="mb-8 ml-6"
                initial={{ opacity: 0  }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="absolute -left-3 h-6 w-6 rounded-full bg-cyan-500 border border-white/20 shadow-md shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/40" />
                <h4 className="text-lg font-medium">
                  {e.role} · <span className="text-zinc-300">{e.org}</span>
                </h4>
                <p className="text-sm text-zinc-400">{e.period}</p>
                <p className="mt-2 text-zinc-300">{e.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <GraduationCap className="h-5 w-5" /> Formazione
          </h3>
          <ol className="relative ml-3 border-l border-white/10">
            {education.map((ed, i) => (
              <motion.li
                key={i}
                className="mb-8 ml-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="absolute -left-3 h-6 w-6 rounded-full bg-emerald-500 border border-white/20 shadow-md shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/40" />
                <h4 className="text-lg font-medium">
                  {ed.title} · <span className="text-zinc-300">{ed.org}</span>
                </h4>
                <p className="text-sm text-zinc-400">{ed.period}</p>
                <p className="mt-2 text-zinc-300">{ed.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
