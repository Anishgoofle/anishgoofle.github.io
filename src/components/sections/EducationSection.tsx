import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Stanford University",
    year: "2015",
  },
  {
    degree: "B.S. in Software Engineering",
    institution: "University of California, Berkeley",
    year: "2013",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          Education
        </h2>
        <div className="mt-12 max-w-xl mx-auto">
          <div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-accent font-medium">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
