import AboutUs from "@/components/sections/AboutUs";
import { HeroText } from "@/components/sections/HeroText";
import HeroVideo from "@/components/sections/HeroVideo";
import RoomTypes from "@/components/sections/RoomTypes";
import CtaBook from "@/components/sections/CtaBook";
import ParallaxImage from "@/components/sections/ParallaxImage";
import PackageTypes from "@/components/sections/PackageTypes";
import RetreatsIntro from "@/components/sections/RetreatsIntro";
import SpaVideo from "@/components/sections/SpaVideo";
import CtaResto from "@/components/sections/CtaResto";
import ImagePanels from "@/components/sections/ImagePanels";
import MapDetails from "@/components/sections/MapDetails";
import ReviewDetails from "@/components/sections/ReviewDetails";
import ExperienceCatalogs from "@/components/sections/ExperienceCatalogs";
import WeeklySchedules from "@/components/sections/WeeklySchedules";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <div className="space-y-36 sm:space-y-28 lg:space-y-40 xl:space-y-36">
      <HeroVideo />
      <HeroText />
      <AboutUs />
      <RoomTypes />
      <CtaBook />
      <ParallaxImage />
      <PackageTypes />
      <RetreatsIntro />
      <SpaVideo />
      <CtaResto />
      <ImagePanels />
      <MapDetails />
      <ReviewDetails />
      <ExperienceCatalogs />
      <WeeklySchedules />
      <CtaFinal />
    </div>
  );
}
