import { absoluteUrl, episodePath, type Episode, type Show } from "@/lib/data";
import { isoDuration } from "@/lib/format";

export function podcastSeriesJsonLd(show: Show) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: show.title,
    description: show.description,
    url: absoluteUrl("/"),
    image: absoluteUrl(show.art.display),
    webFeed: absoluteUrl(show.feedPath),
    author: { "@type": "Organization", name: show.author },
    genre: show.category,
  };
}

export function podcastEpisodeJsonLd(show: Show, episode: Episode) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    url: absoluteUrl(episodePath(episode)),
    name: episode.title,
    datePublished: episode.published,
    description: episode.description,
    timeRequired: isoDuration(episode.durationSec),
    episodeNumber: episode.number,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: absoluteUrl(episode.audio.path),
      encodingFormat: episode.audio.type,
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: show.title,
      url: absoluteUrl("/"),
    },
  };
}
