import { Phone, Search, ShoppingBag, User } from "lucide-react";
import { FlowerButton } from "./FlowerButton";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-roozengaarde.png";

const nav = [
  { label: "Shop", href: "#shop" },
  { label: "In Bloom", href: "#in-bloom" },
  { label: "Occasions", href: "#occasions" },
  { label: "Subscriptions", href: "#club" },
  { label: "Weddings", href: "#weddings" },
  { label: "Visit", href: "#festival" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream-50/95 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-anchor/15 shadow-soft" : "border-b border-transparent"
      }`}
    >
      {/* Utility row */}
      <div className="hidden md:block border-b border-anchor/10">
        <div className="container-page flex h-9 items-center justify-between text-[12px] text-ink-700">
          <span className="tracking-wide">Direct from the Grower<sup className="text-[8px]">™</sup> · Mount Vernon, WA</span>
          <a href="tel:18664888368" className="inline-flex items-center gap-1.5 text-anchor hover:text-anchor-hover font-medium">
            <Phone className="h-3.5 w-3.5 text-gold" />
            1-866-488-8368
          </a>
        </div>
      </div>

      <div className="container-page flex h-[72px] items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0" aria-label="Tulips.com — Roozengaarde">
          <img
            src={logo}
            alt="Tulips.com — Roozengaarde Flowers & Bulbs"
            className="h-14 md:h-16 w-auto object-contain"
            width={240}
            height={140}
          />
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-7 mx-auto">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[14px] font-medium text-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-1.5">
          <button aria-label="Search" className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-100">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-100">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Cart, 0 items" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-100">
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold flex items-center justify-center">
              2
            </span>
          </button>
          <FlowerButton variant="primary" className="hidden md:inline-flex ml-2 px-5 py-2.5 text-[13px]">
            Shop Fresh Cut
          </FlowerButton>
        </div>
      </div>
    </header>
  );
}
