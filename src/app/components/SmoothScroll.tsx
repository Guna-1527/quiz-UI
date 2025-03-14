"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        lerp: 0.1, // Adjust scrolling smoothness (0 = instant, 1 = no smoothness)
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
