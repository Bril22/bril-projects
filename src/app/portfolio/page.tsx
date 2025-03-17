'use client'
import SplitText from "@/component/ui/text/split-text-animation";
import Image from "next/image";
import PortfolioImage from '@public/portfolio/portfolios.png'
import PortfolioCover from '@public/portfolio/portfolio-cover.jpg'
import { motion } from 'framer-motion'
import { TextParallaxContent } from "@/component/ui/text/parallax-text";
import { useEffect, useState } from "react";
import { Tabs } from "@/component/ui/tabs/animated-tabs";
import { Card, CardDemo, CardSkeletonContainer, Skeleton } from "@/component/ui/card/block-animated-card";

const DummyContent = () => {
    return (
        <Image
            src={PortfolioImage}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};

const tabs = [
    {
        title: "Product",
        value: "product",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Product Tab</p>
                <DummyContent />
            </div>
        ),
    },
    {
        title: "Services",
        value: "services",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Services tab</p>
                <DummyContent />
            </div>
        ),
    },
    {
        title: "Playground",
        value: "playground",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Playground tab</p>
                <DummyContent />
            </div>
        ),
    },
    // {
    //     title: "Content",
    //     value: "content",
    //     content: (
    //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //             <p>Content tab</p>
    //             <DummyContent />
    //         </div>
    //     ),
    // },
    // {
    //     title: "Random",
    //     value: "random",
    //     content: (
    //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //             <p>Random tab</p>
    //             <DummyContent />
    //         </div>
    //     ),
    // },
];
export default function Portfolio() {
    const [repo, setRepo] = useState<any[]>()

    const getRepositories = async () => {
        const repositories = await fetch('https://api.github.com/user/repos?per_page=6&page=1&sort=created', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN}`,
                Accept: 'application/vnd.github+json',
            },
        });
        const res = await repositories.json();
        setRepo(res);
    }

    useEffect(() => {
        getRepositories();
    }, []);
    return (
        <>
            <div className="flex flex-col md:gap-16 gap-8 container mx-auto px-4 pt-32">
                <div className="flex md:flex-row flex-col gap-8 items-center justify-center h-[500px] text-start">
                    <SplitText
                        text={'Welcome to My Portfolio'}
                        className="lg:text-8xl md:text-6xl text-5xl text-sixth font-bold md:w-1/2 md:!text-start text-center"
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
                        className="relative h-24 md:h-44 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]">
                        <Skeleton className="" />
                    </motion.div>
                </div>
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-40">
                    <Tabs tabs={tabs} contentClassName="mt-20" />
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
        </>
    )
}