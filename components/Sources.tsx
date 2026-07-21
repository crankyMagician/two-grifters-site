import type { Source } from "@/lib/data";

export default function Sources({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <section aria-label="Sources" className="mt-10">
      <h2 className="font-display mb-3 text-lg font-semibold text-gold">
        Sources
      </h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted">
        {sources.map((source, i) => (
          <li key={i}>
            {source.text}
            {source.url && (
              <>
                {source.text ? " " : ""}
                <a href={source.url} className="break-all text-muted underline">
                  {source.url}
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
