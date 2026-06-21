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
              I am not limited to writing code, and I am not positioning myself as someone 
              who only does analysis. I sit at the intersection of <span className="text-foreground font-semibold">engineering and business operations</span> — 
              comfortable working with data, requirements, and stakeholders just as much as 
              with code, models, and systems. Whether it's gathering requirements for a business 
              analyst task, collaborating with developers on architecture, or presenting trade-offs 
              to management, I can translate between technical and business language. My strength 
              is turning complex information into clear, actionable direction that helps teams 
              build the right thing and explain it well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesMeDifferent;
