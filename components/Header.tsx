import Link from "next/link";
import { getShow } from "@/lib/data";

export default function Header() {
  const show = getShow();
  return (
    <header className="mb-10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 sm:mb-12">
      <Link
        href="/"
        className="font-display text-base font-semibold tracking-[0.14em] text-gold no-underline sm:text-lg"
      >
        {show.title.toUpperCase()}
      </Link>
      <nav className="flex gap-4 text-sm sm:gap-5">
        <Link href="/#episodes" className="text-muted hover:text-gold">
          Episodes
        </Link>
        <Link href="/about/" className="text-muted hover:text-gold">
          About
        </Link>
        <a href={show.feedPath} className="text-muted hover:text-gold">
          RSS
        </a>
      </nav>
    </header>
  );
}
