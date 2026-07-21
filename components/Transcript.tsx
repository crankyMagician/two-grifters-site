import type { TranscriptEntry } from "@/lib/data";

export default function Transcript({
  transcript,
}: {
  transcript: TranscriptEntry[];
}) {
  if (transcript.length === 0) return null;
  return (
    <section aria-label="Transcript" className="mt-10">
      <details open>
        <summary className="font-display cursor-pointer text-lg font-semibold text-gold">
          Transcript
        </summary>
        <div className="mt-4 space-y-3 leading-relaxed">
          {transcript.map((entry, i) =>
            entry.type === "section" ? (
              <h3
                key={i}
                className="font-display mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-gold/80"
              >
                {entry.title}
              </h3>
            ) : (
              <p key={i}>
                <b className="text-gold/90">{`${entry.speaker}:`}</b>{" "}
                {entry.text}
              </p>
            ),
          )}
        </div>
      </details>
    </section>
  );
}
