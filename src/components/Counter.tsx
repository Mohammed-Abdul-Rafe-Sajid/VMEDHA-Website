import { useEffect, useState, useRef } from "react";

interface CounterProps {
  targetNumber: number;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ targetNumber, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true); // Start counting ONLY when visible
        }
      },
      { threshold: 0.6 } // 60% visibility before triggering
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = targetNumber / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, targetNumber, duration]);

  return <span ref={ref}>{count}+</span>;
};
