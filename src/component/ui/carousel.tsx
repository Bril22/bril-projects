'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ICardSkills } from "./card-skill";
import { wrap } from "@popmotion/popcorn"
interface ICarousel {
    carouselItems: ICardSkills[];
}

export const Carousel = ({
    carouselItems
}: ICarousel) => {
    const [index, setIndex] = useState(0);
    const totalImages = carouselItems.length;
    const visibleImages = 3; // Show 3 images at a time

    // Auto-slide every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalImages);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Dragging logic
    const handleDragEnd = (event: any, info: any) => {
        if (info.offset.x < -50) {
            // Swipe left
            setIndex((prev) => (prev + 1) % totalImages);
        } else if (info.offset.x > 50) {
            // Swipe right
            setIndex((prev) => (prev - 1 + totalImages) % totalImages);
        }
    };

    return (
        <div className="relative flex gap-4 h-[400px] container mx-auto w-full overflow-hidden">
            {Array.from({ length: visibleImages }).map((_, i) => {
                const currentIndex = wrap(0, totalImages, index + i);
                const item = carouselItems[currentIndex];

                return (
                    <motion.div
                        key={currentIndex}
                        className="w-full h-full rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, x: i === 0 ? 50 : 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: i === 0 ? -50 : -30 }}
                        transition={{ duration: 0.8 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                    >
                        <Image
                            src={item.image!}
                            alt={item.title!}
                            className="w-full h-[450px] object-cover rounded-lg shadow-md object-top"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};