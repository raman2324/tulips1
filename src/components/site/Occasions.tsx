import oSym from "@/assets/o-sympathy.jpg";
import oCel from "@/assets/o-celebration.jpg";
import oGr  from "@/assets/o-gratitude.jpg";
import oJb  from "@/assets/o-justbecause.jpg";
import oHo  from "@/assets/o-hostess.jpg";
import oWe  from "@/assets/o-wedding.jpg";

const tiles = [
  { name: "Sympathy",     img: oSym },
  { name: "Celebration",  img: oCel },
  { name: "Gratitude",    img: oGr  },
  { name: "Just Because", img: oJb  },
  { name: "Hostess",      img: oHo  },
  { name: "Wedding",      img: oWe  },
];

export function Occasions() {
  return (
    <section id="occasions" className="bg-cream-100 section-y">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <p className="eyebrow text-anchor mb-4">Send a gift</p>
          <h2 className="display-md text-foreground">
            <em className="font-light italic text-anchor">Flowers for the moments</em><br />
            words can't quite reach.
          </h2>
          <p className="lede mt-5 max-w-md">
            Whether you're celebrating, comforting, or simply thinking of someone — let
            our fields say it for you.
          </p>
          <a href="#shop" className="inline-block mt-6 text-primary font-semibold hover:underline underline-offset-4">
            Send a gift →
          </a>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((t) => (
            <a
              key={t.name}
              href="#shop"
              className="group relative tile-zoom overflow-hidden rounded-2xl aspect-[4/5] bg-anchor/10"
            >
              <img
                src={t.img}
                alt={`${t.name} arrangement`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "var(--gradient-tile-veil)" }} aria-hidden />
              <h3 className="absolute bottom-4 left-5 font-display text-cream-50 text-2xl md:text-[28px] font-medium">
                {t.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
