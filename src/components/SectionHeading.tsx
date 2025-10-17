type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ kicker, title, subtitle }: Props) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-zinc-300 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
