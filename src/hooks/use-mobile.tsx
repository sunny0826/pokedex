import * as React from "react";
import { isNativeAndroid } from "@/lib/native/androidApp";
import { getIsFoldableOpen } from "./useFoldableOpen";

const MOBILE_BREAKPOINT = 768;

const getIsMobile = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (getIsFoldableOpen()) {
    return false;
  }

  if (!isNativeAndroid()) {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  const isNarrowViewport = window.innerWidth < MOBILE_BREAKPOINT;
  const isCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const isLandscapeTouch = isCoarsePointer && window.innerWidth > window.innerHeight;
  const shortSide = Math.min(window.innerWidth, window.innerHeight);

  return isNarrowViewport || isLandscapeTouch || (isCoarsePointer && shortSide < MOBILE_BREAKPOINT);
};

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(getIsMobile);

  React.useEffect(() => {
    const widthQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const pointerQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const onChange = () => {
      setIsMobile(getIsMobile());
    };

    widthQuery.addEventListener("change", onChange);
    pointerQuery.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.visualViewport?.addEventListener("resize", onChange);
    onChange();

    return () => {
      widthQuery.removeEventListener("change", onChange);
      pointerQuery.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      window.visualViewport?.removeEventListener("resize", onChange);
    };
  }, []);

  return isMobile;
}
