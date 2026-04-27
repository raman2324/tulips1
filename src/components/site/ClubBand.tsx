import clubImg from "@/assets/club-bouquet.jpg";
import { FlowerButton } from "./FlowerButton";

const rows = [
  { t: "What's included", d: "A new seasonal variety hand-selected from our fields, with care notes and a story card." },
  { t: "How shipping works", d: "Cut Tuesday, overnighted to arrive Wednesday — no signature required." },
  { t: "Cancel anytime", d: "Pause, skip, or cancel from your account in two taps. No commitments, ever." },
];

export function ClubBand() {
  return (
    <section id="club" className="bg-anchor text-anchor-foreground on-dark">
      <div className="container-page grid lg:grid-cols-2 gap-0 lg:gap-16 items-stretch">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px] -mx-6 md:-mx-10 lg:mx-0 lg:rounded-none">
          <img
            src={clubImg}
            alt="A monthly bouquet from the Bloom of the Month Club, hand-tied and wrapped in cream paper"
            loading="lazy"
            width={1280}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="py-20 md:py-28 lg:py-32 lg:pl-4">
          <p className="eyebrow text-[hsl(var(--primary-hover))] mb-4">Bloom of the Month Club</p>
          <h2 className="display-lg text-cream-50">
            A new variety, every month,<br />
            <em className="italic font-light">all year long.</em>
          </h2>

          <ul className="mt-10 space-y-6 max-w-lg">
            {rows.map((r) => (
              <li key={r.t} className="border-t border-cream-50/15 pt-5">
                <h3 className="font-display text-xl text-cream-50">{r.t}</h3>
                <p className="text-cream-50/75 mt-1.5 text-[15px] leading-relaxed">{r.d}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <FlowerButton variant="primary" size="lg" arrow>Start a Subscription</FlowerButton>
            <span className="text-cream-50/70 text-sm">From $54/month · ships free</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-cream-50/80">
            <span>✦ Direct from the Grower™</span>
            <span>✦ Always Overnight</span>
            <span>✦ Family-grown since 1955</span>
          </div>
        </div>
      </div>
    </section>
  );
}
