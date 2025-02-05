'use client'
import Image from "next/image";
import { Icons } from "@/component/icons";
import { IconNames } from "@/component/icons/interface";
import { ButtonBorderOnlyAngle } from "@/component/ui/button";
import Link from "next/link";
import { SocialMedia } from "@/constants/layout";
import Ellipse from "@public/ellipse.png"
import { AboutPage } from "@/component/pages/about";
import { ServicesPage } from "@/component/pages/services";
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";
import { ExperiencesPage } from "@/component/pages/experiences";
import { SkillsPage } from "@/component/pages/skills";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    </div>
  );
}
