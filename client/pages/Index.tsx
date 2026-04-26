import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
