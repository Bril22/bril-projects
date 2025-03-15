'use client'
import { SocialMedia } from "@/constants/layout";
import { AboutPage } from "@/component/pages/about";
import { ServicesPage } from "@/component/pages/services";
import { ExperiencesPage } from "@/component/pages/experiences";
import { SkillsPage } from "@/component/pages/skills";
import { ContactPage } from "@/component/pages/contact";
import { ParallaxScroll } from "@/component/ui/scroll/parallax-scroll";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollY = useMotionValue(0);
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      scrollY.set(latest);
    });
  }, [scrollYProgress, scrollY]);

  // const translateY = useTransform(smoothScrollY, [0, 1], ["0", "20%"]);
  const translateServiceY = useTransform(smoothScrollY, [0, 1], ["120rem", "0rem"]);

  return (
    <div className="flex flex-col">
      <div ref={containerRef} className="relative">
        {/* About */}
        <motion.div
          // style={{ y: translateY }}
          className="relative z-10 h-full md:h-screen bg-fourth pt-32 flex"
        >
          <AboutPage socialMedia={SocialMedia} />
        </motion.div>
        {/* Parallax */}
        <motion.div className="sticky top-0 z-0 flex inset-0">
          <ParallaxScroll scrollYProgress={scrollYProgress} className="!h-screen bg-teal-900" contentClassName="!max-w-full" />
        </motion.div>
        {/* Service */}
        <motion.div style={{ y: translateServiceY }} className="relative z-10 bg-fourth">
          {/* <AuroraContent /> */}
          <ServicesPage />
          <SkillsPage />
          <ExperiencesPage />
          <ContactPage />
        </motion.div>
      </div>
      <div className="h-20 md:h-36" />
    </div>
  );
}
