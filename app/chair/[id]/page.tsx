      'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollRevealSection } from '@/components/scroll-reveal-section';
import { ChairCard } from '@/components/chair-card';

// Mock data for a single chair
const chairData = {
  id: 'contour-lounge',
  name: 'The Contour Lounge Chair',
  price: '$1,299',
  description: 'Our flagship chair combines Scandinavian minimalism with ergonomic design. The gentle curves and premium leather upholstery create a statement piece that's as comfortable as it is beautiful.',
  details: {
    dimensions: '31.5"W x 32.7"D x 27.6"H',
    materials: 'Solid oak frame, premium full-grain leather',
    colors: ['Black', 'Tan', 'Navy Blue', 'Forest Green'],
    features: ['Ergonomic design', 'Handcrafted construction', '10-year warranty', 'Free delivery']
  },
  images: [
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop'
  ],
  related: [
    {
      name: 'Nordic Minimalist Chair',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
      category: 'Dining'
    },
    {
      name: 'Curved Accent Chair',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop',
      category: 'Living Room'
    },
    {
      name: 'Ergonomic Office Chair',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop',
      category: 'Office'
    }
  ]
};

export default function ChairPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(chairData.details.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chair Images */}
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-muted mb-4"
            >
              <Image 
                src={chairData.images[activeImage]} 
                alt={chairData.name} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {chairData.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-md ${activeImage === index ? 'ring-2 ring-primary' : ''}`}
                >
                  <Image 
                    src={image} 
                    alt={`${chairData.name} view ${index + 1}`} 
                    fill 
                    className="object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Chair Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2">{chairData.name}</h1>
              <div className="text-2xl font-semibold text-primary mb-4">{chairData.price}</div>
              <p className="text-muted-foreground">{chairData.description}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {chairData.details.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md border ${selectedColor === color ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted/50'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Quantity</h3>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="pt-6 flex gap-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>
            
            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <p className="text-muted-foreground">{chairData.details.materials}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {chairData.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="dimensions" className="space-y-4 pt-4">
                <div>
                  <h3 className="font-medium mb-2">Product Dimensions</h3>
                  <p className="text-muted-foreground">{chairData.details.dimensions}</p>
                </div>
                <div className="aspect-video relative bg-muted rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Dimensions diagram
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="space-y-4 pt-4">
                <div>
                  <h3 className="font-medium mb-2">Delivery Information</h3>
                  <p className="text-muted-foreground">
                    Free shipping on all orders over $999. Standard delivery takes 3-5 business days.
                    White glove delivery and assembly service available for an additional fee.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Returns</h3>
                  <p className="text-muted-foreground">
                    30-day return policy. Return shipping is free for defective items.
                    A 15% restocking fee may apply for non-defective returns.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <ScrollRevealSection>
            <h2 className="text-3xl font-bold mb-12 text-center">You May Also Like</h2>
          </ScrollRevealSection>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {chairData.related.map((chair, index) => (
              <ChairCard 
                key={index}
                name={chair.name}
                price={chair.price}
                image={chair.image}
                category={chair.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}