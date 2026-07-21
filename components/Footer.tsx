import { getShow } from "@/lib/data";

export default function Footer() {
  const show = getShow();
  return (
    <footer className="mt-20 border-t border-gold/20 pt-8 text-center text-sm text-muted">
      <p>An independent show. Sources for every episode are in the show notes.</p>
      {show.email && (
        <p className="mt-2">
          Email the show:{" "}
          <a href={`mailto:${show.email}`} className="text-gold">
            {show.email}
          </a>
        </p>
      )}
      <p className="mt-2 flex flex-wrap justify-center gap-4">
        <a href={show.feedPath} className="text-gold">
          RSS feed
        </a>
        {show.links.tiktok && (
          <a href={show.links.tiktok} className="text-gold">
            TikTok
          </a>
        )}
        {show.links.instagram && (
          <a href={show.links.instagram} className="text-gold">
            Instagram
          </a>
        )}
      </p>
      <p className="mt-4">
        © {new Date().getFullYear()} {show.copyright}
      </p>
    </footer>
  );
}
