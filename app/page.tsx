import Hero from "@/components/Hero";
import EpisodeCard from "@/components/EpisodeCard";
import JsonLd from "@/components/JsonLd";
import { getEpisodes, getShow } from "@/lib/data";
import { podcastSeriesJsonLd } from "@/lib/seo";

export default function HomePage() {
  const show = getShow();
  const episodes = getEpisodes();
  return (
    <>
      <JsonLd data={podcastSeriesJsonLd(show)} />
      <Hero />
      <section id="episodes" aria-label="Episodes">
        <h2 className="sr-only">Episodes</h2>
        {episodes.length === 0 ? (
          <p className="text-center text-muted">First episode coming soon.</p>
        ) : (
          <ol className="list-none space-y-6 p-0">
            {episodes.map((episode) => (
              <li key={episode.id}>
                <EpisodeCard episode={episode} />
              </li>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}
