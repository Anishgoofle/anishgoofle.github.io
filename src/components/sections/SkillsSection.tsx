import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Component, GitBranch, TestTubeDiagonal } from 'lucide-react';

const skillsData = {
  'Frontend': {
    icon: Component,
    skills: [
      { name: 'React & Next.js' },
      { name: 'Vue & Nuxt.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5 & CSS3/Sass' },
      { name: 'Tailwind CSS' },
    ],
  },
  'Tooling & DevOps': {
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Webpack & Rollup' },
      { name: 'Docker' },
      { name: 'CI/CD Pipelines' },
    ],
  },
   'Testing': {
    icon: TestTubeDiagonal,
    skills: [
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Playwright' },
    ],
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          Technical Skills
        </h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          A collection of technologies I use to bring ideas to life. I'm always learning and adapting to new tools.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, { icon: Icon, skills }]) => (
            <Card key={category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-accent" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li key={skill.name} className="flex items-center text-muted-foreground">
                       <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3"></span>
                       {skill.name}
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
