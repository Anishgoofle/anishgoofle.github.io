import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          About Me
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg w-full max-w-sm">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/600"
                  alt="A portrait of Anish Ojha"
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                  data-ai-hint="professional portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Anish, a frontend engineer with over a decade of experience in crafting beautiful, performant, and accessible digital products. My journey in tech began with a curiosity for how things work, which evolved into a career dedicated to building intuitive interfaces that delight users.
            </p>
            <h3 className="text-xl font-semibold text-primary">My Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that great software is born from a blend of art and science. My frontend philosophy centers on three pillars: user-centricity, robust architecture, and continuous improvement. I strive to write code that is not only functional but also maintainable and scalable, ensuring long-term value for any project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring hiking trails, contributing to open-source projects, or experimenting with new coffee brewing methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
