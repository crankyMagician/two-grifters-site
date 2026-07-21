import fs from "node:fs";
import path from "node:path";

export interface Show {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  copyright: string;
  language: string;
  category: string;
  explicit: boolean;
  siteUrl: string;
  feedPath: string;
  email: string;
  art: { full: string; display: string; og: string };
  links: { apple: string; spotify: string; tiktok: string; instagram: string };
}

export interface Chapter {
  title: string;
  startMs: number;
}

export interface Source {
  text: string;
  url: string | null;
}

export type TranscriptEntry =
  | { type: "section"; title: string }
  | { type: "line"; speaker: string; text: string };

export interface Episode {
  id: string;
  number: number;
  slug: string;
  title: string;
  description: string;
  published: string;
  explicit: boolean;
  durationSec: number;
  audio: { path: string; bytes: number; type: string };
  chapters: Chapter[];
  sources: Source[];
  transcript: TranscriptEntry[];
}

const CONTENT = path.join(process.cwd(), "content");

let showCache: Show | null = null;
let episodesCache: Episode[] | null = null;

export function getShow(): Show {
  showCache ??= JSON.parse(
    fs.readFileSync(path.join(CONTENT, "show.json"), "utf8"),
  );
  return showCache!;
}

export function getEpisodes(): Episode[] {
  if (!episodesCache) {
    const dir = path.join(CONTENT, "episodes");
    episodesCache = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Episode)
      .sort((a, b) => b.number - a.number);
  }
  return episodesCache;
}

export function getEpisode(slug: string): Episode | undefined {
  return getEpisodes().find((e) => e.slug === slug);
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, getShow().siteUrl).toString();
}

export function episodePath(episode: Episode): string {
  return `/episodes/${episode.slug}/`;
}
