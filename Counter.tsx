import { useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function Counter({
  value,
  suffix = '',
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(
              Math.floor(latest)
            );
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
