import { SocialMedia } from "@/constants/layout";
import { AboutPage } from "@/component/pages/about";
import { ServicesPage } from "@/component/pages/services";
import { ExperiencesPage } from "@/component/pages/experiences";
import { SkillsPage } from "@/component/pages/skills";
import { ContactPage } from "@/component/pages/contact";

export default function Home() {

  return (
    <div className="flex flex-col">
      {/* About */}
      <AboutPage socialMedia={SocialMedia} />
      {/* Services */}
      <ServicesPage />
      {/* Skills */}
      <SkillsPage />
      {/* Experiences */}
      <ExperiencesPage />
      {/* Contact */}
      <ContactPage />
    </div>
  );
}
