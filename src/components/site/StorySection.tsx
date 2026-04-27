import valley from "@/assets/story-valley.jpg";
import gh from "@/assets/g-greenhouse.jpg";
import gha from "@/assets/g-harvest.jpg";
import gp from "@/assets/g-packing.jpg";
import gf from "@/assets/g-festival.jpg";

export function StorySection() {
  return (
    <section id="story" className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={valley}
            alt="The Skagit Valley at golden hour, the Cascade mountains beyond rows of red and yellow tulips"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[42vh] md:h-[58vh] object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mt-14 md:mt-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-anchor mb-4">From the Skagit Valley</p>
            <h2 className="display-lg text-foreground">
              Four generations.<br />
              One valley.<br />
              <em className="italic font-light">Every bloom you'll ever need.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-5">
            <p className="lede">
              The Roozen family has been growing tulips, daffodils, and irises in Mount Vernon, Washington
              since 1955 — four generations on the same rich Skagit topsoil, watered by a slow maritime
              climate that the bulbs have come to think of as home.
            </p>
            <p className="lede">
              Every spring we cut at first light, harvest the bulbs after the bloom, and replant for the
              following year. It's a calendar we've kept for seventy years. The flowers in your kitchen
              this Wednesday were standing in our fields on Tuesday.
            </p>

            <figure className="border-l-2 border-anchor pl-6 mt-10">
              <p className="font-display italic text-2xl md:text-[28px] text-anchor leading-snug">
                <span className="text-gold text-3xl mr-1 align-top">"</span>
                The day the box arrives is the day the whole house smells like spring.
                <span className="text-gold text-3xl ml-1">"</span>
              </p>
              <figcaption className="text-ink-500 text-sm mt-3">— Linda H., customer since 2009</figcaption>
            </figure>

            <a href="#story" className="inline-block mt-2 text-primary font-semibold hover:underline underline-offset-4">
              Read our story →
            </a>
          </div>
        </div>

        {/* gallery row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16">
          {[{i:gh,a:"Inside the greenhouse"},{i:gha,a:"Hand-harvested bulbs"},{i:gp,a:"Packing room"},{i:gf,a:"At the festival"}].map((x)=>(
            <div key={x.a} className="relative aspect-square overflow-hidden rounded-2xl tile-zoom bg-cream-100">
              <img src={x.i} alt={x.a} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
