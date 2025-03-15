"use client";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export const imagesDefault = [
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.dribbble.com/userupload/13699076/file/original-5f5fcbef0e21ae93c5d0ac4974bd49da.mp4",
    "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
    "https://mill3.studio/wp-content/uploads/2022/09/HOME-TO-PROJET_V01.mp4",
    "https://cdn.dribbble.com/userupload/4356061/file/original-8c623d9982f59c5a116f60cc9bf1962c.mp4",
    "https://cdn.dribbble.com/userupload/15158653/file/original-6770ea165a041444c094cf60b32ccc80.mp4",
    "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.dribbble.com/userupload/10861343/file/original-3db813c376d86b6c48a15bf149e99c74.mp4",
    "https://cdn.dribbble.com/userupload/37348302/file/original-3506d00603171dd080969e8030ffd178.png?resize=752x564&vertical=center"
];
export const ParallaxScroll = ({
    images = imagesDefault,
    scrollYProgress, // Get scroll progress from AboutSection
    className,
    contentClassName
}: {
    images?: string[] | StaticImageData[];
    scrollYProgress: MotionValue<number>; // Ensure it's received as a prop
    className?: string;
    contentClassName?: string;
}) => {
    const translateFirst = useTransform(scrollYProgress, [0, 1], [200, -500]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [200, -600]);

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);
    const getDomainFromUrl = (url: string): string | null => {
        const match = url.match(/:\/\/([^\/]+)/);
        return match ? match[1] : null;
    };
    return (
        <div className={cn("h-[40rem] items-center overflow-hidden w-full scrollbar-hidden", className)}>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 px-4 md:px-10", contentClassName)}>
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        // <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                        //     <Image src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
                        // </motion.div>
                        <motion.div style={{ y: translateFirst }} key={"grid-2" + idx}>
                            {typeof el === 'string' && el.endsWith('.mp4') ? (
                                <video
                                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                    height="400"
                                    width="400"
                                    autoPlay
                                    loop
                                    muted
                                    // preload="metadata" // Mengoptimalkan pemuatan video
                                    // loading="lazy" // Menunda pemuatan video
                                >
                                    <source src={el as string} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={el}
                                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                    height="400"
                                    width="400"
                                    alt="thumbnail"
                                    loading="lazy"
                                />
                            )}
                            <div className="text-center text-secondary">
                                {typeof el === 'string' ? getDomainFromUrl(el) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            {typeof el === 'string' && el.endsWith('.mp4') ? (
                                <video
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                autoPlay
                                loop
                                muted
                                // preload="metadata" // Mengoptimalkan pemuatan video
                                // loading="lazy" // Menunda pemuatan video
                            >
                                <source src={el as string} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                                loading="lazy"
                            />
                            )}
                            <div className="text-center text-secondary">
                                {typeof el === 'string' ? getDomainFromUrl(el) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        // <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                        //     <Image src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
                        // </motion.div>
                        <motion.div style={{ y: translateThird }} key={"grid-2" + idx}>
                            {/* <Image src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" /> */}
                            {typeof el === 'string' && el.endsWith('.mp4') ? (
                                <video
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                autoPlay
                                loop
                                muted
                                // preload="metadata" // Mengoptimalkan pemuatan video
                                // loading="lazy" // Menunda pemuatan video
                            >
                                <source src={el as string} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                                loading="lazy"
                            />
                            )}
                            <div className="text-center text-secondary">
                                {typeof el === 'string' ? getDomainFromUrl(el) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

