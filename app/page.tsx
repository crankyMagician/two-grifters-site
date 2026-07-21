import Hero from "@/components/Hero";
import EpisodeCard from "@/components/EpisodeCard";
import JsonLd from "@/components/JsonLd";
import { getEpisodes, getShow } from "@/lib/data";
import { podcastSeriesJsonLd } from "@/lib/seo";

export default function HomePage() {
  const show = getShow();
  const episodes = getEpisodes();
  const [latest, ...rest] = episodes;
  return (
    <>
      <JsonLd data={podcastSeriesJsonLd(show)} />
      <Hero />
      <section id="episodes" aria-label="Episodes">
        {!latest ? (
          <p className="text-center text-muted">First episode coming soon.</p>
        ) : (
          <>
            <EpisodeCard episode={latest} featured />
            {rest.length > 0 && (
              <>
                <h2 className="font-display mb-4 mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-gold/80">
                  More episodes
                </h2>
                <ol className="list-none space-y-5 p-0 sm:space-y-6">
                  {rest.map((episode) => (
                    <li key={episode.id}>
                      <EpisodeCard episode={episode} />
                    </li>
                  ))}
                </ol>
              </>
            )}
          </>
        )}
      </section>
      <section id="listen" aria-label="How to listen" className="mt-16">
        <h2 className="font-display mb-3 text-lg font-semibold text-gold">
          How to listen
        </h2>
        <p className="leading-relaxed">
          Listen right here on the site, or in any podcast app. Most apps have
          an &ldquo;add a show by URL&rdquo; option; give it this feed and new
          episodes show up as they drop:
        </p>
        <p className="mt-3 overflow-x-auto rounded-lg border border-gold/25 bg-panel px-4 py-3 font-mono text-sm text-gold">
          {show.siteUrl}
          {show.feedPath}
        </p>
      </section>
    </>
  );
}
