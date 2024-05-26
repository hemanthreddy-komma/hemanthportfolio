import { useEffect, useRef, useState } from "react";

const useObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const savedRef = useRef(null); // <-- Store ref.current in a separate ref

  useEffect(() => {
    savedRef.current = ref.current; // <-- Store ref.current

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
        observer.unobserve(savedRef.current); // <-- Use the stored ref.current
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useObserver;
