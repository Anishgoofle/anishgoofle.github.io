import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Alex Doe
          </h1>
          <p className="mt-4 text-lg text-accent md:text-xl font-medium">
            Senior Frontend Engineer
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            I specialize in building exceptional, high-quality websites and applications. With a passion for clean code and user-centric design, I turn complex problems into elegant digital experiences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                Contact Me <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
