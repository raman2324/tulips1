import jPlanting from "@/assets/j-planting.jpg";
import jPeonies from "@/assets/j-peonies.jpg";
import jForecast from "@/assets/j-forecast.jpg";

const articles = [
  { img: jPlanting, kicker: "Field guide",  title: "How to plant tulip bulbs for next spring.",        excerpt: "What we tell our own kids: deep, pointed-end up, and patience." },
  { img: jPeonies,  kicker: "Care notes",   title: "What to do when your peonies arrive.",              excerpt: "A 60-second routine for the longest possible vase life." },
  { img: jForecast, kicker: "Field report", title: "When the Skagit blooms open: a 2026 forecast.",     excerpt: "A cool February has the buds running about a week behind." },
];

export function JournalPreview() {
  return (
    <section className="bg-cream-100 section-y">
      <div className="container-page">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow text-anchor mb-4">From the journal</p>
            <h2 className="display-md text-foreground">Stories from the fields, the greenhouse, and the kitchen table.</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-primary font-semibold hover:underline underline-offset-4">
            All articles →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a) => (
            <article key={a.title} className="group">
              <a href="#" className="block">
                <div className="relative tile-zoom overflow-hidden rounded-2xl aspect-[4/3] bg-background">
                  <img src={a.img} alt={a.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                </div>
                <p className="eyebrow text-primary mt-5">{a.kicker}</p>
                <h3 className="font-display text-2xl text-foreground mt-2 leading-snug group-hover:text-anchor transition-colors">{a.title}</h3>
                <p className="text-[15px] text-ink-700 mt-2 leading-relaxed">{a.excerpt}</p>
                <span className="inline-block mt-3 text-primary font-semibold">Read →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
