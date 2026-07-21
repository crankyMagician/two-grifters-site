import Link from "next/link";
import { getShow } from "@/lib/data";

export default function Header() {
  const show = getShow();
  return (
    <header className="mb-12 flex items-baseline justify-between gap-4">
      <Link
        href="/"
        className="font-display text-lg font-semibold tracking-[0.14em] text-gold no-underline"
      >
        {show.title.toUpperCase()}
      </Link>
      <nav className="flex gap-5 text-sm">
        <Link href="/#episodes" className="text-muted hover:text-gold">
          Episodes
        </Link>
        <a href={show.feedPath} className="text-muted hover:text-gold">
          RSS
        </a>
      </nav>
    </header>
  );
}
