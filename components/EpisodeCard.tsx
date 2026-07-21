import Link from "next/link";
import { episodePath, type Episode } from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/format";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const href = episodePath(episode);
  return (
    <article className="rounded-2xl border border-gold/25 bg-panel px-7 py-6">
      <h2 className="font-display mb-1 text-xl font-semibold leading-snug">
        <Link href={href} className="text-gold no-underline hover:underline">
          {episode.title}
        </Link>
      </h2>
      <p className="mb-3 text-sm text-muted">
        Episode {episode.number} · {formatDate(episode.published)} ·{" "}
        {formatDuration(episode.durationSec)}
      </p>
      <p className="leading-relaxed">{episode.description}</p>
      <p className="mt-4 text-sm">
        <Link href={href} className="text-gold no-underline hover:underline">
          Listen, chapters, sources, and full transcript →
        </Link>
      </p>
    </article>
  );
}
