"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DatabaseImage from "@public/skills/database.png"
import TailwindImage from "@public/skills/tailwind.png"
import NextImage from '@public/skills/nextjs.png'
import TypescriptImage from "@public/skills/typescript.png"
import NestImage from "@public/skills/nest.png"
// import { GoCopilot } from "react-icons/go";

export function CardDemo() {
    return (
        <Card>
            <CardSkeletonContainer>
                <Skeleton />
            </CardSkeletonContainer>
            <CardTitle>Damn good card</CardTitle>
            <CardDescription>
                A card that showcases a set of tools that you use to create your
                product.
            </CardDescription>
        </Card>
    );
}

export const Skeleton = ({
    className
}: {
    className?: string;
}) => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
    ];

    useEffect(() => {
        animate(sequence, {
            // @ts-ignore
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);
    return (
        <div className={cn("px-8 overflow-hidden h-full relative flex items-center justify-center", className)}>
            <div className="flex flex-row shrink-0 justify-center items-center gap-2">
                <Container className="md:h-18 md:w-18 w-12 h-12 circle-1">
                    <Image src={DatabaseImage} alt="database" width={200} height={200} className="md:w-10 md:h-10 w-6 h-6" />
                </Container>
                <Container className="md:h-20 md:w-20 w-14 h-14 circle-2">
                    <Image src={TailwindImage} alt="tailwind" width={200} height={200} className="md:w-12 md:h-12 w-8 h-8" />
                </Container>
                <Container className="md:h-24 md:w-24 w-16 h-16 circle-3">
                    <Image src={NextImage} alt="next" width={200} height={200} className="md:w-16 md:h-16 w-10 h-10" />
                </Container>
                <Container className="md:h-20 md:w-20 w-14 h-14 circle-4">
                    <Image src={TypescriptImage} alt="typescript" width={200} height={200} className="md:w-10 md:h-10 w-6 h-6" />
                </Container>
                <Container className="md:h-18 md:w-18 w-12 h-12 circle-5">
                    <Image src={NestImage} alt="mest" width={200} height={200} className="md:w-10 md:h-10 w-6 h-6" />
                </Container>
            </div>

            <div className="h-40 w-px absolute m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
                <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <Sparkles />
                </div>
            </div>
        </div>
    );
};
export const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-white"
                ></motion.span>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-lg font-semibold text-white py-2",
                className
            )}
        >
            {children}
        </h3>
    );
};

export const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "text-sm font-normal text-neutral-400 max-w-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[15rem] md:h-[20rem] rounded-xl z-40",
                className,
                showGradient &&
                "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};

export const Container = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}
        >
            {children}
        </div>
    );
};
