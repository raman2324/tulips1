import u1 from "@/assets/u-garden1.jpg";
import u2 from "@/assets/u-garden2.jpg";
import u3 from "@/assets/u-garden3.jpg";
import u4 from "@/assets/u-garden4.jpg";
import u5 from "@/assets/u-garden5.jpg";
import u6 from "@/assets/u-garden6.jpg";

const ugc = [
  { img: u1, handle: "@hannah.in.bloom", loc: "Asheville, NC" },
  { img: u2, handle: "@thegardenbrooks", loc: "Portland, OR · 97217" },
  { img: u3, handle: "@field_and_fence", loc: "Madison, WI" },
  { img: u4, handle: "@purple_door_garden", loc: "Saint Paul, MN" },
  { img: u5, handle: "@thefrontporchclub", loc: "Charlottesville, VA" },
  { img: u6, handle: "@potted.in.brooklyn", loc: "Brooklyn, NY · 11215" },
];

export function CustomerGardens() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex items-end justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <p className="eyebrow text-primary mb-4">Grown by you</p>
            <h2 className="display-md text-foreground">Our bulbs, your front yard.</h2>
            <p className="lede mt-4">
              Plant in fall, forget about them, then text us in April. We love seeing where they end up.
            </p>
          </div>
          <a href="#" className="hidden md:inline-block text-primary font-semibold hover:underline underline-offset-4">
            See all gardens →
          </a>
        </div>

        <div className="rail flex gap-4 overflow-x-auto -mx-6 px-6 md:-mx-10 md:px-10 snap-x">
          {ugc.map((u) => (
            <figure key={u.handle} className="snap-start shrink-0 w-[240px] md:w-[280px]">
              <div className="relative tile-zoom overflow-hidden rounded-2xl aspect-square bg-cream-100">
                <img src={u.img} alt={`Garden by ${u.handle}`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <figcaption className="pt-3 text-[13px]">
                <span className="font-semibold text-foreground">{u.handle}</span>
                <span className="text-ink-500"> · {u.loc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
