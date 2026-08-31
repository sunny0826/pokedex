import * as React from "react";
import { isNativeAndroid } from "@/lib/native/androidApp";

const FOLDABLE_MEDIA_QUERIES = [
  "(horizontal-viewport-segments: 2)",
  "(vertical-viewport-segments: 2)",
  "(spanning: single-fold-vertical)",
  "(spanning: single-fold-horizontal)",
];

const UNFOLDED_TOUCH_MIN_SIDE = 480;
const UNFOLDED_TOUCH_MIN_LONG_SIDE = 600;
const UNFOLDED_TOUCH_MAX_ASPECT_RATIO = 1.55;

const getViewportSize = () => {
  const visualViewport = window.visualViewport;

  return {
    width: Math.round(visualViewport?.width ?? window.innerWidth),
    height: Math.round(visualViewport?.height ?? window.innerHeight),
  };
};

const matchesFoldableMedia = () =>
  FOLDABLE_MEDIA_QUERIES.some((query) => window.matchMedia(query).matches);

const isTouchViewport = () =>
  window.matchMedia("(hover: none) and (pointer: coarse)").matches || navigator.maxTouchPoints > 0;

const getIsExpandedTouchViewport = () => {
  const { width, height } = getViewportSize();
  const shortSide = Math.min(width, height);
  const longSide = Math.max(width, height);
  const aspectRatio = longSide / shortSide;

  return (
    isTouchViewport() &&
    shortSide >= UNFOLDED_TOUCH_MIN_SIDE &&
    longSide >= UNFOLDED_TOUCH_MIN_LONG_SIDE &&
    aspectRatio <= UNFOLDED_TOUCH_MAX_ASPECT_RATIO
  );
};

export const getIsFoldableOpen = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (!isNativeAndroid()) {
    return false;
  }

  return matchesFoldableMedia() || getIsExpandedTouchViewport();
};

export function useIsFoldableOpen() {
  const [isFoldableOpen, setIsFoldableOpen] = React.useState(getIsFoldableOpen);

  React.useEffect(() => {
    if (!isNativeAndroid()) {
      setIsFoldableOpen(false);
      return;
    }

    const mediaQueries = FOLDABLE_MEDIA_QUERIES.map((query) => window.matchMedia(query));
    const pointerQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const onChange = () => {
      setIsFoldableOpen(getIsFoldableOpen());
    };

    mediaQueries.forEach((query) => query.addEventListener("change", onChange));
    pointerQuery.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.visualViewport?.addEventListener("resize", onChange);
    onChange();

    return () => {
      mediaQueries.forEach((query) => query.removeEventListener("change", onChange));
      pointerQuery.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      window.visualViewport?.removeEventListener("resize", onChange);
    };
  }, []);

  return isFoldableOpen;
}
