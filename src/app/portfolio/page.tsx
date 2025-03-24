'use client'
import SplitText from "@/component/ui/text/split-text-animation";
import Image from "next/image";
import PortfolioImage from '@public/portfolio/portfolios.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { Tabs } from "@/component/ui/tabs/animated-tabs";
import { Skeleton } from "@/component/ui/card/block-animated-card";
import { getRepositories } from "@/lib/api";
import { ThreeDMarquee } from "@/component/ui/marquee";
import { CodeBlock } from "@/component/ui/code-block";
import { code } from "@/constants/portfolio";

const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "/portfolio/bapenda.png",
    "/portfolio/omen.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://cdn.dribbble.com/userupload/37348302/file/original-3506d00603171dd080969e8030ffd178.png?resize=752x564&vertical=center",
    "/portfolio/sqm-dashboard.png",
    "https://cdn.dribbble.com/userupload/15835244/file/original-66f10ede0ae44e727d619d67890ad533.mp4",
    "https://media.squaremetre.io/uploads/sqm-dashboard.mp4",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://mill3.studio/wp-content/uploads/2022/09/HOME-TO-PROJET_V01.mp4",
    "https://cdn.dribbble.com/userupload/4356061/file/original-8c623d9982f59c5a116f60cc9bf1962c.mp4",
    "https://cdn.dribbble.com/userupload/15158653/file/original-6770ea165a041444c094cf60b32ccc80.mp4",
    "https://cdn.dribbble.com/userupload/10861343/file/original-3db813c376d86b6c48a15bf149e99c74.mp4",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
];

const fileNames = ['test-login.js', 'test-login.robot', 'test-login.java'];

const tabs = [
    {
        title: "Web Development",
        value: "web-development",
        content: (
            <div className="w-full overflow-hidden rounded-2xl relative h-full text-xl md:text-4xl font-bold text-white">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
                    <Image src={'/portfolio/landing-page/sqm-marketplace.png'} alt="sqm" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/omen-landing.png'} alt="omen" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/geonet-project-1.png'} alt="geonet-project" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/geonet-detail-property.png'} alt="geonet-proeprty" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/geonet-list-property.png'} alt="geonet-list-property" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/cimah-landing.png'} alt="cimahi" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                </div>
            </div>
        ),
    },
    {
        title: "Landing Page",
        value: "landing-page",
        content: (
            <div className="w-full overflow-hidden rounded-2xl relative h-full text-xl md:text-4xl font-bold text-white">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
                    <Image src={'/portfolio/landing-page/antic.png'} alt="antic" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/omen-landing.png'} alt="omen" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/decor.png'} alt="decor-landing" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/cimah-landing.png'} alt="cimahi" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/suit-deal.png'} alt="suit" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/herachloris.png'} alt="hera" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                    <Image src={'/portfolio/landing-page/geotrap.png'} alt="hera" width={500} height={900} className="h-[600px] md:h-[800px] w-full object-cover object-top rounded-2xl" />
                </div>
            </div>
        ),
    },
    {
        title: "E-Commerce",
        value: "e-commerce",
        content: (
            <div className="w-full overflow-hidden rounded-2xl relative h-full text-xl md:text-4xl font-bold text-white">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
                    <Image src={'/portfolio/bapenda.png'} alt="bapenda" width={500} height={400} className="h-96 w-full object-cover object-left-top rounded-2xl" />
                    <Image src={'/portfolio/furniro.png'} alt="furniro" width={500} height={900} className="h-96 w-full object-cover object-left-top rounded-2xl" />
                    <Image src={'/portfolio/laporan-disbun.png'} alt="decor-landing" width={500} height={900} className="h-96 w-full object-cover object-left-top rounded-2xl" />
                    <Image src={'/portfolio/sqm-dashboard-2.png'} alt="sqm-dashboard" width={500} height={900} className="h-96 w-full object-cover object-left-top rounded-2xl" />
                    <Image src={'/portfolio/orders.png'} alt="orders" width={500} height={900} className="h-96 w-full object-cover object-left-top rounded-2xl" />
                </div>
            </div>
        ),
    },
    {
        title: "Automation Testing",
        value: "automation-testing",
        content: (
            <div className="w-full overflow-hidden rounded-2xl relative h-full text-xl md:text-4xl font-bold text-white">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
                    {code?.map((item, i) => (
                        <div key={i} className="mx-auto w-full">
                            <CodeBlock
                                language="jsx"
                                filename={fileNames[i]}
                                className="bg-fourth"
                                // highlightLines={[9, 13, 14, 18]}
                                code={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];
export default function Portfolio() {
    const [repo, setRepo] = useState<any[]>()
    const fetchRepositories = async () => {
        try {
            const repositories = await getRepositories();
            const res = await repositories.json();
            setRepo(res);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }

    useEffect(() => {
        fetchRepositories();
    }, []);
    return (
        <div className="flex flex-col md:gap-16 gap-8">
            <div className="flex md:flex-row flex-col gap-8 items-center justify-center h-screen text-start relative px-4">
                <SplitText
                    text={'Welcome to My Portfolio'}
                    className="realtive z-20 lg:text-8xl md:text-6xl text-5xl text-sixth font-bold md:w-1/2 md:!text-start text-center"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    // easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                // textAlign="start"
                />
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                    className="relative z-20 h-24 md:h-44">
                    <Skeleton className="" />
                </motion.div>
                <div className="absolute inset-0 z-10 h-full w-full bg-black/70" />
                <ThreeDMarquee
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    images={images}
                />
            </div>
            <div className={`container mx-auto h-full relative flex flex-col w-full items-start justify-start px-4`}>
                <Tabs tabs={tabs} tabClassName="!bg-gradient-to-br !from-black/20 !to-fifth cursor-pointer px-6 py-4 " activeTabClassName="bg-fifth" contentClassName="mt-10" />
            </div>
            {/* <div className="relative bg-black h-full md:h-screen flex w-full items-center md:py-0 py-32">
                    <div className="container mx-auto px-4 relative flex md:flex-row flex-col-reverse md:gap-0 gap-12 items-center justify-between z-10">
                        <h1 className="md:max-w-3xl max-w-full md:text-start text-center">
                            <SplitText
                                text="Welcome to My Portfolio!"
                                className="lg:text-8xl md:text-6xl text-5xl text-sixth font-bold"
                                delay={50}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                // easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            // onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </h1>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                            className="flex lg:w-fit w-full justify-end"
                        >
                            <Image src={PortfolioImage} alt="port-image" width={500} height={500} className="rounded-full w-56 h-56 md:w-96 md:h-96 object-cover" loading="lazy" />
                        </motion.div>
                    </div>
                    <Image src={PortfolioCover} alt="port-cover" width={500} height={500} className="absolute flex inset-0 object-cover w-full h-full opacity-30" />
                </div> */}
        </div>
    )
}