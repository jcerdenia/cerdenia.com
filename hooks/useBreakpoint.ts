import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

// Code based on the following tutorial:
// https://betterprogramming.pub/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568

type Breakpoint = string | null;

// These values are based on Bootstrap's breakpoints:
const getDeviceConfig = (width: number): Breakpoint => {
  switch (true) {
    case width < 576:
      return "xs";

    case width >= 576 && width < 768:
      return "sm";

    case width >= 768 && width < 992:
      return "md";

    case width >= 992 && width < 1200:
      return "lg";

    case width >= 1200 && width < 1440:
      return "xl";

    default:
      return "xxl";
  }
};

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(null);

  useEffect(() => {
    // Set initial breakpoint:
    setBreakpoint(getDeviceConfig(window.innerWidth));
  }, []);

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200); // Invoke function at most once per 200 millis.

    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
