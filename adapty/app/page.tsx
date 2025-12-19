import { AudienceSection } from "@/components/landing/AudienceSection";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f3f1]">
      <Header />
      <HeroSection />
      <AudienceSection />
    </main>
  );
}
