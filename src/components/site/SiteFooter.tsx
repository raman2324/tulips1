import logo from "@/assets/logo-roozengaarde.png";

const cols = [
  { h: "Shop",                 items: ["Fresh Cut","Tulips","Daffodils","Peonies","Lilies","Bulbs","Gift Cards"] },
  { h: "Subscriptions & Weddings", items: ["Bloom of the Month Club","Bulbs for Brides","Corporate Gifting","Wholesale"] },
  { h: "About & Visit",        items: ["Our Story","The Skagit Valley","The Festival","Display Gardens","Journal","Customer Gardens"] },
  { h: "Customer Service",     items: ["Help & FAQ","Track an Order","Shipping & Care","Returns","Contact Us","Accessibility"] },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-anchor text-anchor-foreground on-dark">
      <div className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center rounded-2xl bg-cream-50 p-3 shadow-soft">
              <img
                src={logo}
                alt="Tulips.com — Roozengaarde Flowers & Bulbs"
                className="h-16 w-auto object-contain"
                width={240}
                height={140}
              />
            </div>
            <p className="mt-5 text-cream-50/80 text-[15px] leading-relaxed max-w-sm">
              Family-grown in the Skagit Valley since 1955. Cut Tuesday in Mount Vernon, on your
              table Wednesday — Direct from the Grower<sup className="text-[8px]">™</sup>.
            </p>
            <address className="not-italic text-cream-50/70 text-[14px] mt-6 leading-relaxed">
              Roozengaarde / Washington Bulb Co.<br />
              15867 Beaver Marsh Rd<br />
              Mount Vernon, WA 98273<br />
              <a href="tel:18664888368" className="hover:text-cream-50">1-866-488-8368</a>
            </address>
            <p className="text-[12px] text-cream-50/60 mt-5">
              Overnight cutoff: Sunday 6pm PT for Wednesday delivery.
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <h3 className="text-cream-50 text-[13px] uppercase tracking-[0.16em] font-semibold mb-4">{c.h}</h3>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-cream-50/75 hover:text-cream-50 text-[14px]">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-50/15 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cream-50/65">
            <span>© {year} Washington Bulb Co., Inc.</span>
            <a href="#" className="hover:text-cream-50">Privacy</a>
            <a href="#" className="hover:text-cream-50">Terms</a>
            <a href="#" className="hover:text-cream-50">Accessibility</a>
            <a href="#" className="hover:text-cream-50">Sitemap</a>
            <span className="inline-flex items-center gap-1.5" title="Direct from the Grower — every stem grown by our family in the Skagit Valley.">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--leaf-light))]" />
              Direct from the Grower<sup className="text-[8px]">™</sup>
            </span>
          </div>

          {/* Payment marks */}
          <div className="flex items-center gap-2 opacity-90">
            {["VISA","MC","AMEX","PAYPAL"].map((p) => (
              <span key={p} className="rounded-md bg-cream-50 text-anchor px-2.5 py-1 text-[10px] font-bold tracking-wider">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
