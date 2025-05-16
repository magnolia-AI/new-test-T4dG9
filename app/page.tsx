'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ParallaxSection } from '@/components/parallax-section'
import { AnimatedFeature } from '@/components/animated-feature'
import { ChairCard } from '@/components/chair-card'
import { FeaturedChair } from '@/components/featured-chair'
import { ScrollRevealSection } from '@/components/scroll-reveal-section'
import { QualityIcon, SustainableIcon, ComfortIcon, QuoteIcon } from '@/components/icons'

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
        title="Modern Chairs for Modern Spaces"
        subtitle="Discover our collection of premium designer chairs crafted for comfort and style"
      />

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-24">
        <ScrollRevealSection>
          <div className="max-w-[800px] mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight mb-6"
            >
              Elevate Your Space
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground mb-12"
            >
              Our chairs are more than just furniture—they're statements of design excellence. 
              Each piece is carefully crafted by renowned designers using premium materials 
              to create the perfect balance of aesthetics and comfort.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="px-8">Shop Collection</Button>
              <Button size="lg" variant="outline" className="px-8">Our Story</Button>
            </motion.div>
          </div>
        </ScrollRevealSection>
      </section>

      {/* Featured Chair Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <FeaturedChair 
            title="The Contour Lounge Chair"
            description="Our flagship chair combines Scandinavian minimalism with ergonomic design. The gentle curves and premium leather upholstery create a statement piece that's as comfortable as it is beautiful."
            price=",299"
            imageUrl="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose ModernChair
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-[600px] mx-auto"
          >
            We're committed to quality, sustainability, and timeless design
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <AnimatedFeature 
            icon={<QualityIcon className="h-8 w-8" />}
            title="Premium Quality"
            description="Each chair is crafted with meticulous attention to detail using only the finest materials."
            index={0}
          />
          <AnimatedFeature 
            icon={<SustainableIcon className="h-8 w-8" />}
            title="Sustainable Design"
            description="We're committed to eco-friendly production methods and sustainable materials."
            index={1}
          />
          <AnimatedFeature 
            icon={<ComfortIcon className="h-8 w-8" />}
            title="Ergonomic Comfort"
            description="Our designs prioritize comfort with ergonomic principles for long-term sitting."
            index={2}
          />
        </div>
      </section>

      {/* Collection Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Explore Our Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-[600px] mx-auto"
          >
            Discover our range of designer chairs for every space and style
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <ChairCard 
            name="Nordic Minimalist Chair"
            price="99"
            image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop"
            category="Dining"
            index={0}
          />
          <ChairCard 
            name="Curved Accent Chair"
            price="99"
            image="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"
            category="Living Room"
            index={1}
          />
          <ChairCard 
            name="Ergonomic Office Chair"
            price="99"
            image="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop"
            category="Office"
            index={2}
          />
          <ChairCard 
            name="Modern Lounge Chair"
            price=",199"
            image="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop"
            category="Living Room"
            index={3}
          />
          <ChairCard 
            name="Scandinavian Dining Chair"
            price="99"
            image="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop"
            category="Dining"
            index={4}
          />
          <ChairCard 
            name="Minimalist Bar Stool"
            price="99"
            image="https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1972&auto=format&fit=crop"
            category="Bar"
            index={5}
          />
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">View All Chairs</Button>
        </div>
      </section>

      {/* Second Featured Chair */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <FeaturedChair 
            title="The Aria Dining Chair"
            description="Elegant and functional, the Aria combines smooth curves with sturdy construction. Perfect for both formal dining spaces and casual kitchen settings."
            price="99"
            imageUrl="https://images.unsplash.com/photo-1549517045-bc93de075e53?q=80&w=1974&auto=format&fit=crop"
            reverse={true}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative px-10 py-8 bg-accent rounded-xl mb-8"
          >
            <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
            <p className="text-lg italic mb-6">
              "The Contour Lounge Chair transformed my living room. It's not just a piece of furniture—it's a work of art that happens to be incredibly comfortable. Worth every penny."
            </p>
            <p className="font-semibold">— Sarah J., Interior Designer</p>
          </motion.div>
          
          <Button variant="outline" className="px-8 mt-8">
            Read More Reviews
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[600px] mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Join Our Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              Subscribe to our newsletter for exclusive offers, design tips, and first access to new releases.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md bg-primary-foreground text-primary"
              />
              <Button variant="secondary" className="whitespace-nowrap">Subscribe</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icons
function QualityIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.5 22h-5a2 2 0 0 1-2-2v-7l7-7 7 7v7a2 2 0 0 1-2 2h-5" />
      <path d="M11.5 7.5V4a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5" />
      <path d="M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z" />
    </svg>
  )
}

function SustainableIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 22c1.25-1.25 2.5-2.5 3.5-4 .83-1.25 1.5-2.5 2-4 .5-1.5.5-3 .5-4.5s.08-3.08.24-4.58c.14-1.3.5-2.55 1.17-3.67.27-.45.58-.89.91-1.25" />
      <path d="M7 22c1.25-1.25 2.5-2.5 3.5-4 .83-1.25 1.5-2.5 2-4 .5-1.5.5-3 .5-4.5s.08-3.08.24-4.58c.14-1.3.5-2.55 1.17-3.67.27-.45.58-.89.91-1.25" />
      <path d="M12 22c1.25-1.25 2.5-2.5 3.5-4 .83-1.25 1.5-2.5 2-4 .5-1.5.5-3 .5-4.5s.08-3.08.24-4.58c.14-1.3.5-2.55 1.17-3.67.27-.45.58-.89.91-1.25" />
      <path d="M17 22c1.25-1.25 2.5-2.5 3.5-4 .83-1.25 1.5-2.5 2-4 .5-1.5.5-3 .5-4.5s.08-3.08.24-4.58c.14-1.3.5-2.55 1.17-3.67.27-.45.58-.89.91-1.25" />
    </svg>
  )
}

function ComfortIcon(props: React.SVGProps<SVGSVGElement>) {
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
  )
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

