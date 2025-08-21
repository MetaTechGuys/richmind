// useScrollPosition.js
import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Set initial position

    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // Empty dependency array ensures it runs only once on mount and cleans up on unmount

  return scrollPosition;
};

export default useScrollPosition;