      'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChairCard } from '@/components/chair-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for chairs collection
const chairs = [
  {
    id: 'nordic-minimalist',
    name: 'Nordic Minimalist Chair',
    price: '$699',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
    category: 'Dining'
  },
  {
    id: 'curved-accent',
    name: 'Curved Accent Chair',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop',
    category: 'Living Room'
  },
  {
    id: 'ergonomic-office',
    name: 'Ergonomic Office Chair',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop',
    category: 'Office'
  },
  {
    id: 'modern-lounge',
    name: 'Modern Lounge Chair',
    price: '$1,199',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop',
    category: 'Living Room'
  },
  {
    id: 'scandinavian-dining',
    name: 'Scandinavian Dining Chair',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop',
    category: 'Dining'
  },
  {
    id: 'minimalist-bar',
    name: 'Minimalist Bar Stool',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1972&auto=format&fit=crop',
    category: 'Bar'
  },
  {
    id: 'contour-lounge',
    name: 'The Contour Lounge Chair',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop',
    category: 'Living Room'
  },
  {
    id: 'aria-dining',
    name: 'The Aria Dining Chair',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?q=80&w=1974&auto=format&fit=crop',
    category: 'Dining'
  },
  {
    id: 'executive-office',
    name: 'Executive Office Chair',
    price: '$1,099',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1976&auto=format&fit=crop',
    category: 'Office'
  }
];

export default function CollectionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', ...new Set(chairs.map(chair => chair.category))];
  
  const filteredChairs = chairs.filter(chair => {
    const matchesSearch = chair.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || chair.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-full">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[800px] mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Discover our complete range of designer chairs for every space and style
            </p>
            <div className="max-w-md mx-auto">
              <Input 
                type="search" 
                placeholder="Search chairs..." 
                className="w-full" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        <Tabs 
          defaultValue="all" 
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        
        {filteredChairs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {filteredChairs.map((chair, index) => (
              <ChairCard 
                key={chair.id}
                name={chair.name}
                price={chair.price}
                image={chair.image}
                category={chair.category}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-4">No chairs found</h3>
            <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
            <Button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
