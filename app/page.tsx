import { GeometricBackground } from "@/components/geomentric-background";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <GeometricBackground/>
      <Navigation/>
      <HeroSection/>
    </main>    
  );
}
