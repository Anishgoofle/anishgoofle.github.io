import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'SRM University',
    details: 'May 2018 | Chennai, TN, India',
    gpa: 'GPA: 9.28 / 10',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading index="05" label="Education" title="Where I studied" />
        <div className="mt-12 max-w-xl space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="flex gap-4">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-accent/10">
                <GraduationCap className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="font-medium text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.details}</p>
                <p className="text-sm font-medium text-accent">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
