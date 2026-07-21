import type { Metadata } from "next";
import SubscribeLinks from "@/components/SubscribeLinks";
import { getShow } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Two Grifters is, how episodes are sourced, and how to reach the show.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const show = getShow();
  return (
    <article className="mx-auto max-w-xl">
      <h1 className="font-display mb-6 text-2xl font-semibold text-gold sm:text-3xl">
        About the show
      </h1>
      <div className="space-y-4 leading-relaxed">
        <p>
          {show.title} is a history podcast about heists, cons, and scams: who
          planned them, how they worked, and the one dumb detail that brought
          them down. Frankie carries the story. Ruby asks the questions you
          would be yelling at your speaker anyway.
        </p>
        <p>
          Episodes run 15 to 20 minutes and stand on their own, so you can
          start anywhere. Every one ends the same way: where the money went,
          and where the people ended up.
        </p>
      </div>

      <h2 className="font-display mb-3 mt-10 text-lg font-semibold text-gold">
        How episodes are sourced
      </h2>
      <div className="space-y-4 leading-relaxed">
        <p>
          Every episode is built from the historical record: court records,
          contemporary reporting, memoirs, and archives. The full source list
          for each episode is in its show notes and at the bottom of its page
          here. When accounts of a case disagree, we say so on air instead of
          picking the tidiest version.
        </p>
      </div>

      <h2 className="font-display mb-3 mt-10 text-lg font-semibold text-gold">
        Say hello
      </h2>
      <div className="space-y-4 leading-relaxed">
        <p>
          Feedback, questions, or a con you think we should cover? Email{" "}
          <a href={`mailto:${show.email}`} className="text-gold underline">
            {show.email}
          </a>
          . We read everything.
        </p>
      </div>

      <div className="mt-10">
        <SubscribeLinks />
      </div>
    </article>
  );
}
