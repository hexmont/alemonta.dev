import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CONFIG } from "@/config";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Nuovo contatto dal sito — ${form.name || ""}`
    );
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    return `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <SectionHeading
          kicker="Parliamone"
          title="Contatti"
          subtitle="Cerchi un collaboratore affidabile per il tuo prossimo progetto? Scrivimi un messaggio: rispondo in 24/48h."
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
            transition: { staggerChildren: 0.15 },
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
              <CardTitle className="text-xl">Scrivimi</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                }}
                className="grid grid-cols-1 gap-4"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input
                    placeholder="Nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <Textarea
                  placeholder="Messaggio"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  required
                />
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-400 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Disponibile per call introduttive
                  </div>
                  <Button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950">
                    Invia
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Contatti rapidi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />{" "}
                <a
                  className="underline decoration-dotted underline-offset-4 hover:text-white"
                  href={`mailto:${CONFIG.email}`}
                >
                  {CONFIG.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Github className="h-4 w-4" />{" "}
                <a
                  className="underline decoration-dotted underline-offset-4 hover:text-white"
                  href={CONFIG.socials.github}
                >
                  {CONFIG.socials.github}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />{" "}
                <a
                  className="underline decoration-dotted underline-offset-4 hover:text-white"
                  href={CONFIG.socials.linkedin}
                >
                  {CONFIG.socials.linkedin}
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
