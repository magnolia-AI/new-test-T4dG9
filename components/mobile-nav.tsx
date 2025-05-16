      'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-3 text-lg hover:bg-accent rounded-md transition-colors"
          >
            Collection
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-3 text-lg hover:bg-accent rounded-md transition-colors"
          >
            Designers
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-3 text-lg hover:bg-accent rounded-md transition-colors"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-3 text-lg hover:bg-accent rounded-md transition-colors"
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
