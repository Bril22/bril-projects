"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

type CustomCursorProps = {
    children: ReactNode;
    cursorText?: string;
    bgColor?: string;
    textColor?: string;
};

export const CursorFollow = ({
    children,
    cursorText = "Hover",
    bgColor = "bg-white",
    textColor = "text-black",
}: CustomCursorProps) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useGSAP(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { xPercent: -50, yPercent: 20, opacity: 0, scale: 0.5 });

        const moveCursor = (e: MouseEvent) => {
            if (!isHovered) return;
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out",
                duration: 0.2,
            });
        };

        document.addEventListener("mousemove", moveCursor);
        return () => document.removeEventListener("mousemove", moveCursor);
    }, [isHovered]);

    const handleMouseEnter = (e: React.MouseEvent) => {
        setIsHovered(true);
        const cursor = cursorRef.current;
        if (!cursor) return;

        // ✅ Instantly move cursor to mouse position before animating
        gsap.set(cursor, { x: e.clientX, y: e.clientY });

        // ✅ Fade in and scale smoothly
        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "power1.out",
        });
    };

    const handleMouseLeave = () => {
        const cursor = cursorRef.current;
        if (!cursor) return;
    
        // ✅ Animate smoothly before hiding
        gsap.to(cursor, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
            ease: "power1.in",
            onComplete: () => {
                setIsHovered(false); // ✅ Hide only after animation finishes
            }
        });
    };

    return (
        <div
            className="relative inline-block w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div
                ref={cursorRef}
                className={clsx(
                    "fixed top-0 left-0 w-24 h-24 flex items-center justify-center",
                    "pointer-events-none z-50 rounded-full",
                    bgColor,
                    textColor
                )}
            >
                <span className="text-sm font-semibold">{cursorText}</span>
            </div>
        </div>
    );
};
