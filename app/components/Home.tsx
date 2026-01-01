import BannerDrone from "./BannerDrone";
import BannerHelp from "./BannerHelp";
import BestSellers from "./BestSellers";
import CategoryGrid from "./CategoryGrid";
import FeaturesStrip from "./FeaturesStrip";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import OnSale from "./OnSale";
import PromoBanner from "./PromoBanner";
import PromoSection from "./PromoSection";


export default function home() {
  return (
    <div>
      <Hero />
      <PromoSection />
      <FeaturesStrip />
      <BestSellers />
      <PromoBanner />
      <OnSale />
      <CategoryGrid />
      <BannerDrone />
      <Newsletter />
      <BannerHelp />
    </div>
  )
}
