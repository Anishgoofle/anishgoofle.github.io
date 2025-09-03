import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: "Senior Web Engineer",
    company: "Phonepe",
    period: "Sep 2023 - Present",
    description: "Led the development of a next-generation design system and component library, improving developer velocity by 40%.",
    contributions: [
      "Architected and implemented a scalable frontend for a flagship SaaS product.",
      "Mentored junior engineers and established best practices for code reviews.",
      "Optimized application performance, reducing load times by 60%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Paytm",
    period: "Mar 2021 - Sep 2023",
    description: "Developed and maintained responsive user interfaces for a variety of client websites and web applications.",
    contributions: [
      "Built and optimized scalable React applications, improving load speed and reducing native app size by 11 MB with platform-agnostic integration.",
      "Delivered end-to-end features (search, offers, payments, checkout flows including EMI and promo offers) integrated with RESTful APIs.",
      "Enhanced user experience with performance optimizations, skeleton loaders, and close collaboration with designers for UI/UX quality.",
      "Improved reliability and team standards by implementing Auth interceptor with auto-retry, setting up Sentry/Kibana monitoring, mentoring juniors, and leading code reviews."
    ],
  },
  {
    role: "Junior Web Developer",
    company: "MatchMove Pay Pvt Ltd",
    period: "Aug 2018 - Mar 2021",
    description: "Assisted in the development and maintenance of company and client websites using HTML, CSS, and JavaScript.",
    contributions: [
      "Worked on an innovative remittance platform UI enabling businesses to cut costs on overseas transfers compared to traditional banks.",
      "Performed cross-browser testing and debugging.",
      "Built interactive dashboards with Chart.js to visualize user activity statistics.",
      "Implemented responsive design to ensure seamless mobile experience.",
      "Gained foundational knowledge in version control with Git.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          Work Experience
        </h2>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                <Card className={`w-full shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} md:w-[calc(50%-2rem)]`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-base text-accent">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {exp.contributions.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
