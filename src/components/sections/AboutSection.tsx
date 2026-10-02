import SectionHeading from '@/components/SectionHeading';

const facts = [
  { label: 'Focus', value: 'Fintech web applications' },
  { label: 'Currently', value: 'Senior Software Engineer, Frontend at PhonePe' },
  { label: 'Also', value: 'Frontend interviewer and mentor' },
  { label: 'Outside work', value: 'Music, space, anime and cooking' },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading index="01" label="About" title="Building interfaces people trust with their money" />
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              Hi, I'm Anish, a frontend engineer with 8+ years of experience building performant, accessible products for
              fintech. My journey in tech began with a curiosity for how things work, and it has grown into a
              career of building interfaces that people can trust with their money.
            </p>
            <p>
              I believe great software is a blend of art and science. My approach centres on three things, users first,
              robust architecture, and continuous improvement. I try to write code that is functional, maintainable and
              scalable, so it keeps its value long after the first release.
            </p>
          </div>
          <dl className="space-y-5 rounded-xl border border-border bg-card p-6 lg:col-span-2">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-code text-xs uppercase tracking-wider text-accent">{f.label}</dt>
                <dd className="mt-1 text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
