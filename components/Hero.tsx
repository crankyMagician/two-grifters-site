import { getShow } from "@/lib/data";
import SubscribeLinks from "@/components/SubscribeLinks";

export default function Hero() {
  const show = getShow();
  return (
    <section className="mb-12 text-center sm:mb-14">
      <img
        src={show.art.display}
        alt={`${show.title} cover art`}
        width={280}
        height={280}
        className="mx-auto w-56 max-w-[70vw] rounded-2xl border-[3px] border-gold shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:w-72"
      />
      <h1 className="font-display mb-2 mt-6 text-3xl font-semibold tracking-[0.1em] text-gold sm:mt-7 sm:text-4xl sm:tracking-[0.12em]">
        {show.title.toUpperCase()}
      </h1>
      <p className="mb-6 italic text-muted">{show.subtitle}</p>
      <SubscribeLinks />
      <p className="mt-3 text-sm">
        <a href="#listen" className="text-muted underline hover:text-gold">
          New to podcasts? How to listen
        </a>
      </p>
      <p className="mx-auto mt-7 max-w-xl text-left leading-relaxed">
        {show.description}
      </p>
    </section>
  );
}
