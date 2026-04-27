import sSpring from "@/assets/s-spring.jpg";
import sSummer from "@/assets/s-summer.jpg";
import sFall from "@/assets/s-fall.jpg";
import sHoliday from "@/assets/s-holiday.jpg";

const seasons = [
  { name: "Spring",         img: sSpring,  cap: "Tulips, daffodils, hyacinth · March – May" },
  { name: "Summer",         img: sSummer,  cap: "Peonies, lilies, dahlias · June – August" },
  { name: "Fall · Bulbs",   img: sFall,    cap: "Plant for next spring · September – November" },
  { name: "Holiday",        img: sHoliday, cap: "Amaryllis, paperwhites · November – December" },
];

export function ShopBySeason() {
  return (
    <section id="shop" className="section-y">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-primary mb-4">Shop by season</p>
          <h2 className="display-lg text-foreground">Because flowers have <em className="italic font-light">their own calendar.</em></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {seasons.map((s) => (
            <a
              key={s.name}
              href="#shop"
              className="group relative tile-zoom overflow-hidden rounded-2xl aspect-[3/4] bg-cream-100"
            >
              <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "var(--gradient-tile-veil)" }} aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-cream-50 text-3xl font-medium">{s.name}</h3>
                <p className="text-cream-50/85 text-[13px] mt-1">{s.cap}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
