import { useEffect, useRef, useState } from "react";

const useObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const savedRef = useRef(null);

  useEffect(() => {
    savedRef.current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (savedRef.current) {
        observer.unobserve(savedRef.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useObserver;
