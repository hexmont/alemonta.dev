import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type BlogCardProps = {
  title: string;
  date: string;
  summary: string;
  url: string;
  tags?: string[];
};

export function BlogCard({ title, date, summary, url, tags }: BlogCardProps) {
  return (
    <Card className="hover:border-cyan-500/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-zinc-400">{date}</p>
      </CardHeader>
      <CardContent className="text-zinc-300 space-y-3">
        <p>{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
            >
              #{t}
            </span>
          ))}
        </div>
        <a
          href={url}
          className="inline-block text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
        >
          Leggi →
        </a>
      </CardContent>
    </Card>
  );
}
