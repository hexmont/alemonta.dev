import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string; // path relativo in /public/images o /src/assets/images
  demo?: string | null;
  repo?: string | null;
};

export function ProjectCard({ title, description, tech, image, demo, repo }: Props) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg flex items-start justify-between gap-2">
          <span>{title}</span>
          <span className="flex gap-3">
            {demo && (
              <a
                href={demo}
                className="inline-flex items-center text-sm text-zinc-300 hover:text-white"
              >
                Link <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                className="inline-flex items-center text-sm text-zinc-300 hover:text-white"
              >
                Code <Github className="ml-1 h-3.5 w-3.5" />
              </a>
            )}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
