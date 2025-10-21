import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function About() {
  const stack = [
    "RPG ILE / IV",
    "IBM i",
    "Web",
    "Git",
    "Tailwind",
    "React",
    "MySQL",
    "Java",
    "C / C++"
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        kicker="Profilo"
        title="Chi sono"
        subtitle="Sviluppatore software."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Filosofia di lavoro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              Un buon programma non è quello che funziona oggi, ma quello che sarà comprensibile domani.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Disponibilità</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <p>Freelance / Contratto · Italia / Remote</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
