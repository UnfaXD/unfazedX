"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import * as React from "react";

export function Counter({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion() ?? false;

  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduced) {
      node.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        node.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, decimals, prefix, suffix, reduced]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${from.toFixed(decimals)}${suffix}`}
    </span>
  );
}
