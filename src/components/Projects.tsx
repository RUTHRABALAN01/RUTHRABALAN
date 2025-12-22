import { Code, Database, Layers, CheckCircle } from 'lucide-react';

const Projects = () => {
  const phase1 = {
    title: 'Phase 1: Foundation & API Mastery',
    duration: 'Months 1–3',
    goal: 'Bridge the gap between 2D sketches and 3D space.',
    tasks: [
      {
        title: 'API Exploration',
        description: 'Master the adsk.fusion Python API. Focus on the sketch and bRep modules.',
        icon: Code,
      },
      {
        title: 'The "Sketch-to-Solid" Engine',
        description: 'Write a script that can identify "Profiles" in a sketch and perform automated extrusions based on a naming convention (e.g., if a sketch is named "Body_10mm", the script extrudes it by 10mm).',
        icon: Layers,
      },
      {
        title: 'Contact Identification',
        description: 'Research B-Rep (Boundary Representation) traversal. Write logic that finds where faces of different bodies occupy the same coordinate space—this is how your AI will know where parts touch.',
        icon: Database,
      },
    ],
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// CURRENT FOCUS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Project <span className="text-gradient">Roadmap</span>
          </h2>
        </div>
        
        {/* Phase 1 Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            {/* Phase Header */}
            <div className="p-8 border-b border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full">
                  {phase1.duration}
                </span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">Active</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4">
                {phase1.title}
              </h3>
              
              <p className="text-muted-foreground text-lg italic">
                Goal: {phase1.goal}
              </p>
            </div>
            
            {/* Tasks */}
            <div className="divide-y divide-border">
              {phase1.tasks.map((task, index) => (
                <div key={index} className="p-6 hover:bg-secondary/30 transition-colors group">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <task.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono font-semibold text-foreground flex items-center gap-2">
                        {task.title}
                        <CheckCircle className="w-4 h-4 text-muted-foreground/50" />
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
