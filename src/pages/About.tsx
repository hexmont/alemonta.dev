import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <SectionHeading
          kicker="Profilo"
          title="Chi sono"
          subtitle="Sviluppatore software."
        />
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="col-span-2"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <Card>
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
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Disponibilità</CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <p>Freelance / Contratto · Italia / Remote</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
