import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/anish.jpeg';

const stats = [
  { value: '8+', label: 'years in frontend' },
  { value: '3', label: 'fintech companies' },
  { value: '23% \u2192 87%', label: 'test coverage across core repos' },
];

// Four things I actually build. The animation shows them one at a time; the full
// list is also exposed to screen readers so nothing depends on the motion.
const building = ['shared component libraries', 'monorepo tooling', 'testing strategy', 'payment experiences'];

const techStrip = [
  'React',
  'Next.js',
  'TypeScript',
  'Zustand',
  'Rollup',
  'Monorepos',
  'Jest',
  'React Testing Library',
  'Playwright',
  'SonarQube',
  'i18n',
  'CI/CD',
  'Sentry',
];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

function StripItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-track font-code text-sm text-muted-foreground" aria-hidden={hidden || undefined}>
      {techStrip.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap">
          {item}
          <span className="text-accent" aria-hidden="true">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="animate-drift pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-28">
        {/* Text column */}
        <div>
          <p
            className="animate-fade-up flex items-center gap-3 font-code text-sm tracking-wide text-accent"
            style={delay(0)}
          >
            Senior Software Engineer, Frontend
          </p>

          <div className="animate-fade-up mt-5 flex items-center gap-4 sm:gap-5" style={delay(80)}>
            <Image
              src={heroImg}
              alt="Portrait of Anish Ojha"
              width={160}
              height={160}
              priority
              placeholder="blur"
              className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-accent/60 ring-offset-2 ring-offset-background sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />
            <h1 className="font-headline text-4xl font-semibold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              Anish Ojha
            </h1>
          </div>

          {/* Cycling line: pure CSS, one word group visible at a time */}
          <p
            className="animate-fade-up mt-4 font-headline text-xl text-muted-foreground sm:text-3xl xl:text-4xl"
            style={delay(160)}
          >
            <span className="sr-only">I build {building.join(', ')}.</span>
            <span aria-hidden="true">
              I build
              <span className="block h-[1.3em] overflow-hidden">
                <span className="animate-word-cycle block">
                  {[...building, building[0]].map((word, i) => (
                    <span key={`${word}-${i}`} className="block h-[1.3em] whitespace-nowrap italic text-accent">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </p>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={delay(240)}>
            I've spent 8+ years building fintech web applications in TypeScript and React, currently at PhonePe. I focus on
            monorepo architecture, shared component libraries, and config-driven platforms, with a strong emphasis on testable
            code and Core Web Vitals.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={delay(320)}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#projects">View selected work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/Anish_Ojha.pdf" target="_blank" rel="noopener noreferrer">
                Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <dl
            className="animate-fade-up mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
            style={delay(400)}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-headline text-2xl font-semibold text-primary">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Tech strip */}
      <div className="relative border-t border-border bg-background/60 py-5 backdrop-blur-sm">
        <div className="marquee" role="group" aria-label="Technologies I work with">
          <StripItems />
          <StripItems hidden />
        </div>
      </div>
    </section>
  );
}
