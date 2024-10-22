"use client";

import { BreakPoints } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const getBreakPoint = (width: number) => {
  if (width < BreakPoints.MOBILE) return BreakPoints.MOBILE;
  if (width > BreakPoints.LAPTOP) return BreakPoints.LAPTOP;
  return BreakPoints.TABLET;
};

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState({
    width: window?.innerWidth || 0,
    height: window?.innerHeight || 0,
  });
  const breakPoint = getBreakPoint(screenSize.width);

  useEffect(() => {
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
    breakPoint,
  };
};

export default useMediaQuery;
