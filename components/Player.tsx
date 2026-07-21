"use client";

import { useRef, useState } from "react";
import type { Chapter } from "@/lib/data";
import { formatDuration } from "@/lib/format";

export default function Player({
  src,
  chapters,
}: {
  src: string;
  chapters: Chapter[];
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [positionMs, setPositionMs] = useState(0);

  const activeIndex = chapters.reduce(
    (active, chapter, i) => (positionMs >= chapter.startMs ? i : active),
    -1,
  );

  function seekTo(startMs: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = startMs / 1000;
    audio.play();
  }

  return (
    <div>
      <audio
        ref={audioRef}
        controls
        preload="metadata"
        src={src}
        onTimeUpdate={(e) => setPositionMs(e.currentTarget.currentTime * 1000)}
      />
      {chapters.length > 0 && (
        <ol className="mt-4 list-none space-y-1 p-0 text-sm">
          {chapters.map((chapter, i) => (
            <li key={chapter.startMs}>
              <button
                type="button"
                onClick={() => seekTo(chapter.startMs)}
                className={`w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-gold/10 ${
                  i === activeIndex ? "bg-gold/15 text-gold" : "text-muted"
                }`}
              >
                <span className="mr-3 inline-block w-12 tabular-nums text-gold/80">
                  {formatDuration(Math.floor(chapter.startMs / 1000))}
                </span>
                {chapter.title}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
