"use client";

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

// No React state on purpose: the <html> class is the single source of truth, and
// both icons are always rendered (CSS picks one), so there is nothing to mismatch
// between server and client.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const nextDark = !root.classList.contains('dark');
    root.classList.toggle('dark', nextDark);
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      data-theme-toggle
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
