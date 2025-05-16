      'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface FeaturedChairProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  reverse?: boolean;
}

export function FeaturedChair({ 
  title, 
  description, 
  price, 
  imageUrl,
  reverse = false 
}: FeaturedChairProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
        <div className="text-2xl font-semibold">{price}</div>
        <div className="flex gap-4">
          <Button size="lg">Add to Cart</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`order-first ${reverse ? 'md:order-last' : 'md:order-first'}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
      EOF