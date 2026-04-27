import heroImg from "@/assets/hero-fields.jpg";
import { FlowerButton } from "./FlowerButton";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Image */}
      <div className="relative h-[68vh] min-h-[560px] md:h-[75vh] w-full">
        <img
          src={heroImg}
          alt="Roozengaarde tulip fields stretching to the Cascade mountains in the Skagit Valley"
          className="absolute inset-0 h-full w-full object-cover drift"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Veil */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-veil)" }} aria-hidden />

        {/* Content */}
        <div className="relative z-10 container-page h-full flex flex-col justify-end pb-16 md:pb-24 on-dark">
          <p className="eyebrow text-cream-50/90 mb-5 reveal">From the Skagit Valley · Spring 2026</p>
          <h1 className="display-xl text-cream-50 max-w-[14ch] reveal" style={{ animationDelay: ".05s" }}>
            Some moments<br />
            deserve flowers.<br />
            <em className="not-italic text-cream-50/95 font-light italic">We grow them.</em>
          </h1>
          <p className="lede mt-6 max-w-xl text-cream-50/90 reveal" style={{ animationDelay: ".15s" }}>
            Direct from our family's fields in Mount Vernon, Washington — cut, wrapped,
            and overnighted to your door.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 reveal" style={{ animationDelay: ".25s" }}>
            <FlowerButton variant="primary" size="lg" arrow>Shop What's in Bloom</FlowerButton>
            <FlowerButton variant="ghost" size="lg">Visit the Farm</FlowerButton>
          </div>
        </div>

        {/* Floating proof tile */}
        <div className="hidden md:flex absolute right-8 lg:right-12 bottom-10 z-10 max-w-[300px] flex-col gap-2 rounded-2xl bg-cream-50/95 backdrop-blur p-5 shadow-lift reveal" style={{ animationDelay: ".4s" }}>
          <div className="flex items-center gap-1 text-gold">
            {[0,1,2,3,4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            <span className="ml-1 text-foreground text-[13px] font-semibold">4.9 · 1,200+ reviews</span>
          </div>
          <p className="text-[13px] text-ink-700 leading-snug">
            Family-grown in Mount Vernon since 1955. <span className="text-anchor font-semibold">Always Overnight.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
