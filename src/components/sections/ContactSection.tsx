import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's talk"
          description="Hiring for a frontend or platform role, or want to talk shop? Email is the fastest way to reach me."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <a
              href="mailto:anishojha82@gmail.com"
              className="flex items-center gap-3 break-all font-headline text-xl font-semibold text-primary hover:text-accent sm:text-2xl"
            >
              <Mail className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden="true" />
              anishojha82@gmail.com
            </a>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.linkedin.com/in/anish-ojha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5 text-accent" aria-hidden="true" />
                  linkedin.com/in/anish-ojha
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Anishgoofle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5 text-accent" aria-hidden="true" />
                  github.com/Anishgoofle
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
