"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import ThemeToggle from '@/components/layout/ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Monogram() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-code text-sm font-medium text-accent-foreground">
      AO
    </span>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Anish Ojha, home">
          <Monogram />
          <span className="hidden font-headline text-lg font-semibold text-primary sm:inline">Anish Ojha</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent side="right">
              <nav className="flex flex-col gap-6 pt-12" aria-label="Mobile">
                <Link href="/" className="mb-4 flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <Monogram />
                  <span className="font-headline text-lg font-semibold">Anish Ojha</span>
                </Link>
                {navLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
