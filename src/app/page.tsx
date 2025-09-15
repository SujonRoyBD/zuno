import { According } from "@/components/home/According/page";
import Automate from "@/components/home/automate/page";
import Gallery from "@/components/home/gallery/page";
import HeroSection from "@/components/home/hero-section/page";
import PersonalGrowth from "@/components/home/personal-growth/page";

export default function Home() {
  return (
<div>
  <HeroSection/>
  <Gallery/>
  <PersonalGrowth/>
  <Automate/>
  <According/>
  
  

</div>
  );
}
