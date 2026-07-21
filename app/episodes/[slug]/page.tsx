import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Player from "@/components/Player";
import Sources from "@/components/Sources";
import Transcript from "@/components/Transcript";
import {
  absoluteUrl,
  episodePath,
  getEpisode,
  getEpisodes,
  getShow,
} from "@/lib/data";
import { formatDate, formatDuration } from "@/lib/format";
import { podcastEpisodeJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getEpisodes().map((episode) => ({ slug: episode.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return {};
  const show = getShow();
  const path = episodePath(episode);
  return {
    title: episode.title,
    description: episode.description,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": [{ url: show.feedPath, title: show.title }],
      },
    },
    openGraph: {
      type: "article",
      url: path,
      title: episode.title,
      description: episode.description,
      publishedTime: episode.published,
      images: [{ url: show.art.og, width: 1200, height: 630 }],
      audio: [
        { url: absoluteUrl(episode.audio.path), type: episode.audio.type },
      ],
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();
  const show = getShow();

  return (
    <article>
      <JsonLd data={podcastEpisodeJsonLd(show, episode)} />
      <p className="mb-6 text-sm">
        <Link href="/" className="text-muted no-underline hover:text-gold">
          ← All episodes
        </Link>
      </p>
      <h1 className="font-display mb-2 text-3xl font-semibold leading-tight text-gold">
        {episode.title}
      </h1>
      <p className="mb-6 text-sm text-muted">
        Episode {episode.number} · {formatDate(episode.published)} ·{" "}
        {formatDuration(episode.durationSec)}
      </p>
      <Player src={episode.audio.path} chapters={episode.chapters} />
      <p className="mt-8 leading-relaxed">{episode.description}</p>
      <Sources sources={episode.sources} />
      <Transcript transcript={episode.transcript} />
    </article>
  );
}
