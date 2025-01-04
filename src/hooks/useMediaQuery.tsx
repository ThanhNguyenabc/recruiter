"use client";

import { BreakPoints } from "@/utils/constants";
import { useEffect, useState } from "react";

export const enum PlatForm {
  "TABLET",
  "MOBILE",
  "LAPTOP",
}

const getPlatform = (width: number) => {
  if (width < BreakPoints.MOBILE) return PlatForm.MOBILE;
  if (width > BreakPoints.LAPTOP) return PlatForm.LAPTOP;
  return PlatForm.TABLET;
};

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  const platform = getPlatform(screenSize.width);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const listener = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return {
    ...screenSize,
    platform,
  };
};

export default useMediaQuery;
