import { According } from "@/components/home/According/page";
import Automate from "@/components/home/automate/page";
import FellHuman from "@/components/home/fell-human/page";
import Gallery from "@/components/home/gallery/page";
import HeroSection from "@/components/home/hero-section/page";
import PersonalGrowth from "@/components/home/personal-growth/page";
import RequestDemo from "@/components/home/request-demo/page";

export default function Home() {
  return (
<div>
  <HeroSection/>
  <RequestDemo/>
  <Gallery/>
  <FellHuman/>
  <PersonalGrowth/>
  <Automate/>
  <According/>
  
  

</div>
  );
}
