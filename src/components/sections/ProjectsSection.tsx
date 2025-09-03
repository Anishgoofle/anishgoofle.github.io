import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich e-commerce site with a custom CMS, product filtering, and a secure checkout process.',
    image: 'https://source.unsplash.com/600x400/?online,store',
    imageHint: 'online store',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    image: 'https://source.unsplash.com/600x400/?dashboard,analytics',
    imageHint: 'dashboard analytics',
    stack: ['React', 'Redux', 'Firebase', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with a focus on performance and design.',
    image: 'https://source.unsplash.com/600x400/?portfolio,website',
    imageHint: 'portfolio website',
    stack: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://anishojha.netlify.app',
    githubUrl: 'https://github.com/Anishgoofle/portfolio',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I'm proud to have worked on. Each one represents a unique challenge and learning opportunity.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardContent>
              <div className="p-6 flex flex-col flex-grow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6 flex justify-end gap-4">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
