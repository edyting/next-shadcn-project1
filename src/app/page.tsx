import CompanyCarousel from "@/components/custom-components/CompanyCarousel";
import HeroSection from "./hero-section/HeroSection";
import SecondSection from "./second-section/SecondSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <CompanyCarousel/>
      <SecondSection/>
    </div>
  );
}
