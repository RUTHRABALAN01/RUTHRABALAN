import { GraduationCap, CheckCircle } from 'lucide-react';

const Education = () => {
  const workValues = [
    'Engineering-first mindset',
    'Strong fundamentals over shortcuts',
    'Clean, modular, documented code',
    'Transparency in development',
    'Continuous learning and iteration',
  ];

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-mono text-sm">// EDUCATION</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Academic <span className="text-gradient">Background</span>
              </h2>
            </div>
            
            <div className="p-8 rounded-2xl border-gradient">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-mono text-foreground">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-lg text-primary font-mono">
                    Computer Science and Engineering
                  </p>
                  <p className="text-muted-foreground">
                    Specialization: Artificial Intelligence & Machine Learning
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mt-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-mono text-accent">Undergraduate Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Work Style & Values */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-mono text-sm">// WORK STYLE</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Values & <span className="text-gradient">Approach</span>
              </h2>
            </div>
            
            <div className="p-8 rounded-2xl border-gradient space-y-6">
              {workValues.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
