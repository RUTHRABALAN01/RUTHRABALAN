import { Code2, Eye, BarChart3, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Eye, label: 'Computer Vision', value: 'Multi-Camera Systems' },
    { icon: Code2, label: 'CAD Automation', value: 'AI-Driven Design' },
    { icon: BarChart3, label: 'Business Analysis', value: 'Requirements & Data' },
    { icon: Users, label: 'Stakeholder Communication', value: 'Tech ↔ Business' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-mono text-sm">// ABOUT ME</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                AI Engineer with a
                <br />
                <span className="text-gradient">Business Lens</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a B.Tech Artificial Intelligence and Machine Learning student 
                who builds practical, system-level AI solutions while also developing 
                strong analytical and operational skills. My technical work combines 
                classical algorithms, computer vision, geometric reasoning, and deep 
                learning to automate complex engineering workflows.
              </p>
              <p>
                Alongside engineering, I am actively preparing for business analyst, 
                operations, and technical operations roles. I focus on understanding the 
                "why" behind a problem — gathering requirements, mapping processes, interpreting 
                data, and communicating solutions so both technical teams and management can 
                align and act.
              </p>
              <p>
                I value clarity, transparency, and measurable impact. I document my work 
                phase by phase and aim to deliver solutions that are technically sound 
                <em>and</em> commercially meaningful.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border-gradient group hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-mono text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Visual - Philosophy */}
          <div className="relative">
            <div className="rounded-2xl border-gradient overflow-hidden relative p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              
              <div className="relative space-y-6">
                <h3 className="font-mono text-xl text-primary mb-6">How I Work</h3>
                
                <div className="space-y-4">
                  {[
                    'Start with the business or user problem, then design the solution',
                    'Use data and structured thinking to support decisions',
                    'Translate complex technical ideas for non-technical stakeholders',
                    'Build modular, explainable, and performance-aware systems',
                    'Document and iterate continuously for transparency',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <span className="text-primary font-mono text-sm mt-1">0{index + 1}</span>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
