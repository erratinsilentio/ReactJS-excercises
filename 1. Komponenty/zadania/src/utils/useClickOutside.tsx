import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e: React.MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};
