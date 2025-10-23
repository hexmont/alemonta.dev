import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/blog/lastposts";
import { Search } from "lucide-react";

export function Blog() {
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Tutti i tag unici
  const allTags = useMemo(() => Array.from(new Set(posts.flatMap(p => p.tags))), [posts]);

  // Filtraggio dinamico
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = filter ? p.tags.includes(filter) : true;
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.summary.toLowerCase().includes(search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Titolo */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <SectionHeading
          kicker="Scritti"
          title="Blog"
          subtitle="Pensieri, esperienze e approfondimenti su sviluppo e design."
        />
      </motion.div>

      {/* Ricerca */}
      <div className="relative mt-8 mx-auto max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Cerca un articolo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-10 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        />
      </div>

      {/* Filtro tag */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag === filter ? null : tag)}
            className={`px-3 py-1 text-sm rounded-full border border-white/10 transition-colors ${
              tag === filter
                ? "bg-cyan-500 text-neutral-900 border-cyan-500"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Griglia dei post */}
      <motion.div
        key={`${filter}-${search}`}   /* forza il re-render */
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {filteredPosts.map((p, idx) => (
          <motion.div
            key={p.url || idx}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard {...p} />
          </motion.div>
        ))}
      </motion.div>

      {/* Nessun risultato */}
      {filteredPosts.length === 0 && (
        <p className="mt-10 text-center text-zinc-400">
          Nessun articolo trovato
          {filter && (
            <>
              {" "}
              per il tag <span className="text-cyan-400">#{filter}</span>
            </>
          )}
          {search && (
            <>
              {" "}
              che contenga “<span className="text-cyan-400">{search}</span>”
            </>
          )}
          .
        </p>
      )}
    </section>
  );
}
