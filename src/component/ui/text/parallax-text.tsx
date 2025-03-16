import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import SplitText from "./split-text-animation";

const IMG_PADDING = 0;
export const TextParallaxContent = ({
    imgUrl,
    subheading,
    heading,
    overlayImage,
    children,
}: {
    imgUrl?: string | StaticImageData;
    subheading?: string;
    heading?: string;
    overlayImage?: string | StaticImageData
    children: ReactNode;
}) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                {imgUrl && (
                    <StickyImage imgUrl={imgUrl} />
                )}
                {(heading && overlayImage ) && (
                    <OverlayCopy heading={heading} overlayImage={overlayImage} />
                )}
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }: { imgUrl: string | StaticImageData }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const backgroundImage = typeof imgUrl === "string" ? imgUrl : imgUrl.src;

    return (
        <motion.div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden bg-black"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({
    heading,
    overlayImage
}: {
    heading: string;
    overlayImage?: string | StaticImageData
}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex md:flex-row flex-col-reverse md:gap-0 gap-12 items-center justify-center h-screen w-full px-4"
        >
            <h1 className="md:max-w-3xl max-w-full md:text-start text-center">
                <SplitText
                    text={heading}
                    className="lg:text-8xl md:text-6xl text-5xl text-sixth font-bold"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    // easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </h1>
            {overlayImage && (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                    className="flex lg:w-fit w-full justify-center"
                >
                    <Image src={overlayImage} alt="port-image" width={500} height={500} className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover" loading="lazy" />
                </motion.div>
            )}
        </motion.div>
    );
};