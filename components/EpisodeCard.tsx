import Link from "next/link";
import Player from "@/components/Player";
import { episodePath, type Episode } from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/format";

export default function EpisodeCard({
  episode,
  featured = false,
}: {
  episode: Episode;
  featured?: boolean;
}) {
  const href = episodePath(episode);
  return (
    <article className="rounded-2xl border border-gold/25 bg-panel px-5 py-5 sm:px-7 sm:py-6">
      {featured && (
        <p className="font-display mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
          Latest episode
        </p>
      )}
      <h2
        className={`font-display mb-1 font-semibold leading-snug ${
          featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
        }`}
      >
        <Link href={href} className="text-gold no-underline hover:underline">
          {episode.title}
        </Link>
      </h2>
      <p className="mb-3 text-sm text-muted">
        Episode {episode.number} · {formatDate(episode.published)} ·{" "}
        {formatDuration(episode.durationSec)}
      </p>
      {featured && (
        <div className="mb-3">
          <Player src={episode.audio.path} chapters={[]} />
        </div>
      )}
      <p className="leading-relaxed">{episode.description}</p>
      <p className="mt-4 text-sm">
        <Link href={href} className="text-gold no-underline hover:underline">
          {featured
            ? "Chapters, sources, and full transcript →"
            : "Listen, chapters, sources, and full transcript →"}
        </Link>
      </p>
    </article>
  );
}
