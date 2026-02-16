import { Sparkles } from 'lucide-react';

const WhatMakesMeDifferent = () => {
  return (
    <section id="different" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-12">
          <span className="text-primary font-mono text-sm">// EDGE</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Makes Me
            <br />
            <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="p-8 rounded-2xl border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <Sparkles className="w-8 h-8 text-primary mb-6 relative" />
            <p className="relative text-muted-foreground leading-relaxed text-lg">
              I am not limited to writing code. I understand <span className="text-foreground font-semibold">systems, users, and business workflows</span> — 
              and I know how to connect the dots between them. Whether it's sitting with a client to 
              gather requirements, collaborating with a development team on architecture, or presenting 
              solutions to management, I can operate across all layers of a project. My strength lies 
              in <span className="text-foreground font-semibold">translating complex technical ideas into practical, actionable plans</span> that 
              everyone — from engineers to stakeholders — can align on. I bring a well-rounded 
              perspective that goes beyond any single domain, and I am always ready to learn whatever 
              a role demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesMeDifferent;
