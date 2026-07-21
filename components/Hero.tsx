import { getShow } from "@/lib/data";
import SubscribeLinks from "@/components/SubscribeLinks";

export default function Hero() {
  const show = getShow();
  return (
    <section className="mb-14 text-center">
      <img
        src={show.art.display}
        alt={`${show.title} cover art`}
        width={280}
        height={280}
        className="mx-auto w-[280px] max-w-[70vw] rounded-2xl border-[3px] border-gold shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
      />
      <h1 className="font-display mb-2 mt-7 text-4xl font-semibold tracking-[0.12em] text-gold">
        {show.title.toUpperCase()}
      </h1>
      <p className="mb-6 italic text-muted">{show.subtitle}</p>
      <SubscribeLinks />
      <p className="mx-auto mt-8 max-w-xl text-left leading-relaxed">
        {show.description}
      </p>
    </section>
  );
}
