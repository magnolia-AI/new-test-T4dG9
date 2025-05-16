      'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ChairCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
  index: number;
}

export function ChairCard({ name, price, image, category, index }: ChairCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-all duration-300 hover:scale-105" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="text-sm text-muted-foreground mb-2">{category}</div>
          <h3 className="text-xl font-medium mb-2">{name}</h3>
          <div className="text-lg font-semibold mb-4">{price}</div>
          <div className="mt-auto flex gap-2">
            <Button className="flex-1">Add to Cart</Button>
            <Button variant="outline" size="icon">
              <HeartIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
