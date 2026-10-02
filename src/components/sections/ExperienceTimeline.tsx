import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';

// Wording follows the current resume. The internal package name is intentionally generalised.
const experiences = [
  {
    role: "Senior Software Engineer (Frontend)",
    company: "PhonePe",
    period: "Sep 2023 - Present",
    contributions: [
      "Architected monorepo migration centralizing utilities, CSRF handling, and shared packages. Migrated all modules to TypeScript v5 with Rollup and Jest, standardizing code review and reducing integration failures by 70%.",
      "Architected a Rollup-built shared UI widget library dual-consumed via workspace linking internally and as a published npm package by external consoles. Its config-driven abstractions, aligned with design system principles, reduced feature development effort by 40% and improved team productivity by 35%.",
      "Designed a performance-first i18n hybrid model (build-time core + lazy-loaded locale modules) for the merchant web platform, enabling multi-region rollout with safe fallbacks and backward-compatible migration, unblocking new geographic markets.",
      "Increased unit test coverage from 23% to 87% across core merchant repositories, eliminating 200+ SonarQube code smells and reducing security hotspots by 85%, reinforcing testable architecture and production reliability.",
      "Worked within a Fastify-based Node BFF layer fronting multiple downstream services, integrating merchant-facing pages against aggregated responses and handling partial-failure and loading states.",
      "Introduced a sidecar proxy layer between Nginx and backend services for dynamic, service-discovery-driven routing.",
      "Integrated on-demand settlement flow via a staged feature-flag rollout to de-risk the launch, giving merchants instant access to processed funds and generating a new premium revenue stream. Revamped email onboarding flows, dropping skip rate by 83%.",
      "Strengthened CI/CD pipelines with ESLint, SonarQube, and MR checks (preventing 70% of integration issues) and delivered Core Web Vitals improvements via Dashboard v2, skeleton loaders, and a 62.5% rem strategy, improving LCP and reducing layout shift.",
      "Led reCAPTCHA → hCaptcha migration end-to-end (POC, integration, documentation), mentoring engineers through the rollout and reducing developer onboarding effort by 10–20%.",
    ],
  },
  {
    role: "Senior Software Engineer (Frontend)",
    company: "Paytm",
    period: "Mar 2021 - Aug 2023",
    contributions: [
      "Built performant, scalable React web applications for search, offers, payments, and checkout flows, collaborating cross-functionally with designers, PMs, and backend engineers, enabling faster user transactions at scale for one of India's largest fintech platforms.",
      "Reduced page load times by 30% and network overhead by 25% through skeleton loaders, request memoization, and code splitting, directly improving Core Web Vitals and user retention.",
      "Implemented a robust multi-scenario checkout flow (banking, EMI, promo-offers) integrated with RESTful APIs, and introduced a common Auth interceptor with auto-retry, streamlining purchases and improving API reliability.",
      "Set up Sentry and Kibana alerting for production monitoring, acting as first responder for live-site incidents and reducing MTTR. Maintained code quality via Webpack, Babel, and ESLint, and mentored junior developers on React best practices.",
    ],
  },
  {
    role: "Software Engineer (Frontend)",
    company: "MatchMove Pay",
    period: "Aug 2018 - Mar 2021",
    contributions: [
      "Engineered a cross-border remittance platform using React, enabling a 15% reduction in transaction costs for B2B clients compared to traditional banking rails.",
      "Built interactive user-activity dashboards with Chart.js and responsive mobile views (HTML5/CSS3). Contributed to greenfield frontend architecture, establishing reusable component patterns adopted across the team.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading index="02" label="Experience" title="Where I've worked" />
        <ol className="relative mt-12 max-w-4xl space-y-8 border-l border-border pl-6 md:pl-10">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative">
              <span
                className="absolute -left-[1.9rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-background bg-accent md:-left-[2.9rem]"
                aria-hidden="true"
              />
              <Card className="w-full shadow-none transition-colors hover:border-accent/50">
                <CardHeader>
                  <p className="font-code text-xs tracking-wide text-muted-foreground">{exp.period}</p>
                  <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base font-medium text-accent">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-accent">
                    {exp.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
