      'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function AnimatedFeature({ icon, title, description, index }: AnimatedFeatureProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      variants={variants}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="mb-4 text-primary p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
EOF
