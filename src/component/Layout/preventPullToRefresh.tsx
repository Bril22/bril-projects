"use client";

import { useEffect, ReactNode } from "react";

interface PreventPullToRefreshProps {
    children: ReactNode;
}

const PreventPullToRefresh: React.FC<PreventPullToRefreshProps> = ({ children }) => {
    useEffect(() => {
        let startY = 0;

        const onTouchStart = (event: TouchEvent) => {
            startY = event.touches[0].clientY;
        };

        const onTouchMove = (event: TouchEvent) => {
            const currentY = event.touches[0].clientY;
            const isAtTop = window.scrollY === 0;
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
            const isPullingDown = currentY > startY;
            const isPullingUp = currentY < startY;

            if ((isAtTop && isPullingDown) || (isAtBottom && isPullingUp)) {
                event.preventDefault();
            }
        };

        document.addEventListener("touchstart", onTouchStart, { passive: true });
        document.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            document.removeEventListener("touchstart", onTouchStart);
            document.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return <div className="h-full w-full">{children}</div>;
};

export default PreventPullToRefresh;
