import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import chatImg from '@/assets/chat-app.png';

type CaseStudy = {
  title: string;
  context: string;
  work: string[];
  outcome: string;
  stack: string[];
};

// Written from the current resume. The internal package name is generalised on purpose.
const caseStudies: CaseStudy[] = [
  {
    title: 'Shared UI widget library',
    context: 'Merchant platform and external consoles',
    work: [
      'Architected a Rollup-built shared UI widget library.',
      'Dual-consumed through workspace linking internally and as a published npm package by external consoles.',
      'Built config-driven abstractions aligned with design system principles.',
    ],
    outcome: 'Reduced feature development effort by 40% and improved team productivity by 35%.',
    stack: ['Rollup', 'npm packaging', 'Config-driven UI', 'Design systems'],
  },
  {
    title: 'Performance-first i18n',
    context: 'Merchant web platform',
    work: [
      'Designed a hybrid model with a build-time core and lazy-loaded locale modules.',
      'Added safe fallbacks and a backward-compatible migration path.',
    ],
    outcome: 'Enabled multi-region rollout and unblocked new geographic markets.',
    stack: ['i18n', 'Lazy loading', 'Migration'],
  },
  {
    title: 'Monorepo migration and TypeScript 5',
    context: 'Merchant platform',
    work: [
      'Architected the monorepo migration, centralizing utilities, CSRF handling and shared packages.',
      'Migrated all modules to TypeScript v5 with Rollup and Jest, standardizing code review.',
    ],
    outcome: 'Reduced integration failures by 70%.',
    stack: ['Monorepo', 'TypeScript 5', 'Rollup', 'Jest'],
  },
  {
    title: 'Testing strategy and code health',
    context: 'Core merchant repositories',
    work: [
      'Raised unit test coverage while eliminating 200+ SonarQube code smells.',
      'Reduced security hotspots by 85%, reinforcing testable architecture and production reliability.',
    ],
    outcome: 'Unit test coverage went from 23% to 87%.',
    stack: ['Jest', 'React Testing Library', 'SonarQube'],
  },
  {
    title: 'On-demand settlement rollout',
    context: 'Merchant platform',
    work: [
      'Integrated the on-demand settlement flow through a staged feature-flag rollout to de-risk the launch.',
      'Revamped email onboarding flows.',
    ],
    outcome: 'Merchants got instant access to processed funds, creating a new premium revenue stream. Email skip rate dropped by 83%.',
    stack: ['Feature flags', 'Staged rollout', 'Onboarding'],
  },
  {
    title: 'reCAPTCHA to hCaptcha migration',
    context: 'Merchant platform',
    work: [
      'Led the migration end to end, from proof of concept through integration and documentation.',
      'Mentored engineers through the rollout.',
    ],
    outcome: 'Reduced developer onboarding effort by 10–20%.',
    stack: ['hCaptcha', 'Security', 'Documentation'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          index="03"
          label="Selected work"
          title="Platform work that makes everything else easier to ship"
          description="Internal system names are generalised here. Happy to go deeper on any of these in conversation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="group flex flex-col shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <CardHeader>
                <p className="font-code text-xs tracking-wide text-accent">{study.context}</p>
                <CardTitle className="font-headline text-2xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col gap-4">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-accent">
                  {study.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="rounded-lg border border-accent/30 bg-accent/10 p-3 text-sm">
                  <span className="font-semibold text-primary">Outcome: </span>
                  <span className="text-muted-foreground">{study.outcome}</span>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {study.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mt-20 font-headline text-2xl font-semibold tracking-tight text-primary">Side projects</h3>
        <div className="mt-6 max-w-md">
          <Card className="flex flex-col overflow-hidden shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50">
            <CardContent className="p-0">
              <Image
                src={chatImg}
                alt="Screenshot of the Roundtable chat app sign-in screen"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
            </CardContent>
            <div className="flex flex-grow flex-col p-6">
              <CardHeader className="mb-4 p-0">
                <CardTitle className="font-headline text-xl">Roundtable chat</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-0">
                <p className="mb-4 text-muted-foreground">
                  A small real-time chat prototype. Sign in with a name and a room ID, then share the room link with
                  anyone you want to talk to.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Socket.IO</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3 p-0 pt-6">
                <Button asChild variant="ghost" size="sm">
                  <Link href="https://github.com/Anishgoofle/chat-app" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="https://roundtable-tk.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live demo
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
