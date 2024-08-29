"use client";

import useIsTouchDevice from "@/hooks/use-is-touch-device";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import clsx from "clsx";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface RiveAnimationProps {
  className?: string;
  intersectionClassName?: string;
  src: string;
  artboard?: string;
  stateMachines?: string;
  autoplay?: boolean;
  fit?: keyof typeof Fit;
  alignment?: keyof typeof Alignment;
  intersectionRootMargin?: string;
  animationRootMargin?: string;
  onLoad?: () => void;
}

const RiveAnimation = ({
  className = "",
  intersectionClassName = "",
  src,
  artboard,
  stateMachines = "SM",
  autoplay = false,
  fit = "FitWidth",
  alignment = "TopCenter",
  intersectionRootMargin = "500px 0px",
  animationRootMargin = "300px 0px",
  onLoad,
}: RiveAnimationProps) => {
  const isTouch = useIsTouchDevice();
  const [containerRef, isIntersecting] = useInView({
    triggerOnce: true,
    rootMargin: intersectionRootMargin,
  });
  const [animationRef, isVisible] = useInView({
    rootMargin: animationRootMargin,
  });

  const { rive, RiveComponent } = useRive({
    src,
    artboard,
    autoplay,
    stateMachines,
    layout: new Layout({
      fit: Fit[fit],
      alignment: Alignment[alignment],
    }),
    onLoad: () => {
      rive?.resizeDrawingSurfaceToCanvas();
      onLoad?.();
    },
  });

  useEffect(() => {
    if (!rive) {
      return;
    }

    if (isVisible) {
      rive.play();
    } else {
      rive.pause();
    }
  }, [rive, isVisible]);

  return (
    <>
      <span
        className={clsx(
          intersectionClassName,
          "absolute left-1/2 top-0 -z-10 h-full w-px"
        )}
        ref={containerRef}
        aria-hidden
      />
      <div
        className={clsx(
          className,
          {
            "pointer-events-none": isTouch,
          },
          "[&_canvas]:!h-auto [&_canvas]:!w-full"
        )}
        ref={animationRef}
        aria-hidden
      >
        {isIntersecting ? <RiveComponent /> : null}
      </div>
    </>
  );
};
export default RiveAnimation;
