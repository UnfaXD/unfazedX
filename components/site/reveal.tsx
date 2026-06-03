"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const distance = 32;

function getVariants(direction: Direction, reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  const { x, y } = offsets[direction];
  return {
    hidden: { opacity: 0, x, y, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
  };
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as: Tag = "div",
  amount = 0.2,
  once = true,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "ul" | "span" | "p";
  amount?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants(direction, reduced)}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      className={className}
      variants={getVariants(direction, reduced)}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
