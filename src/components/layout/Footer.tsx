import { CONFIG } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {CONFIG.name}. Tutti i diritti riservati.</p>
        <p className="font-mono">Built with React · Deploy su Vercel</p>
      </div>
    </footer>
  );
}
