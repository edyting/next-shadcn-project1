import CompanyCarousel from "@/components/custom-components/CompanyCarousel";
import HeroSection from "./hero-section/HeroSection";
import SecondSection from "./second-section/SecondSection";
import ThirdSection from "./third-section/ThirdSection";
import FourthSection from "./fourth-section/FourthSection";
import Prices from "./prices/Prices";
import FifthSection from "./fifth-section/FifthSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <CompanyCarousel/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Prices/>
      <FifthSection/>
    </div>
  );
}
