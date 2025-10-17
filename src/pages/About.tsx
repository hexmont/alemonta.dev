import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function About() {
  const stack = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Fastify",
    "Prisma",
    "PostgreSQL",
    "Tailwind",
    "shadcn/ui",
    "Framer Motion",
    "Vitest",
    "Playwright",
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        kicker="Profilo"
        title="Chi sono"
        subtitle="Sviluppatore orientato al prodotto: amo unire design, performance e DX."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Filosofia di lavoro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              Prediligo soluzioni semplici e tipizzate. Scrivo codice leggibile, testabile e ben documentato.
              Credo nella collaborazione, nel design system e nelle pipeline CI come acceleratori di qualità.
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
            <p className="mt-2">Interessato a: frontend, full-stack, design system, performance.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
