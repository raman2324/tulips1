import { Plus } from "lucide-react";
import pPink from "@/assets/p-tulip-pink.jpg";
import pRed from "@/assets/p-tulip-red.jpg";
import pDaff from "@/assets/p-daffodil.jpg";
import pPeony from "@/assets/p-peony.jpg";
import pLily from "@/assets/p-lily.jpg";
import pPurple from "@/assets/p-tulip-purple.jpg";
import pBulbs from "@/assets/p-bulbs.jpg";
import pParrot from "@/assets/p-parrot.jpg";

const items = [
  { img: pPink,   name: "Maureen Mathias Tulip", stems: "30 stems · 7-day vase life", ship: "Ships Wed",  price: "$54" },
  { img: pParrot, name: "Apricot Parrot Tulip",  stems: "20 stems · 6-day vase life", ship: "Ships Wed",  price: "$62" },
  { img: pDaff,   name: "Tahiti Daffodil",       stems: "25 stems · 8-day vase life", ship: "Ships Wed",  price: "$48" },
  { img: pPeony,  name: "Sarah Bernhardt Peony", stems: "10 stems · 9-day vase life", ship: "Ships Mon",  price: "$78" },
  { img: pRed,    name: "Royal Virgin Tulip",    stems: "30 stems · 7-day vase life", ship: "Ships Wed",  price: "$54" },
  { img: pPurple, name: "Negrita & Maureen Mix", stems: "30 stems · 7-day vase life", ship: "Ships Wed",  price: "$56" },
  { img: pLily,   name: "Casa Blanca Lily",      stems: "8 stems · 12-day vase life", ship: "Ships Fri",  price: "$68" },
  { img: pBulbs,  name: "Heritage Bulb Blend",   stems: "50 bulbs · plant Sept-Nov",  ship: "Ships Sept", price: "$42" },
];

export function InBloomRail() {
  return (
    <section id="in-bloom" className="section-y">
      <div className="container-page">
        <div className="flex items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary mb-4">Fresh this week</p>
            <h2 className="display-lg text-foreground">What's in bloom — shipping Wednesday.</h2>
            <p className="lede mt-4">
              Cut at first light on Tuesday in Mount Vernon, packed by hand, on your table the next morning.
            </p>
          </div>
          <a href="#shop" className="hidden md:inline-block text-primary font-semibold hover:underline underline-offset-4">
            See all in bloom →
          </a>
        </div>

        <div className="rail flex gap-5 overflow-x-auto -mx-6 px-6 md:-mx-10 md:px-10 snap-x snap-mandatory pb-4">
          {items.map((p) => (
            <article
              key={p.name}
              className="group snap-start shrink-0 w-[260px] md:w-[300px]"
            >
              <div className="relative tile-zoom overflow-hidden rounded-2xl bg-cream-100 aspect-square">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <span className="pill absolute top-3 left-3 bg-leaf-light/95 text-anchor-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-anchor-foreground" /> {p.ship}
                </span>
                <button
                  aria-label={`Add ${p.name}`}
                  className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center shadow-lift"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="pt-4">
                <h3 className="font-display text-[19px] font-medium leading-tight text-foreground">{p.name}</h3>
                <p className="text-[13px] text-ink-500 mt-1">{p.stems}</p>
                <p className="mt-2 text-[15px] font-semibold text-anchor">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
