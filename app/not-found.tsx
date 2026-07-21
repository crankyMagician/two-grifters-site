import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-display mb-3 text-3xl font-semibold text-gold">
        Page not found
      </h1>
      <p className="mb-8 text-muted">
        Whatever was here, somebody made off with it.
      </p>
      <Link href="/" className="text-gold underline">
        Back to all episodes
      </Link>
    </section>
  );
}
