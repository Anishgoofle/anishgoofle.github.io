"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import { cx } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cx(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-accent" />
          <span>AO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent side="right">
              <nav className="flex flex-col gap-6 pt-12">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Code2 className="h-6 w-6 text-accent" />
                  <span>AO</span>
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
