import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { InBloomRail } from "@/components/site/InBloomRail";
import { Occasions } from "@/components/site/Occasions";
import { ClubBand } from "@/components/site/ClubBand";
import { StorySection } from "@/components/site/StorySection";
import { ShopBySeason } from "@/components/site/ShopBySeason";
import { ProductGrid } from "@/components/site/ProductGrid";
import { JournalPreview } from "@/components/site/JournalPreview";
import { CustomerGardens } from "@/components/site/CustomerGardens";
import { FestivalBand } from "@/components/site/FestivalBand";
import { Newsletter } from "@/components/site/Newsletter";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <InBloomRail />
        <Occasions />
        <ClubBand />
        <StorySection />
        <ShopBySeason />
        <ProductGrid />
        <JournalPreview />
        <CustomerGardens />
        <FestivalBand />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
