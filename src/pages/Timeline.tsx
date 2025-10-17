import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { Briefcase, GraduationCap } from "lucide-react";

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
              <li key={i} className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-neutral-950">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>
                <h4 className="text-lg font-medium">
                  {e.role} · <span className="text-zinc-300">{e.org}</span>
                </h4>
                <p className="text-sm text-zinc-400">{e.period}</p>
                <p className="mt-2 text-zinc-300">{e.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <GraduationCap className="h-5 w-5" /> Formazione
          </h3>
          <ol className="relative ml-3 border-l border-white/10">
            {education.map((ed, i) => (
              <li key={i} className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-neutral-950">
                  <GraduationCap className="h-3.5 w-3.5" />
                </span>
                <h4 className="text-lg font-medium">
                  {ed.title} · <span className="text-zinc-300">{ed.org}</span>
                </h4>
                <p className="text-sm text-zinc-400">{ed.period}</p>
                <p className="mt-2 text-zinc-300">{ed.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
