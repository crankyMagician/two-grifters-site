import { getShow } from "@/lib/data";

const pill =
  "inline-block rounded-full border border-gold px-5 py-1.5 text-sm tracking-wide " +
  "text-gold no-underline transition-colors hover:bg-gold hover:text-bg";

export default function SubscribeLinks() {
  const show = getShow();
  return (
    <p className="flex flex-wrap justify-center gap-2">
      {show.links.apple && (
        <a href={show.links.apple} className={pill}>
          Apple Podcasts
        </a>
      )}
      {show.links.spotify && (
        <a href={show.links.spotify} className={pill}>
          Spotify
        </a>
      )}
      <a href={show.feedPath} className={pill}>
        RSS
      </a>
    </p>
  );
}
