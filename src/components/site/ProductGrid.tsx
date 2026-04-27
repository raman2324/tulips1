import { useState } from "react";
import { Plus } from "lucide-react";
import pPink from "@/assets/p-tulip-pink.jpg";
import pRed from "@/assets/p-tulip-red.jpg";
import pDaff from "@/assets/p-daffodil.jpg";
import pPeony from "@/assets/p-peony.jpg";
import pLily from "@/assets/p-lily.jpg";
import pPurple from "@/assets/p-tulip-purple.jpg";
import pBulbs from "@/assets/p-bulbs.jpg";
import pParrot from "@/assets/p-parrot.jpg";

type Cat = "All" | "Tulips" | "Daffodils" | "Lilies" | "Peonies" | "Bulbs" | "Specialty";
const cats: Cat[] = ["All","Tulips","Daffodils","Lilies","Peonies","Bulbs","Specialty"];

const products = [
  { img: pPink,   name: "Maureen Mathias Tulip", desc: "A heritage variety with a faint blush.",     price: "$54", cat: "Tulips" as Cat,    badge: true },
  { img: pRed,    name: "Royal Virgin Tulip",    desc: "Deep crimson, planted in '03.",              price: "$54", cat: "Tulips" as Cat,    badge: true },
  { img: pPurple, name: "Negrita & Maureen Mix", desc: "Two of our favorites, hand-tied together.",   price: "$56", cat: "Tulips" as Cat },
  { img: pParrot, name: "Apricot Parrot Tulip",  desc: "Frilled petals, a single short bloom.",      price: "$62", cat: "Specialty" as Cat, badge: true },
  { img: pDaff,   name: "Tahiti Daffodil",       desc: "Layered yellow and orange.",                  price: "$48", cat: "Daffodils" as Cat, badge: true },
  { img: pPeony,  name: "Sarah Bernhardt Peony", desc: "Soft pink, abundant petals.",                 price: "$78", cat: "Peonies" as Cat },
  { img: pLily,   name: "Casa Blanca Lily",      desc: "Long-lasting, fragrant white.",               price: "$68", cat: "Lilies" as Cat },
  { img: pBulbs,  name: "Heritage Bulb Blend",   desc: "Fifty bulbs for next spring's garden.",       price: "$42", cat: "Bulbs" as Cat,     badge: true },
];

export function ProductGrid() {
  const [cat, setCat] = useState<Cat>("All");
  const list = cat === "All" ? products : products.filter(p => p.cat === cat);

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow text-anchor mb-3">The shop</p>
            <h2 className="display-md text-foreground">Cut today. Planted last fall. <em className="italic font-light">Grown by us.</em></h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="rail flex gap-2 overflow-x-auto pb-2 mb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-5 py-2 text-[13px] font-medium transition-colors border ${
                cat === c
                  ? "bg-anchor text-anchor-foreground border-anchor"
                  : "bg-transparent text-foreground border-anchor/20 hover:border-anchor/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {list.map((p) => (
            <article key={p.name} className="group">
              <div className="relative tile-zoom overflow-hidden rounded-2xl bg-cream-100 aspect-[4/5] shadow-soft">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                {p.badge && (
                  <span className="pill absolute top-3 left-3 bg-leaf-light/95 text-anchor-foreground">
                    Direct from the Grower™
                  </span>
                )}
                <button
                  aria-label={`Add ${p.name}`}
                  className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center shadow-lift"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="pt-4">
                <h3 className="font-display text-[18px] font-medium text-foreground">{p.name}</h3>
                <p className="text-[13px] text-ink-500 mt-1 leading-snug">{p.desc}</p>
                <p className="mt-2 text-[15px] font-semibold text-anchor">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
