      'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

export function ScrollRevealSection({ 
  children, 
  direction = 'up', 
  delay = 0 
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: 100, y: 0 };
      case 'right': return { x: -100, y: 0 };
      case 'up': return { x: 0, y: 100 };
      case 'down': return { x: 0, y: -100 };
      default: return { x: 0, y: 100 };
    }
  };

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [direction === 'left' ? 100 : direction === 'right' ? -100 : 0, 0]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [direction === 'up' ? 100 : direction === 'down' ? -100 : 0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ x, y, opacity }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
      EOF