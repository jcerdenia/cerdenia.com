import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

const useInnerWidth = (): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setWidth(window.innerWidth);
    }, 250); // Call function at most once per 250 ms.

    setWidth(window.innerWidth); // Set initial width.

    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return width;
};

export default useInnerWidth;
