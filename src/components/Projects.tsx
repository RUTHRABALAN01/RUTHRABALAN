import { ExternalLink, Github, Eye, Layers, Cpu, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const flagshipProject = {
    title: 'AI-Driven Automated Visualization Plugin for CAD Systems',
    description: 'An intelligent CAD plugin that automatically analyzes mechanical components and assemblies to generate optimal visualizations. The system detects contacts, predicts constraints, and selects informative viewpoints using traditional geometric and rule-based methods in Phase 1, followed by deep learning integration in later phases.',
    features: [
      'Automatic contact detection',
      'Constraint inference',
      'Viewpoint optimization',
      'Phase-wise transparent development',
      'Traditional-to-AI hybrid approach',
    ],
    status: 'Phase 1 – Traditional Methods (Active Development)',
    tags: ['Python', 'Computer Vision', 'CAD API', 'Geometry Processing', 'Rule-Based Systems'],
  };

  const careerInterests = [
    { icon: Cpu, title: 'AI Systems Engineering', description: 'Building production-ready AI pipelines' },
    { icon: Eye, title: 'Computer Vision Engineering', description: 'Visual perception and analysis systems' },
    { icon: Layers, title: 'CAD / CAE Automation', description: 'Intelligent design automation' },
    { icon: Target, title: 'Research & Development', description: 'Industrial AI applications' },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// FLAGSHIP PROJECT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>
        
        {/* Flagship Project Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-2xl border-gradient overflow-hidden hover:scale-[1.01] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative p-8 md:p-12 space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-mono text-primary">{flagshipProject.status}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                {flagshipProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {flagshipProject.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {flagshipProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {flagshipProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 pt-4">
                <Button variant="cyber" size="lg">
                  <Github className="w-4 h-4" />
                  View Repository
                </Button>
                <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                  Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Career Interests */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">// CAREER INTERESTS</span>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">
            Areas of <span className="text-gradient">Focus</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerInterests.map((interest, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border-gradient group hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <interest.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-mono font-semibold text-foreground mb-2">{interest.title}</h4>
              <p className="text-sm text-muted-foreground">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
