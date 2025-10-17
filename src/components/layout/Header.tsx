import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONFIG } from "@/config";

export function Header() {
  const nav = [
    { href: "#projects", label: "Progetti" },
    { href: "#about", label: "Chi sono" },
    { href: "#timeline", label: "Esperienza" },
    { href: "#contact", label: "Contatti" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-sm tracking-widest text-zinc-300 hover:text-white"
        >
          alemonta.dev
        </a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${CONFIG.email}`}
            className="hidden md:inline-flex text-sm text-zinc-300 hover:text-white"
          >
            <Mail className="mr-2 h-4 w-4" /> Contattami
          </a>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950">
            <a href="#projects">Guarda i progetti</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
