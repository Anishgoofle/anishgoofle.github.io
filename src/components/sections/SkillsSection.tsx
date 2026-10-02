import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accessibility,
  Code2,
  Gauge,
  Globe,
  Layers,
  Network,
  Server,
  ShieldCheck,
  TestTubeDiagonal,
  Users,
  Wrench,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

// Categories and items follow the current resume.
const skillsData = [
  {
    category: 'Languages & Frameworks',
    icon: Code2,
    skills: ['TypeScript (v5)', 'JavaScript (ES2023+)', 'React 18', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'SASS/SCSS'],
  },
  {
    category: 'State Management & APIs',
    icon: Network,
    skills: ['Redux', 'Zustand', 'React Query / TanStack Query', 'Context API', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Build & Tooling',
    icon: Wrench,
    skills: ['Webpack', 'Rollup', 'Vite', 'Babel', 'pnpm workspaces', 'ESLint', 'SonarQube', 'Storybook', 'CI/CD', 'npm/yarn'],
  },
  {
    category: 'Testing',
    icon: TestTubeDiagonal,
    skills: ['Jest', 'React Testing Library', 'Playwright (E2E)', 'Unit / Integration / E2E Testing', 'Code Review'],
  },
  {
    category: 'Performance',
    icon: Gauge,
    skills: ['Core Web Vitals (LCP, CLS, FID)', 'Code Splitting', 'Lazy Loading', 'Tree Shaking', 'Lighthouse'],
  },
  {
    category: 'Architecture Patterns',
    icon: Layers,
    skills: [
      'Monorepo',
      'Shared Component Libraries',
      'Dual-Consumption Packaging',
      'Config-driven UI',
      'i18n Architecture',
      'Design Systems',
      'BFF Integration',
      'Testable Architecture',
    ],
  },
  {
    category: 'Infrastructure & DevOps',
    icon: Server,
    skills: [
      'GitHub Actions',
      'GitLab CI',
      'Docker (basics)',
      'Nginx',
      'Fastify',
      'Sentry',
      'Kibana',
      'Feature Flags',
      'Safe Deployment & Rollback',
    ],
  },
  {
    category: 'Browser APIs',
    icon: Globe,
    skills: ['Service Workers', 'PWA', 'Web Workers', 'LocalStorage', 'WebSockets'],
  },
  {
    category: 'Security',
    icon: ShieldCheck,
    skills: ['CSRF Handling', 'hCaptcha / reCAPTCHA', 'Security Hotspot Remediation', 'OWASP Best Practices'],
  },
  {
    category: 'Accessibility',
    icon: Accessibility,
    skills: ['WCAG 2.1', 'Semantic HTML', 'ARIA', 'Keyboard Navigation'],
  },
  {
    category: 'Methodologies',
    icon: Users,
    skills: [
      'Agile / Scrum',
      'Cross-functional Collaboration',
      'Code Reviews',
      'Mentoring',
      'Technical Documentation',
      'AI-Assisted Development (Claude / Claude Code)',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          index="04"
          label="Skills"
          title="What I work with"
          description="The tools I use day to day, and the engineering practices that go with them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map(({ category, icon: Icon, skills }) => (
            <Card key={category} className="shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
