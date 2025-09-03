import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex gap-4">
          <Link href="https://github.com/Anishgoofle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/anish-ojha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="mailto:anishojha82@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Anish Ojha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
