import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl font-headline">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just say hi? I'd love to hear from you.
        </p>
        <div className="mt-12 max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:anishojha82@gmail.com" className="text-lg text-muted-foreground hover:text-primary">anishojha82@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <span className="text-lg text-muted-foreground">+91-8939738086</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6 text-accent" />
                 <Link href="https://www.linkedin.com/in/anish-ojha/" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary">linkedin.com/in/anish-ojha</Link>
              </div>
              <div className="flex items-center gap-4">
                <Github className="h-6 w-6 text-accent" />
                <Link href="https://github.com/Anishgoofle" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary">github.com/Anishgoofle</Link>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-semibold text-primary mb-8">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
