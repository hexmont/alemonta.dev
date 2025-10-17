import { useMemo, useState } from "react";
import { Mail, Phone } from "lucide-react";
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
      <SectionHeading
        kicker="Parliamone"
        title="Contatti"
        subtitle="Cerchi un collaboratore affidabile per il tuo prossimo progetto? Scrivimi un messaggio: rispondo in 24/48h."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="col-span-2">
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
              GitHub:{" "}
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-white"
                href={CONFIG.socials.github}
              >
                {CONFIG.socials.github}
              </a>
            </p>
            <p className="flex items-center gap-2">
              LinkedIn:{" "}
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-white"
                href={CONFIG.socials.linkedin}
              >
                {CONFIG.socials.linkedin}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
