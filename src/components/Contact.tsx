import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ruthrabalan@example.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-mono text-sm">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Let's Collaborate on
            <br />
            <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Interested in AI/ML research, CAD automation, or computer vision projects? 
            I'm always open to discussing innovative engineering solutions and collaboration opportunities.
          </p>
          
          {/* CTA Button */}
          <Button variant="glow" size="xl" className="mb-12">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-xl border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Email Display */}
          <div className="mt-10">
            <a
              href="mailto:ruthrabalan@example.com"
              className="font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              ruthrabalan@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
