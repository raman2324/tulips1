import festImg from "@/assets/festival-fields.jpg";
import { FlowerButton } from "./FlowerButton";

export function FestivalBand() {
  return (
    <section id="festival" className="relative isolate overflow-hidden">
      <div className="relative h-[78vh] min-h-[560px] w-full">
        <img
          src={festImg}
          alt="Striped fields of the Skagit Valley Tulip Festival in full bloom"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover drift"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(0 14% 8% / 0.25) 0%, hsl(0 14% 8% / 0.65) 100%)" }} aria-hidden />

        <div className="relative z-10 container-page h-full flex flex-col justify-end pb-20 md:pb-28 on-dark">
          <p className="eyebrow text-cream-50/90 mb-5">April 1 – April 30, 2026</p>
          <h2 className="display-lg text-cream-50 max-w-[18ch]">
            The Skagit Valley<br />
            <em className="italic font-light">Tulip Festival.</em>
          </h2>
          <p className="lede mt-5 max-w-xl text-cream-50/90">
            Forty acres of color, twenty-five minutes from the ferry. Walk the rows,
            visit the display gardens, and meet the family that grew them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowerButton variant="primary" size="lg" arrow>Reserve Tickets</FlowerButton>
            <FlowerButton variant="ghost" size="lg">Plan Your Visit</FlowerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
