"use client";

import { useEffect, ReactNode } from "react";

interface PreventPullToRefreshProps {
  children: ReactNode;
}

const PreventPullToRefresh: React.FC<PreventPullToRefreshProps> = ({ children }) => {
  useEffect(() => {
    const disablePullToRefresh = (event: TouchEvent) => {
      if (event.touches.length > 1 || event.touches[0].clientY > 0) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", disablePullToRefresh, { passive: false });

    return () => {
      document.removeEventListener("touchmove", disablePullToRefresh);
    };
  }, []);

  return <div className="touch-pan-x">{children}</div>;
};

export default PreventPullToRefresh;
