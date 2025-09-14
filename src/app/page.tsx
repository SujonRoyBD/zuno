import { According } from "@/components/home/According/page";
import Automate from "@/components/home/automate/page";
import Gallery from "@/components/home/gallery/page";
import HeroSection from "@/components/home/hero-section/page";

export default function Home() {
  return (
<div>
  <HeroSection/>
  <Gallery/>
  <According/>
  <Automate/>

</div>
  );
}
